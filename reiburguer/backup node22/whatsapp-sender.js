// whatsapp-sender.js
// Formata e envia pedidos para o WhatsApp do estabelecimento

const { getWhatsAppSocket, isWhatsAppConnected } = require('./whatsapp-connection');

// Número do estabelecimento (Rei Burguer)
const NUMERO_ESTABELECIMENTO = '5595991699523@s.whatsapp.net';

/**
 * Formata o pedido em uma mensagem bonita para WhatsApp
 */
function formatarMensagemPedido(pedido, docId) {
   // Substitua por:

const dataEHora = pedido.data && pedido.data.toDate ? pedido.data.toDate() : new Date(pedido.hora);
const dataFormatada = dataEHora.toLocaleDateString('pt-BR');
const horaFormatada = dataEHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });


    let mensagem = `🍔 *NOVO PEDIDO - REI BURGUER* 🍔\n`;
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    // Informações do cliente
    mensagem += `👤 *Cliente:* ${pedido.cliente.nome || 'Não informado'}\n`;
    mensagem += `📞 *Telefone:* ${pedido.cliente.telefone || 'Não informado'}\n`;
    mensagem += `📦 *Tipo:* ${pedido.cliente.tipo || 'N/A'}\n`;
    mensagem += `🕐 *Horário:* ${dataFormatada} às ${horaFormatada}\n`;
    mensagem += `🆔 *ID do Pedido:* ${docId}\n\n`;

    // Endereço de entrega
    if (pedido.cliente && pedido.cliente.tipo === 'Entrega' && pedido.cliente.endereco) {
        mensagem += `📍 *ENDEREÇO DE ENTREGA*\n`;
        mensagem += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        mensagem += `🏘️ Bairro: ${pedido.cliente.endereco.bairro}\n`;
        mensagem += `🛣️ Rua: ${pedido.cliente.endereco.rua}\n`;
        mensagem += `🔢 Número: ${pedido.cliente.endereco.numero}\n`;
        if (pedido.cliente.endereco.complemento) {
            mensagem += `📝 Complemento: ${pedido.cliente.endereco.complemento}\n`;
        }
        mensagem += `\n`;
    }

    // Itens do pedido
    mensagem += `🛒 *ITENS DO PEDIDO*\n`;
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    let subtotalItens = 0;

    if (pedido.itens && Array.isArray(pedido.itens)) {
        pedido.itens.forEach((item, index) => {
            const precoBase = parseFloat(item.precoBase) || 0;
            let precoTotalItem = precoBase;

            mensagem += `*${index + 1}. ${item.nome}*\n`;
            mensagem += `   Quantidade: ${item.quantidade} | Preço: R$ ${precoBase.toFixed(2).replace('.', ',')}\n`;

            // Observações
            if (item.observacoes) {
                mensagem += `   💬 _Obs: ${item.observacoes}_\n`;
            }

            // Adicionais
            if (item.adicionais && Object.keys(item.adicionais).length > 0) {
                mensagem += `   ➕ *Adicionais:*\n`;
                for (const nomeAdicional in item.adicionais) {
                    const adicional = item.adicionais[nomeAdicional];
                    if (adicional.preco !== undefined) {
                        const precoAdicional = parseFloat(adicional.preco) || 0;
                        const quantidadeAdicional = parseInt(adicional.quantidade, 10) || 1;
                        precoTotalItem += precoAdicional * quantidadeAdicional;
                        mensagem += `      • ${nomeAdicional} (${quantidadeAdicional}x) - R$ ${(precoAdicional * quantidadeAdicional).toFixed(2).replace('.', ',')}\n`;
                    } else {
                        const quantidadeAdicional = parseInt(adicional.quantidade, 10) || 1;
                        mensagem += `      • ${nomeAdicional} (${quantidadeAdicional}x)\n`;
                    }
                }
            }

            // Bebidas
            if (item.bebidas && Object.keys(item.bebidas).length > 0) {
                mensagem += `   🥤 *Bebidas:*\n`;
                for (const nomeBebida in item.bebidas) {
                    const bebida = item.bebidas[nomeBebida];
                    const quantidadeBebida = parseInt(bebida.quantidade, 10) || 1;
                    const precoBebida = parseFloat(bebida.preco) || 0;
                    precoTotalItem += precoBebida * quantidadeBebida;
                    mensagem += `      • ${nomeBebida} (${quantidadeBebida}x) - R$ ${(precoBebida * quantidadeBebida).toFixed(2).replace('.', ',')}\n`;
                }
            }

            subtotalItens += precoTotalItem * item.quantidade;
            mensagem += `   💰 *Total: R$ ${(precoTotalItem * item.quantidade).toFixed(2).replace('.', ',')}*\n\n`;
        });
    }

    // Resumo financeiro
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    mensagem += `💵 *RESUMO FINANCEIRO*\n`;
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    mensagem += `Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}\n`;

    let valorTotal = subtotalItens;

    if (pedido.taxaEntrega > 0) {
        mensagem += `Taxa de Entrega: R$ ${pedido.taxaEntrega.toFixed(2).replace('.', ',')}\n`;
        valorTotal += pedido.taxaEntrega;
    }

    mensagem += `\n*🎯 TOTAL: R$ ${valorTotal.toFixed(2).replace('.', ',')}*\n\n`;

    // Forma de pagamento
    if (pedido.pagamento) {
        mensagem += `💳 *Pagamento:* ${pedido.pagamento}\n`;
    }

    if (pedido.troco > 0) {
        const valorTroco = parseFloat(pedido.troco);
        if (!isNaN(valorTroco)) {
            mensagem += `💵 *Troco para:* R$ ${valorTroco.toFixed(2).replace('.', ',')}\n`;
        }
    }

    mensagem += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    mensagem += `✅ _Pedido recebido com sucesso!_`;

    return mensagem;
}

/**
 * Envia o pedido para o WhatsApp do estabelecimento
 */
async function enviarPedidoWhatsApp(pedido, docId) {
    try {
        // Verifica se está conectado
        if (!isWhatsAppConnected()) {
            console.warn('⚠️ WhatsApp não conectado. Pedido não enviado via WhatsApp.');
            return false;
        }

        const sock = getWhatsAppSocket();
        if (!sock) {
            console.warn('⚠️ Socket do WhatsApp não disponível.');
            return false;
        }

        // Formata a mensagem
        const mensagem = formatarMensagemPedido(pedido, docId);

        // Envia a mensagem
        await sock.sendMessage(NUMERO_ESTABELECIMENTO, { text: mensagem });

        console.log(`✅ Pedido ${docId} enviado para WhatsApp com sucesso!`);
        return true;

    } catch (error) {
        console.error('❌ Erro ao enviar pedido para WhatsApp:', error.message);
        return false;
    }
}

module.exports = {
    enviarPedidoWhatsApp,
    formatarMensagemPedido
};