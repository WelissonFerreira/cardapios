// server.js - VERSÃO COM PDF-TO-PRINTER
// 1. IMPORTAÇÕES E CONFIGURAÇÃO
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const { print } = require('pdf-to-printer');

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

// Cria pasta temp se não existir
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
}

// ===============================================================================================
// 3. FUNÇÃO DE GERAÇÃO DE PDF
// ===============================================================================================
function gerarPDF(pedido, tipoComanda, caminhoArquivo) {
    return new Promise((resolve, reject) => {
        try {
            const doc = new PDFDocument({ 
                size: [226.77, 841.89], // 80mm de largura (tamanho de impressora térmica)
                margins: { top: 10, bottom: 10, left: 10, right: 10 }
            });

            const stream = fs.createWriteStream(caminhoArquivo);
            doc.pipe(stream);

            // CABEÇALHO
            doc.fontSize(16).font('Helvetica-Bold').text('NOVO PEDIDO', { align: 'center' });
            doc.fontSize(12).text(`REI BURGUER | ${tipoComanda}`, { align: 'center' });
            doc.fontSize(10).font('Helvetica').text('--------------------------------', { align: 'center' });
            doc.moveDown(0.5);

            // DATA E HORA
            const dataEHora = pedido.data && pedido.data.toDate ? pedido.data.toDate() : new Date(pedido.hora);
            const dataFormatada = dataEHora.toLocaleDateString('pt-BR');
            const horaFormatada = dataEHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            
            doc.fontSize(9).text(`Data: ${dataFormatada} | Hora: ${horaFormatada}`);

            // CLIENTE
            if (pedido.cliente && pedido.cliente.nome) {
                doc.text(`Nome: ${pedido.cliente.nome}`);
                doc.text(`Telefone: ${pedido.cliente.telefone}`);
                doc.text(`Tipo: ${pedido.cliente.tipo}`);
            } else {
                doc.text(`Cliente ID: ${pedido.clienteId || 'N/A'}`);
            }
            doc.moveDown(0.5);

            // ENDEREÇO
            if (pedido.cliente && pedido.cliente.tipo === 'Entrega' && pedido.cliente.endereco) {
                doc.font('Helvetica-Bold').text('--- ENDEREÇO DE ENTREGA ---');
                doc.font('Helvetica');
                doc.text(`Bairro: ${pedido.cliente.endereco.bairro}`);
                doc.text(`Rua: ${pedido.cliente.endereco.rua}`);
                doc.text(`Número: ${pedido.cliente.endereco.numero}`);
                if (pedido.cliente.endereco.complemento) {
                    doc.text(`Complemento: ${pedido.cliente.endereco.complemento}`);
                }
                doc.moveDown(0.5);
            }

            // ITENS
            doc.font('Helvetica-Bold').text('--- ITENS DO PEDIDO ---');
            doc.font('Helvetica');
            doc.moveDown(0.3);

            let subtotalItens = 0;

            if (pedido.itens && Array.isArray(pedido.itens)) {
                pedido.itens.forEach(item => {
                    const precoBase = parseFloat(item.precoBase) || 0;
                    let precoTotalItem = precoBase;

                    doc.text(`${item.quantidade}x ${item.nome} - R$ ${precoBase.toFixed(2).replace('.', ',')}`);

                    if (item.observacoes) {
                        doc.fontSize(8).text(` - Obs: ${item.observacoes}`);
                        doc.fontSize(9);
                    }

                    if (item.adicionais && Object.keys(item.adicionais).length > 0) {
                        doc.text(' - Adicionais:');
                        for (const nomeAdicional in item.adicionais) {
                            const adicional = item.adicionais[nomeAdicional];
                            const precoAdicional = parseFloat(adicional.preco || 0);
                            const quantidadeAdicional = parseInt(adicional.quantidade || 1, 10);
                            precoTotalItem += precoAdicional * quantidadeAdicional;
                            doc.text(`  -> ${nomeAdicional} (${quantidadeAdicional}) - R$ ${(precoAdicional * quantidadeAdicional).toFixed(2).replace('.', ',')}`);
                        }
                    }

                    if (item.bebidas && Object.keys(item.bebidas).length > 0) {
                        doc.text(' - Bebidas:');
                        for (const nomeBebida in item.bebidas) {
                            const bebida = item.bebidas[nomeBebida];
                            const quantidadeBebida = parseInt(bebida.quantidade || 1, 10);
                            const precoBebida = parseFloat(bebida.preco || 0);
                            precoTotalItem += precoBebida * quantidadeBebida;
                            doc.text(`  -> ${nomeBebida} (${quantidadeBebida}) - R$ ${(precoBebida * quantidadeBebida).toFixed(2).replace('.', ',')}`);
                        }
                    }

                    subtotalItens += precoTotalItem * item.quantidade;
                    doc.text(`  -> Total do Item: R$ ${(precoTotalItem * item.quantidade).toFixed(2).replace('.', ',')}`);
                    doc.moveDown(0.3);
                });
            }

            // TOTAIS
            let valorTotal = subtotalItens;
            doc.text('--------------------------------');
            doc.text(`Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}`);

            if (pedido.taxaEntrega > 0) {
                doc.text(`Taxa de Entrega: R$ ${pedido.taxaEntrega.toFixed(2).replace('.', ',')}`);
                valorTotal += pedido.taxaEntrega;
            }

            doc.moveDown(0.5);
            doc.fontSize(14).font('Helvetica-Bold').text(`TOTAL: R$ ${valorTotal.toFixed(2).replace('.', ',')}`, { align: 'center' });
            doc.fontSize(9).font('Helvetica');
            doc.moveDown(0.5);

            // PAGAMENTO
            if (pedido.pagamento) {
                doc.text(`Forma de Pagamento: ${pedido.pagamento}`);
            }
            if (pedido.troco > 0) {
                doc.text(`Troco para: R$ ${parseFloat(pedido.troco).toFixed(2).replace('.', ',')}`);
            }

            doc.text('--------------------------------');
            doc.moveDown(2);

            doc.end();

            stream.on('finish', () => resolve(caminhoArquivo));
            stream.on('error', reject);

        } catch (error) {
            reject(error);
        }
    });
}

