// 1. IMPORTAÇÕES E CONFIGURAÇÃO
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const { Printer } = require('escpos');
const usb = require('escpos-usb');

const VENDOR_ID = 0x0416;
const PRODUCT_ID = 0x5011;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// 2. REFERÊNCIAS AO FIRESTORE
const db = admin.firestore();
const clienteId = 'reiburguer';
const pedidosRef = db.collection('clientes').doc(clienteId).collection('pedidos');

// ===============================================================================================
// 3. FUNÇÃO DE IMPRESSÃO - VERSÃO OTIMIZADA COM TRATAMENTO ROBUSTO
// ===============================================================================================
async function imprimirPedido(pedido, tipoComanda) {
    let device = null;
    let printer = null;

    try {
        // 1. GERAÇÃO DOS DADOS E CÁLCULOS
        const dataEHora = pedido.data && pedido.data.toDate ? pedido.data.toDate() : new Date(pedido.hora);
        const dataFormatada = dataEHora.toLocaleDateString('pt-BR');
        const horaFormatada = dataEHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        
        let subtotalItens = 0;
        let dadosItensFormatados = "";
        let dadosParaImpressaoConsole = `--- NOVO PEDIDO | REI BURGUER | ${tipoComanda} ---\n\n`;
        
        // --- CABEÇALHO E CLIENTE (LOG) ---
        dadosParaImpressaoConsole += `Data: ${dataFormatada} | Hora: ${horaFormatada}\n`;
        if (pedido.cliente && pedido.cliente.nome) {
            dadosParaImpressaoConsole += `Nome do Cliente: ${pedido.cliente.nome}\n`;
            dadosParaImpressaoConsole += `Telefone: ${pedido.cliente.telefone}\n`;
            dadosParaImpressaoConsole += `Tipo de Pedido: ${pedido.cliente.tipo}\n\n`;
        } else {
            dadosParaImpressaoConsole += `Cliente ID: ${pedido.clienteId || 'N/A'}\n\n`;
        }
        
        // --- ENDEREÇO (LOG) ---
        if (pedido.cliente && pedido.cliente.tipo === 'Entrega' && pedido.cliente.endereco) {
            dadosParaImpressaoConsole += `--- ENDEREÇO DE ENTREGA ---\n`;
            dadosParaImpressaoConsole += `Bairro: ${pedido.cliente.endereco.bairro}\n`;
            dadosParaImpressaoConsole += `Rua: ${pedido.cliente.endereco.rua}\n`;
            dadosParaImpressaoConsole += `Número: ${pedido.cliente.endereco.numero}\n`;
            if (pedido.cliente.endereco.complemento) {
                dadosParaImpressaoConsole += `Complemento: ${pedido.cliente.endereco.complemento}\n`;
            }
            dadosParaImpressaoConsole += `\n`;
        }
        
        dadosParaImpressaoConsole += "--- ITENS DO PEDIDO ---\n";
        
        // --- GERAÇÃO DOS ITENS E CÁLCULO DE VALORES ---
        if (pedido.itens && Array.isArray(pedido.itens)) {
            pedido.itens.forEach(item => {
                const precoBase = parseFloat(item.precoBase) || 0;
                let precoTotalItem = precoBase;
                let linhaItem = `${item.quantidade}x ${item.nome} - R$ ${precoBase.toFixed(2).replace('.', ',')}\n`;
                
                if (item.observacoes) {
                    linhaItem += ` - Obs: ${item.observacoes}\n`;
                }
                
                // Adicionais
                if (item.adicionais && Object.keys(item.adicionais).length > 0) {
                    linhaItem += ` - Adicionais:\n`;
                    for (const nomeAdicional in item.adicionais) {
                        const adicional = item.adicionais[nomeAdicional];
                        if (adicional.preco !== undefined) {
                            const precoAdicional = parseFloat(adicional.preco) || 0;
                            const quantidadeAdicional = parseInt(adicional.quantidade, 10) || 1;
                            precoTotalItem += precoAdicional * quantidadeAdicional;
                            linhaItem += `  -> ${nomeAdicional} (${quantidadeAdicional}) - R$ ${(precoAdicional * quantidadeAdicional).toFixed(2).replace('.', ',')}\n`;
                        } else {
                            const quantidadeAdicional = parseInt(adicional.quantidade, 10) || 1;
                            linhaItem += `  -> ${nomeAdicional} (${quantidadeAdicional})\n`;
                        }
                    }
                }
                
                // Bebidas
                if (item.bebidas && Object.keys(item.bebidas).length > 0) {
                    linhaItem += ` - Bebidas:\n`;
                    for (const nomeBebida in item.bebidas) {
                        const bebida = item.bebidas[nomeBebida];
                        const quantidadeBebida = parseInt(bebida.quantidade, 10) || 1;
                        const precoBebida = parseFloat(bebida.preco) || 0;
                        precoTotalItem += precoBebida * quantidadeBebida;
                        linhaItem += `  -> ${nomeBebida} (${quantidadeBebida}) - R$ ${(precoBebida * quantidadeBebida).toFixed(2).replace('.', ',')}\n`;
                    }
                }
                
                subtotalItens += precoTotalItem * item.quantidade;
                linhaItem += `  -> Total do Item: R$ ${(precoTotalItem * item.quantidade).toFixed(2).replace('.', ',')}\n`;
                
                dadosItensFormatados += linhaItem;
                dadosParaImpressaoConsole += linhaItem;
            });
        }
        
        // --- RODAPÉ ---
        let valorTotal = subtotalItens;
        dadosParaImpressaoConsole += "\n--------------------\n";
        dadosParaImpressaoConsole += `Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}\n`;
        
        if (pedido.taxaEntrega > 0) {
            dadosParaImpressaoConsole += `Taxa de Entrega: R$ ${pedido.taxaEntrega.toFixed(2).replace('.', ',')}\n`;
            valorTotal += pedido.taxaEntrega;
        }
        
        dadosParaImpressaoConsole += `\nTOTAL DO PEDIDO: R$ ${valorTotal.toFixed(2).replace('.', ',')}\n`;
        dadosParaImpressaoConsole += "--------------------\n";
        
        if (pedido.pagamento) {
            dadosParaImpressaoConsole += `Forma de Pagamento: ${pedido.pagamento}\n`;
        }
        
        if (pedido.troco > 0) {
            const valorTroco = parseFloat(pedido.troco);
            if (!isNaN(valorTroco)) {
                dadosParaImpressaoConsole += `Troco para: R$ ${valorTroco.toFixed(2).replace('.', ',')}\n`;
            }
        }
        
        dadosParaImpressaoConsole += "--------------------\n\n\n\n";
        dadosParaImpressaoConsole += "=========================FIM DO PEDIDO=========================";
        
        // EXIBE O LOG COMPLETO
        console.log(`\nComanda '${tipoComanda}' gerada para o pedido. (Tentando enviar para USB)\n`);
        console.log(dadosParaImpressaoConsole);
        
        // 2. IMPRESSÃO USB (ESC/POS) - COM TRATAMENTO ROBUSTO
        device = new usb(VENDOR_ID, PRODUCT_ID);
        
        // Aguarda abertura do dispositivo
        await new Promise((resolve, reject) => {
            device.open((error) => {
                if (error) {
                    reject(new Error(`Falha ao abrir dispositivo USB: ${error.message}`));
                } else {
                    resolve();
                }
            });
        });
        
        printer = new Printer(device);
        
        // Comandos de Formatação
        printer
            .align('ct')
            .style('B')
            .size(2, 2)
            .text(`NOVO PEDIDO`)
            .size(1, 1)
            .text(`REI BURGUER | ${tipoComanda}`)
            .text('--------------------------------\n')
            .align('lt')
            .style('NORMAL')
            .text(`Data: ${dataFormatada} | Hora: ${horaFormatada}`)
            .text(`Nome do Cliente: ${pedido.cliente.nome || 'N/A'}`)
            .text(`Telefone: ${pedido.cliente.telefone || 'N/A'}`)
            .text(`Tipo de Pedido: ${pedido.cliente.tipo || 'N/A'}\n`);
        
        // ENDEREÇO DE ENTREGA
        if (pedido.cliente && pedido.cliente.tipo === 'Entrega' && pedido.cliente.endereco) {
            printer.style('B').text('--- ENDEREÇO DE ENTREGA ---').style('NORMAL');
            printer.text(`Bairro: ${pedido.cliente.endereco.bairro}`);
            printer.text(`Rua: ${pedido.cliente.endereco.rua}`);
            printer.text(`Número: ${pedido.cliente.endereco.numero}`);
            if (pedido.cliente.endereco.complemento) {
                printer.text(`Complemento: ${pedido.cliente.endereco.complemento}`);
            }
            printer.text('\n');
        }
        
        // ITENS DO PEDIDO
        printer.style('B').text('--- ITENS DO PEDIDO ---').style('NORMAL');
        printer.text(dadosItensFormatados);
        
        // TOTAIS
        printer.text("--------------------------------");
        printer.text(`Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}`);
        
        if (pedido.taxaEntrega > 0) {
            printer.text(`Taxa de Entrega: R$ ${pedido.taxaEntrega.toFixed(2).replace('.', ',')}`);
        }
        
        // DESTAQUE NO TOTAL
        printer
            .align('ct')
            .style('B')
            .size(2, 2)
            .text(`TOTAL: R$ ${valorTotal.toFixed(2).replace('.', ',')}`)
            .size(1, 1)
            .style('NORMAL')
            .align('lt');
        
        printer.text('--------------------------------');
        
        // FORMA DE PAGAMENTO E TROCO
        if (pedido.pagamento) {
            printer.text(`Forma de Pagamento: ${pedido.pagamento}`);
        }
        
        if (pedido.troco > 0) {
            const valorTroco = parseFloat(pedido.troco);
            if (!isNaN(valorTroco)) {
                printer.text(`Troco para: R$ ${valorTroco.toFixed(2).replace('.', ',')}`);
            }
        }
        
        // Finalização
        printer.text('--------------------------------');
        printer.feed(4);
        printer.cut();
        
        // Fecha o dispositivo
        await new Promise((resolve, reject) => {
            printer.close((error) => {
                if (error) {
                    reject(new Error(`Erro ao fechar impressora: ${error.message}`));
                } else {
                    resolve();
                }
            });
        });
        
        console.log(`[IMPRESSÃO USB] Comanda '${tipoComanda}' ENVIADA e CONCLUÍDA com sucesso!`);
        return true;
        
    } catch (error) {
        console.error("-----------------------------------------------------------------------------------------------------");
        console.error(`ERRO DE IMPRESSÃO (Hardware): Falha na comanda '${tipoComanda}'.`);
        console.error(`Detalhes: ${error.message}`);
        console.error(`DICA: Verifique a conexão USB e se a impressora está LIGADA (VID/PID: 0x0416/0x5011).`);
        console.error("-----------------------------------------------------------------------------------------------------");
        
        // Tenta fechar o dispositivo em caso de erro
        if (device) {
            try {
                device.close();
            } catch (closeError) {
                console.error(`Erro ao tentar fechar dispositivo após falha: ${closeError.message}`);
            }
        }
        
        return false;
    }
}

