const printer = require('@thiagoelg/node-printer');

const nomeDaImpressora = 'POS-58';

function imprimirPedido(pedido) {
    const agora = new Date();
    const dataHora = agora.toLocaleString('pt-BR');

    const texto = `
=================================
PEDIDO Nº ${pedido.numero}
=================================
Cliente: ${pedido.cliente.nome}
Telefone: ${pedido.cliente.telefone}
Tipo: ${pedido.cliente.tipo}
Data: ${dataHora}
---------------------------------
Itens:
${pedido.itens.map(item => {
    let produto = `${item.quantidade} x ${item.nome} R$ ${item.preco.toFixed(2)}`;
    if (item.observacoes && item.observacoes.trim() !== '') {
    produto += `\n  Obs: ${item.observacoes.trim()}`;
    }
    return produto;
}).join('\n')}
---------------------------------
Taxa de Entrega: R$ ${(pedido.taxaEntrega || 0).toFixed(2)}
Total: R$ ${pedido.itens.reduce((total, item) => total + item.preco * item.quantidade, 0) + (pedido.taxaEntrega || 0)}
Pagamento: ${pedido.pagamento}
Troco: R$ ${(pedido.troco || 0).toFixed(2)}
=================================
Obrigado pela preferência!
\n\n\n`; // Quebras de linha para empurrar papel

printer.printDirect({
    data: Buffer.from(texto, 'latin1'),
    printer: nomeDaImpressora,
    type: 'RAW',
    success: function (jobID) {
        console.log(`✅ Impressão enviada! Job ID: ${jobID}`);
    },
    error: function (err) {
        console.error('❌ ERRO ao imprimir:', err);
    }
});
}

module.exports = { imprimirPedido };