// ===============================================================================================
// 4. FUNÇÃO DE IMPRESSÃO - USANDO PDF-TO-PRINTER
// ===============================================================================================
async function imprimirPedido(pedido, tipoComanda) {
    const timestamp = Date.now();
    const nomeArquivo = `pedido_${tipoComanda.replace(/\s+/g, '_')}_${timestamp}.pdf`;
    const caminhoCompleto = path.join(tempDir, nomeArquivo);

    try {
        // 1. GERAÇÃO DOS DADOS E CÁLCULOS (PARA O CONSOLE.LOG)
        const dataEHora = pedido.data && pedido.data.toDate ? pedido.data.toDate() : new Date(pedido.hora);
        const dataFormatada = dataEHora.toLocaleDateString('pt-BR');
        const horaFormatada = dataEHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        let subtotalItens = 0;
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

        // 2. GERA O PDF
        await gerarPDF(pedido, tipoComanda, caminhoCompleto);
        console.log(`[PDF] Arquivo gerado: ${nomeArquivo}`);

        // 3. IMPRIME O PDF
        const options = {
            printer: 'POS-58', // Nome da sua impressora (ou remova essa linha para usar a padrão)
            // scale: 'fit', // Descomente se quiser ajustar o tamanho
            // silent: true, // Descomente para silenciar erros
        };

        await print(caminhoCompleto, options);
        console.log(`[IMPRESSÃO] Comanda '${tipoComanda}' ENVIADA e CONCLUÍDA com sucesso!`);

        // 4. APAGA O PDF APÓS 3 SEGUNDOS (tempo para garantir que foi impresso)
        setTimeout(() => {
            if (fs.existsSync(caminhoCompleto)) {
                fs.unlinkSync(caminhoCompleto);
                console.log(`[LIMPEZA] PDF temporário apagado: ${nomeArquivo}`);
            }
        }, 3000);

        return true;

    } catch (error) {
        console.error("-----------------------------------------------------------------------------------------------------");
        console.error(`ERRO DE IMPRESSÃO: Falha na comanda '${tipoComanda}'.`);
        console.error(`Detalhes: ${error.message}`);
        console.error("-----------------------------------------------------------------------------------------------------");

        // Tenta apagar o PDF mesmo em caso de erro
        if (fs.existsSync(caminhoCompleto)) {
            try {
                fs.unlinkSync(caminhoCompleto);
                console.log(`[LIMPEZA] PDF temporário apagado após erro: ${nomeArquivo}`);
            } catch (deleteError) {
                console.error(`[ERRO] Não foi possível apagar o PDF: ${deleteError.message}`);
            }
        }

        return false;
    }
}

// ===============================================================================================
// 5. ESCUTA DOS PEDIDOS DO FIRESTORE
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
// 6. INICIALIZAÇÃO
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