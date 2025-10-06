const axios = require('axios');

/* PARTE API WHATSAPP + CONFIGURAÇÕES */
require('dotenv').config({path: './chaves.env'});

// Variáveis que conecta e recebe os dados de chaves.env

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_ID = process.env.WHATSAPP_PHONE_ID;
const NUMERO_DESTINO = process.env.NUMERO_DO_ESTABELECIMENTO;

async function enviarPedidoWhatsApp (pedido, docID) {
    if (WHATSAPP_TOKEN === '' || PHONE_ID === '' || NUMERO_DESTINO === '') {
        console.error('Falha na execução dos dados da API WHATSAPP')
        return false
    }

    const url = `https://graph.facebook.com/v22.0/${PHONE_ID}/messages`;
    const mensagem = montarMensagemPedido(pedido);
    const payload = {
        "messaging_product": "whatsapp",
        "to": NUMERO_DESTINO,
        type: "text",
        "text": {
            "body": mensagem
        }
}

    const axiosConfig = {
        headers: {
                'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
                'Content-Type': 'application/json'
        }
    }

    try {
        const response = await axios.post(url, payload, axiosConfig)
        console.log(`WhatsApp: Pedido ${docID} enviado com sucesso!`)
        return true
        

    } catch(error) {
    console.error(`Erro na requisição AxiosError: ${error.message}! `)
    
    // ESTE É O CÓDIGO CRUCIAL:
    if (error.response) {
        console.error('Detalhes do Erro da API Meta:', error.response.data);
    }
    
    return false
    }

    

};


// FUNÇÃO QUE ENVIA O PEDIDO PARA O WHATSAPP DO ESTABELECIMENTO

/**
 * Monta o texto completo da notificação de pedido para o estabelecimento.
 * @param {object} pedido - O objeto do pedido vindo do Firestore.
 * @returns {string} - O texto formatado com marcadores do WhatsApp.
 */
