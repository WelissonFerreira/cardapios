const printer = require('@thiagoelg/node-printer');
const nomeDaImpressora = 'POS-58';

printer.printDirect({
  data: Buffer.from('Teste de impressão\n', 'latin1'),
  printer: nomeDaImpressora,
  type: 'RAW',
  success: function(jobID) {
    console.log('Impressão enviada, job ID: ' + jobID);
  },
  error: function(err) {
    console.error('Erro ao imprimir:', err);
  }
});
