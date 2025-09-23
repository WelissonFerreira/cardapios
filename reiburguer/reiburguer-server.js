// server.js

// 1. IMPORTAÇÕES E CONFIGURAÇÃO
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const printer = require('@thiagoelg/node-printer');
const nomeDaImpressora = 'POS-58';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// 2. REFERÊNCIAS AO FIRESTORE
const db = admin.firestore();
const clienteId = 'reiburguer'
const pedidosRef = db.collection('clientes').doc(clienteId).collection('pedidos');

// ---




// TESTE DE IMPRESSORA CONECTADA OU NÃO:

// ... (seu código de importação e configuração)


// --- VALIDAÇÃO DA IMPRESSORA NA INICIALIZAÇÃO ---
printer.printDirect({
    data: 'TESTE DE CONEXAO - SERVIDOR ONLINE\n\n\n\n',
    printer: nomeDaImpressora,
    type: 'RAW',
    success: function(jobID){
    console.log(`Conexão com a impressora '${nomeDaImpressora}' testada e bem-sucedida.`);
    },
    error: function(err){
    console.error(`ERRO: Não foi possível conectar à impressora '${nomeDaImpressora}'. Verifique se ela está ligada e instalada corretamente com este nome no Windows.`);
    console.log("----------------------------------------------------------------------------------------------------------------------------------");
    console.log("O servidor continuará rodando, mas não poderá imprimir. Favor corrigir a configuração da impressora.");
    console.log("----------------------------------------------------------------------------------------------------------------------------------");
    }
});

// ... (o resto do seu código, a função imprimirPedido, e a escuta do Firestore)