function montarMensagemPedido(pedido) {
    const dataHora = new Date(pedido.hora || Date.now()); 
    const horaFormatada = dataHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    // Usamos '\n\n' para pular duas linhas e formatamos em Negrito usando *
    let texto = `*🔔 NOVO PEDIDO CHEGOU! (${pedido.cliente.tipo}) - ${horaFormatada}*\n\n`;
    texto += `*CLIENTE:* ${pedido.cliente.nome}\n`;
    texto += `*TELEFONE:* ${pedido.cliente.telefone}\n`;
    
    // --- Lógica de Endereço (se for Entrega) ---
    if (pedido.cliente.tipo === 'Entrega' && pedido.cliente.endereco) {
        // Continue AQUI! (Dica: use '\n' para quebra de linha e '*' para negrito nos rótulos)
        
        texto += '\n*ENDEREÇO DE ENTREGA:*\n';
        texto += `*Rua:* ${pedido.cliente.endereco.rua}, N° ${pedido.cliente.endereco.numero}\n`;
        texto += `*Bairro:* ${pedido.cliente.endereco.bairro}\n`;

        if (pedido.cliente.endereco.complemento) {
            texto += `*Complemento:* ${pedido.cliente.endereco.complemento}\n`;
        }
        
    }
    
    // --- Próxima seção do pedido ---
    texto += '\n*PRODUTOS:*\n';

    let subtotal = 0; // Usado para calcular o subtotal
    
    // O Loop dos Itens
    if (pedido.itens && Array.isArray(pedido.itens)) {
        pedido.itens.forEach(item => {
            let precoBaseUnitario = parseFloat(item.precoBase) || 0;
            let precoItemTotal = precoBaseUnitario * (item.quantidade || 1);
            
            // 1. Linha do Item Principal
            // Ex: - 2x X-SALADA - R$ 50,00
            texto += `*- ${item.quantidade}x ${item.nome} - R$ ${precoItemTotal.toFixed(2).replace('.', ',')}*\n`;

            // 2. Adicionais
            if (item.adicionais && Object.keys(item.adicionais).length > 0) {
                // Rótulo dos adicionais
                texto += `  - Adicionais:\n`; 
                for (const nomeAdicional in item.adicionais) {
                    const adicional = item.adicionais[nomeAdicional];
                    const quantidadeAdicional = parseInt(adicional.quantidade, 10) || 1;
                    let precoAdicionalUnitario = parseFloat(adicional.preco) || 0;
                    let precoAdicionalTotal = precoAdicionalUnitario * quantidadeAdicional;
                    
                    precoItemTotal += precoAdicionalTotal; // Soma o preço do adicional no total do item
                    
                    // Ex:     + Catupiry (R$ 5,00)
                    texto += `    + ${nomeAdicional} (R$ ${precoAdicionalUnitario.toFixed(2).replace('.', ',')})\n`;
                }
            }
            
            // 3. Observações
            if (item.observacoes) {
                // Ex:   (Obs: Sem Picles)
                texto += `  (Obs: ${item.observacoes})\n`;
            }
            
            subtotal += precoItemTotal;
        });
    }

    // --- Resumo de Valores e Totais ---
    let total = subtotal;
    let taxaEntrega = parseFloat(pedido.taxaEntrega) || 0;
    let desconto = parseFloat(pedido.desconto) || 0;
    
    texto += '\n' // Quebra de linha após produtos

    // 1. Subtotal
    texto += `*SUBTOTAL:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    
    // 2. Taxa de Entrega (se aplicável)
    if (pedido.cliente.tipo === 'Entrega' && taxaEntrega > 0) {
        total += taxaEntrega;
        texto += `*TAXA DE ENTREGA:* R$ ${taxaEntrega.toFixed(2).replace('.', ',')}\n`;
    }

    // 3. Desconto (se aplicável)
    if (desconto > 0) {
        total -= desconto;
        texto += `*DESCONTO:* - R$ ${desconto.toFixed(2).replace('.', ',')}\n`;
    }

    // 4. Total Geral (Destaque máximo com negrito)
    texto += `\n*TOTAL GERAL DO PEDIDO:* *R$ ${total.toFixed(2).replace('.', ',')}*\n`;

    // 5. Forma de Pagamento e Troco
    if (pedido.pagamento && pedido.pagamento.metodo) {
        texto += `\n*FORMA DE PGTO:* ${pedido.pagamento.metodo}\n`;
        
        if (pedido.pagamento.metodo === 'Dinheiro' && pedido.pagamento.trocoPara) {
            let troco = parseFloat(pedido.pagamento.trocoPara) || 0;
            if (troco > total) {
                texto += `*TROCO PARA:* R$ ${troco.toFixed(2).replace('.', ',')}\n`;
            } else {
                 // Caso o campo 'trocoPara' seja igual ou menor que o total, pode-se assumir "Sem Troco"
                texto += `*TROCO:* Sem Troco\n`;
            }
        }
    }
    
    // 6. Mensagem de rodapé para ação imediata
    texto += '\n_Confirme o pedido imediatamente com o cliente._';
    
    return texto;
}
    








// --- FUNÇÃO 2: PROCESSAMENTO DO CHATBOT (O próximo passo) ---
async function processarMensagemRecebida(payload) {
    console.log('[WHATSAPP] Payload recebido. Iniciando processamento do Chatbot...');
    console.log(JSON.stringify(payload, null, 2)); // Loga o JSON de forma legível

     // ... (Extração segura do 'value' está completa)
    
    const value = payload.entry?.[0]?.changes?.[0]?.value

    if (!value) {
    console.log('[WHATSAPP] Payload sem valor principal. Ignorando.');
    return;
}

    // 2. Extração da mensagem e do contato usando Encadeamento Opcional (?. e ?.[])
    const message = value?.messages?.[0];
    const contact = value?.contacts?.[0];

    // 3. Validação final: Ignoramos se não for uma mensagem válida
    if (!message || !contact) {
        // Isso pode ser um status, um evento de leitura, etc.
        console.log('[WHATSAPP] Evento processado: Não é uma mensagen de usuário nova. Ignorando.')

    }

    const mensagemRecebida = message.text?.body;
    const NUMERO_DESTINO = contact.wa_id // O ID de WhatsApp do cliente (número)

    if (mensagemRecebida === null || mensagemRecebida === undefined) {
        return
    }


    
    
}









// --- EXPORTAÇÃO ---
module.exports = {
    enviarPedidoWhatsApp,
    processarMensagemRecebida
}