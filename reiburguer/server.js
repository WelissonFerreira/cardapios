// server.js - VERSÃO COM WHATSAPP INTEGRADO
// 1. IMPORTAÇÕES E CONFIGURAÇÃO
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const { ThermalPrinter, PrinterTypes } = require('node-thermal-printer');

// Importa módulos do WhatsApp
const { connectToWhatsApp, isWhatsAppConnected } = require('./whatsapp-connection');
const { enviarPedidoWhatsApp } = require('./whatsapp-sender');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// 2. REFERÊNCIAS AO FIRESTORE
const db = admin.firestore();
const clienteId = 'reiburguer';
const pedidosRef = db.collection('clientes').doc(clienteId).collection('pedidos');

// ===============================================================================================
// 3. FUNÇÃO DE IMPRESSÃO - USANDO NODE-THERMAL-PRINTER PELO NOME
// ===============================================================================================
async function imprimirPedido(pedido, tipoComanda) {
    try {
        // 1. GERAÇÃO DOS DADOS E CÁLCULOS
        const dataEHora = pedido.data && pedido.data.toDate ? pedido.data.toDate() : new Date(pedido.hora);
        const dataFormatada = dataEHora.toLocaleDateString('pt-BR');
        const horaFormatada = dataEHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        let subtotalItens = 0;
        let dadosItensFormatados = "";
        let dadosParaImpressaoConsole = `--- NOVO PEDIDO | REI BURGUER | ${tipoComanda} ---\n\n`;

        // Cabeçalho
        dadosParaImpressaoConsole += `Data: ${dataFormatada} | Hora: ${horaFormatada}\n`;
        if (pedido.cliente && pedido.cliente.nome) {
            dadosParaImpressaoConsole += `Nome do Cliente: ${pedido.cliente.nome}\n`;
            dadosParaImpressaoConsole += `Telefone: ${pedido.cliente.telefone}\n`;
            dadosParaImpressaoConsole += `Tipo de Pedido: ${pedido.cliente.tipo}\n\n`;
        } else {
            dadosParaImpressaoConsole += `Cliente ID: ${pedido.clienteId || 'N/A'}\n\n`;
        }

        // Endereço
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

        // Itens
        if (pedido.itens && Array.isArray(pedido.itens)) {
            pedido.itens.forEach(item => {
                const precoBase = parseFloat(item.precoBase) || 0;
                let precoTotalItem = precoBase;
                let linhaItem = `${item.quantidade}x ${item.nome} - R$ ${precoBase.toFixed(2).replace('.', ',')}\n`;

                if (item.observacoes) linhaItem += ` - Obs: ${item.observacoes}\n`;

                if (item.adicionais && Object.keys(item.adicionais).length > 0) {
                    linhaItem += ` - Adicionais:\n`;
                    for (const nomeAdicional in item.adicionais) {
                        const adicional = item.adicionais[nomeAdicional];
                        const precoAdicional = parseFloat(adicional.preco || 0);
                        const quantidadeAdicional = parseInt(adicional.quantidade || 1, 10);
                        precoTotalItem += precoAdicional * quantidadeAdicional;
                        linhaItem += `  -> ${nomeAdicional} (${quantidadeAdicional}) - R$ ${(precoAdicional * quantidadeAdicional).toFixed(2).replace('.', ',')}\n`;
                    }
                }

                if (item.bebidas && Object.keys(item.bebidas).length > 0) {
                    linhaItem += ` - Bebidas:\n`;
                    for (const nomeBebida in item.bebidas) {
                        const bebida = item.bebidas[nomeBebida];
                        const quantidadeBebida = parseInt(bebida.quantidade || 1, 10);
                        const precoBebida = parseFloat(bebida.preco || 0);
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

        let valorTotal = subtotalItens;
        dadosParaImpressaoConsole += "\n--------------------\n";
        dadosParaImpressaoConsole += `Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}\n`;

        if (pedido.taxaEntrega > 0) {
            dadosParaImpressaoConsole += `Taxa de Entrega: R$ ${pedido.taxaEntrega.toFixed(2).replace('.', ',')}\n`;
            valorTotal += pedido.taxaEntrega;
        }

        dadosParaImpressaoConsole += `\nTOTAL DO PEDIDO: R$ ${valorTotal.toFixed(2).replace('.', ',')}\n`;
        dadosParaImpressaoConsole += "--------------------\n";
        if (pedido.pagamento) dadosParaImpressaoConsole += `Forma de Pagamento: ${pedido.pagamento}\n`;
        if (pedido.troco > 0) dadosParaImpressaoConsole += `Troco para: R$ ${parseFloat(pedido.troco).toFixed(2).replace('.', ',')}\n`;
        dadosParaImpressaoConsole += "--------------------\n\n\n\n";
        dadosParaImpressaoConsole += "=========================FIM DO PEDIDO=========================";

        // EXIBE O LOG COMPLETO
        console.log(`\nComanda '${tipoComanda}' gerada para o pedido. (Tentando enviar para impressora)\n`);
        console.log(dadosParaImpressaoConsole);

        // 2. IMPRESSÃO PELO NOME COM NODE-THERMAL-PRINTER
        const printer = new ThermalPrinter({
            type: PrinterTypes.EPSON,      // ou STAR, se for outra marca
            interface: 'POS-58',   // nome da impressora no Windows
            options: { timeout: 5000 }
        });

        printer.alignCenter();
        printer.bold(true);
        printer.setTextSize(2, 2);
        printer.println("NOVO PEDIDO");
        printer.setTextSize(1, 1);
        printer.println(`REI BURGUER | ${tipoComanda}`);
        printer.println('--------------------------------');
        printer.alignLeft();
        printer.bold(false);

        // Cliente e endereço
        printer.println(`Data: ${dataFormatada} | Hora: ${horaFormatada}`);
        if (pedido.cliente && pedido.cliente.nome) {
            printer.println(`Nome do Cliente: ${pedido.cliente.nome}`);
            printer.println(`Telefone: ${pedido.cliente.telefone}`);
            printer.println(`Tipo de Pedido: ${pedido.cliente.tipo}`);
        }

        if (pedido.cliente && pedido.cliente.tipo === 'Entrega' && pedido.cliente.endereco) {
            printer.bold(true).println('--- ENDEREÇO DE ENTREGA ---').bold(false);
            printer.println(`Bairro: ${pedido.cliente.endereco.bairro}`);
            printer.println(`Rua: ${pedido.cliente.endereco.rua}`);
            printer.println(`Número: ${pedido.cliente.endereco.numero}`);
            if (pedido.cliente.endereco.complemento)
                printer.println(`Complemento: ${pedido.cliente.endereco.complemento}`);
        }

        printer.bold(true).println('--- ITENS DO PEDIDO ---').bold(false);
        printer.println(dadosItensFormatados);

        // Totais
        printer.println("--------------------------------");
        printer.println(`Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}`);
        if (pedido.taxaEntrega > 0)
            printer.println(`Taxa de Entrega: R$ ${pedido.taxaEntrega.toFixed(2).replace('.', ',')}`);

        printer.alignCenter();
        printer.bold(true);
        printer.setTextSize(2, 2);
        printer.println(`TOTAL: R$ ${valorTotal.toFixed(2).replace('.', ',')}`);
        printer.setTextSize(1, 1);
        printer.bold(false);
        printer.alignLeft();

        if (pedido.pagamento)
            printer.println(`Forma de Pagamento: ${pedido.pagamento}`);
        if (pedido.troco > 0)
            printer.println(`Troco para: R$ ${parseFloat(pedido.troco).toFixed(2).replace('.', ',')}`);

        printer.println('--------------------------------');
        printer.cut();

        await printer.execute();
        console.log(`[IMPRESSÃO] Comanda '${tipoComanda}' ENVIADA e CONCLUÍDA com sucesso!`);
        return true;

    } catch (error) {
        console.error("-----------------------------------------------------------------------------------------------------");
        console.error(`ERRO DE IMPRESSÃO: Falha na comanda '${tipoComanda}'.`);
        console.error(`Detalhes: ${error.message}`);
        console.error("-----------------------------------------------------------------------------------------------------");
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

                // ===== ENVIA PARA WHATSAPP PRIMEIRO =====
                try {
                    const enviouWhatsApp = await enviarPedidoWhatsApp(novoPedido, docId);
                    if (enviouWhatsApp) {
                        console.log(`📱 Pedido ${docId} enviado para WhatsApp!`);
                    } else {
                        console.warn(`⚠️ Pedido ${docId} não foi enviado para WhatsApp (não conectado ou erro).`);
                    }
                } catch (error) {
                    console.error(`❌ Erro ao enviar WhatsApp (${docId}):`, error.message);
                }

                // ===== DEPOIS IMPRIME AS COMANDAS =====
                if (novoPedido.impressoraDestino && Array.isArray(novoPedido.impressoraDestino)) {
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

                // Atualiza status no Firebase
                try {
                    await db.collection('clientes').doc(clienteId).collection('pedidos').doc(docId)
                        .update({ status: 'impresso' });
                    console.log(`✅ Pedido ${docId} atualizado para 'impresso'.\n`);
                } catch (err) {
                    console.error('❌ Erro ao atualizar status do pedido:', err);
                }
            }
        });
    }, err => {
        console.error('❌ Erro ao ouvir mudanças no Firestore:', err);
    });

// ===============================================================================================
// 5. INICIALIZAÇÃO
// ===============================================================================================
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🍔 REI BURGUER - SISTEMA DE PEDIDOS');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Inicia conexão com WhatsApp
console.log('📱 Iniciando conexão com WhatsApp...');
connectToWhatsApp().catch(err => {
    console.error('❌ Erro ao iniciar WhatsApp:', err.message);
});

// Aguarda um pouco e exibe status
setTimeout(() => {
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ Servidor rodando!');
    console.log(`📍 Cliente: ${clienteId}`);
    console.log(`🖨️ Impressora: POS-58`);
    console.log(`📱 WhatsApp: ${isWhatsAppConnected() ? '✅ Conectado' : '⏳ Aguardando conexão...'}`);
    console.log('👂 Ouvindo pedidos do Firebase...');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}, 3000);