// 3. FUNÇÃO DE IMPRESSÃO
// Agora a função é robusta e lida com diferentes formatos de dados
function imprimirPedido(pedido, tipoComanda) {
    const dataEHora = pedido.data && pedido.data.toDate ? pedido.data.toDate() : new Date(pedido.hora);
    const dataFormatada = dataEHora.toLocaleDateString('pt-BR');
    const horaFormatada = dataEHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    let dadosParaImpressao = `--- NOVO PEDIDO | REI BURGUER | ${tipoComanda} ---\n\n`;
    dadosParaImpressao += `Data: ${dataFormatada} | Hora: ${horaFormatada}\n`;

    if (pedido.cliente && pedido.cliente.nome) {
        dadosParaImpressao += `Nome do Cliente: ${pedido.cliente.nome}\n`;
        dadosParaImpressao += `Telefone: ${pedido.cliente.telefone}\n`;
        dadosParaImpressao += `Tipo de Pedido: ${pedido.cliente.tipo}\n\n`;
    } else {
        dadosParaImpressao += `Cliente ID: ${pedido.clienteId || 'N/A'}\n`;
        dadosParaImpressao += `\n`;
    }

    if (pedido.cliente && pedido.cliente.tipo === 'Entrega' && pedido.cliente.endereco) {
        dadosParaImpressao += `--- ENDEREÇO DE ENTREGA ---\n`;
        dadosParaImpressao += `Bairro: ${pedido.cliente.endereco.bairro}\n`;
        dadosParaImpressao += `Rua: ${pedido.cliente.endereco.rua}\n`;
        dadosParaImpressao += `Número: ${pedido.cliente.endereco.numero}\n`;
        if (pedido.cliente.endereco.complemento) {
            dadosParaImpressao += `Complemento: ${pedido.cliente.endereco.complemento}\n`;
        }
        dadosParaImpressao += `\n`;
    }

    dadosParaImpressao += "--- ITENS DO PEDIDO ---\n";
    let subtotalItens = 0;

    // Garante que 'pedido.itens' é um array antes de tentar percorrê-lo
    if (pedido.itens && Array.isArray(pedido.itens)) {
        pedido.itens.forEach(item => {
            const precoBase = parseFloat(item.precoBase) || 0;
            let precoTotalItem = precoBase;

            dadosParaImpressao += `${item.quantidade}x ${item.nome} - R$ ${precoBase.toFixed(2).replace('.', ',')}\n`;

            if (item.observacoes) {
                dadosParaImpressao += ` - Obs: ${item.observacoes}\n`;
            }
            
            if (item.adicionais && Object.keys(item.adicionais).length > 0) {
                dadosParaImpressao += ` - Adicionais:\n`;
                for (const nomeAdicional in item.adicionais) {
                    const adicional = item.adicionais[nomeAdicional];
                    if (adicional.preco !== undefined) {
                        const precoAdicional = parseFloat(adicional.preco) || 0;
                        const quantidadeAdicional = parseInt(adicional.quantidade, 10) || 1;
                        precoTotalItem += precoAdicional * quantidadeAdicional;
                        dadosParaImpressao += `  -> ${nomeAdicional} (${quantidadeAdicional}) - R$ ${(precoAdicional * quantidadeAdicional).toFixed(2).replace('.', ',')}\n`;
                    } else {
                        const quantidadeAdicional = parseInt(adicional.quantidade, 10) || 1;
                        dadosParaImpressao += `  -> ${nomeAdicional} (${quantidadeAdicional})\n`;
                    }
                }
            }

            if (item.bebidas && Object.keys(item.bebidas).length > 0) {
                dadosParaImpressao += ` - Bebidas:\n`;
                for (const nomeBebida in item.bebidas) {
                    const bebida = item.bebidas[nomeBebida];
                    const quantidadeBebida = parseInt(bebida.quantidade, 10) || 1;
                    const precoBebida = parseFloat(bebida.preco) || 0;
                    precoTotalItem += precoBebida * quantidadeBebida;
                    dadosParaImpressao += `  -> ${nomeBebida} (${quantidadeBebida}) - R$ ${(precoBebida * quantidadeBebida).toFixed(2).replace('.', ',')}\n`;
                }
            }

            subtotalItens += precoTotalItem * item.quantidade;
            dadosParaImpressao += `  -> Total do Item: R$ ${(precoTotalItem * item.quantidade).toFixed(2).replace('.', ',')}\n`;
        });
    }

    dadosParaImpressao += "\n--------------------\n";
    dadosParaImpressao += `Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}\n`;

    let valorTotal = subtotalItens;
    if (pedido.taxaEntrega > 0) {
        dadosParaImpressao += `Taxa de Entrega: R$ ${pedido.taxaEntrega.toFixed(2).replace('.', ',')}\n`;
        valorTotal += pedido.taxaEntrega;
    }

    dadosParaImpressao += `\nTOTAL DO PEDIDO: R$ ${valorTotal.toFixed(2).replace('.', ',')}\n`;
    dadosParaImpressao += "--------------------\n";
    if (pedido.pagamento) {
        dadosParaImpressao += `Forma de Pagamento: ${pedido.pagamento}\n`;
    }

    if (pedido.troco > 0) {
    const valorTroco = parseFloat(pedido.troco);
    if (!isNaN(valorTroco)) {
        dadosParaImpressao += `Troco para: R$ ${valorTroco.toFixed(2).replace('.', ',')}\n`;
    }
}
    dadosParaImpressao += "--------------------\n\n\n\n";

    // Adicione esta parte do código para imprimir de verdade
    // Remove o "Simulado" no console.log final para evitar confusão
    printer.printDirect({
        data: dadosParaImpressao,
        printer: nomeDaImpressora,
        type: 'RAW',
        success: function(jobID){
        console.log(`Comanda '${tipoComanda}' gerada para o pedido. (ID do trabalho: ${jobID})`);
    },
        error: function(err){
        console.error(`Erro ao imprimir na impressora '${nomeDaImpressora}':`, err);
    }
    });

    console.log(dadosParaImpressao);
    console.log(`\nComanda '${tipoComanda}' gerada para o pedido. (Impressão enviada)\n`);

}

// ---

// 4. ESCUTA DOS PEDIDOS DO FIRESTORE
pedidosRef.where('status', '==', 'pendente_impressao')
.onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            const novoPedido = change.doc.data();
            const docId = change.doc.id;
            
            console.log(`Novo pedido para imprimir (${docId})`, novoPedido);
            
            if (novoPedido.impressoraDestino && Array.isArray(novoPedido.impressoraDestino)) {
                novoPedido.impressoraDestino.forEach(destino => {
                    if (destino === 'cozinha') {
                        imprimirPedido(novoPedido, 'COMANDA COZINHA');
                    }
                    if (destino === 'entregador') {
                        imprimirPedido(novoPedido, 'COMANDA ENTREGADOR');
                    }
                });
            } else {
                console.log("A propriedade 'impressoraDestino' não existe ou não é um array para este pedido.");
            }

            db.collection('clientes').doc(clienteId).collection('pedidos').doc(docId)
                .update({ status: 'impresso' })
                .then(() => {
                    console.log(`Pedido ${docId} atualizado para 'impresso'.`);
                })
                .catch(err => {
                    console.error('Erro ao atualizar o status do pedido:', err);
                });
        }
    });
}, err => {
    console.error('Erro ao ouvir mudanças no Firestore:', err);
});


console.log("Ouvindo pedidos online do cardápio digital...");