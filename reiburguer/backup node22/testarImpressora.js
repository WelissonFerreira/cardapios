const printer = require('printer');

console.log(printer.getPrinters()); // lista impressoras do sistema

printer.printDirect({
  data: 'Teste de impressão POS-58\n',
  printer: 'POS-58',  // nome exato da impressora
  type: 'RAW',
  success: function(jobID){
      console.log("Impressão enviada! ID:", jobID);
  },
  error: function(err){
      console.error("Erro de impressão:", err);
  }
});