// ===============================================================================================
// 4. ESCUTA DOS PEDIDOS DO FIRESTORE
// ===============================================================================================
pedidosRef.where('status', '==', 'pendente_impressao')
    .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(async change => {
            if (change.type === 'added') {
                const novoPedido = change.doc.data();
                const docId = change.doc.id;
                
                console.log(`\n🔔 Novo pedido detectado (${docId})`);
                
                if (novoPedido.impressoraDestino && Array.isArray(novoPedido.impressoraDestino)) {
                    // Imprime em série para evitar conflitos
                    for (const destino of novoPedido.impressoraDestino) {
                        if (destino === 'cozinha') {
                            await imprimirPedido(novoPedido, 'COMANDA COZINHA');
                        }
                        if (destino === 'entregador') {
                            await imprimirPedido(novoPedido, 'COMANDA ENTREGADOR');
                        }
                    }
                } else {
                    console.log("⚠️ A propriedade 'impressoraDestino' não existe ou não é um array.");
                }
                
                // TODO: INTEGRAÇÃO WHATSAPP (Próxima fase)
                // await enviarPedidoWhatsApp(novoPedido, docId);
                
                // Atualiza status no Firebase
                try {
                    await db.collection('clientes').doc(clienteId).collection('pedidos').doc(docId)
                        .update({ status: 'impresso' });
                    console.log(`✅ Pedido ${docId} atualizado para 'impresso'.`);
                } catch (err) {
                    console.error('❌ Erro ao atualizar status do pedido:', err);
                }
            }
        });
    }, err => {
        console.error('❌ Erro ao ouvir mudanças no Firestore:', err);
    });

console.log("🚀 Servidor rodando! Ouvindo pedidos online do cardápio digital...");
console.log(`📍 Cliente: ${clienteId}`);
console.log(`🖨️ Impressora: VID=${VENDOR_ID.toString(16).toUpperCase()}, PID=${PRODUCT_ID.toString(16).toUpperCase()}\n`);