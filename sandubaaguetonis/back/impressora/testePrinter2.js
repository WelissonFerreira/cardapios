const { imprimirPedido } = require('./imprimirPrinter');

const pedidoTeste = {
  numero: 123,
  cliente: {
    nome: 'João',
    telefone: '(11) 99999-9999',
    tipo: 'Entrega'
  },
  itens: [
    { quantidade: 1, nome: 'X-Burguer', preco: 15.00, observacoes: 'Sem cebola' },
    { quantidade: 2, nome: 'Refrigerante', preco: 5.00, observacoes: '' }
  ],
  taxaEntrega: 4.00,
  pagamento: 'Dinheiro',
  troco: 20.00
};

imprimirPedido(pedidoTeste);
