const printer = require('@thiagoelg/node-printer');

console.log(printer.getPrinters()); // lista todas, confirma que o nome é exatamente este

printer.printDirect({
  data: "Página de teste Bematech MP-4200 HS\n\n",
  printer: "Bematech MP-4200 HS",  // NOME EXATO do Windows
  type: "RAW",
  success: function(jobID){
    console.log("Impressão enviada, ID:", jobID);
  },
  error: function(err){
    console.error("Erro de impressão:", err);
  }
});
