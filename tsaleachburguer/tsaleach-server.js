// server.js

// 1. IMPORTAÇÕES E CONFIGURAÇÃO
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const printer = require('@thiagoelg/node-printer');
const iconv = require('iconv-lite'); // Suporte a acentuação

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// 2. REFERÊNCIAS AO FIRESTORE
const db = admin.firestore();
const clienteId = 'tsaleach';
const pedidosRef = db.collection('clientes').doc(clienteId).collection('pedidos');


// =================================================================================
// ⭐️ NOVOS BLOCOS DE CONTROLE DE FILA
// --- 2.1 VARIÁVEIS DE CONTROLE ---
// Objeto que contém a ÚNICA impressora (Usamos o nome que você forneceu)
const Impressoras = {
    impressoraPrincipal: 'MP-4200 TH'
}
// Variáveis da Fila e controle de estado
const filaDeImpressao = []
let processandoComanda = false 
// =================================================================================


// ✅ Função auxiliar para centralizar texto na largura da impressora (48 colunas)
function centralizar(texto, largura = 48) {
    const espacos = Math.max(0, Math.floor((largura - texto.length) / 2));
    return ' '.repeat(espacos) + texto + '\n';
}

// ✅ Linha separadora padrão para papel 80mm
const linha = '-'.repeat(48) + '\n';

// ✅ Comando ESC/POS para corte automático (total)
const cortar = '\x1D\x56\x00';


// =================================================================================
// 3. FUNÇÃO DE IMPRESSÃO - AGORA É UMA PROMISE (ASSÍNCRONA)
function imprimirPedido(pedido, tipoComanda, impressoraDestino) {

    return new Promise((resolve, reject) => {
        // --- CÓDIGO DE FORMATAÇÃO (MANTIDO EXATAMENTE IGUAL) ---

        const dataEHora = pedido.data && pedido.data.toDate ? pedido.data.toDate() : new Date(pedido.hora);
        const dataFormatada = dataEHora.toLocaleDateString('pt-BR');
        const horaFormatada = dataEHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        // ✅ Cabeçalho centralizado
        let dadosParaImpressao = '';
        dadosParaImpressao += centralizar('--- NOVO PEDIDO ---');
        dadosParaImpressao += centralizar('TSALEACH HAMBURGUERIA');
        dadosParaImpressao += centralizar(tipoComanda);
        dadosParaImpressao += linha + '\n';

        if (pedido.cliente && pedido.cliente.nome) {
            dadosParaImpressao += `Data: ${dataFormatada} | Hora: ${horaFormatada}\n`;
            dadosParaImpressao += `Nome do Cliente: ${pedido.cliente.nome}\n`;
            dadosParaImpressao += `Telefone: ${pedido.cliente.telefone}\n`;
            dadosParaImpressao += `Tipo de Pedido: ${pedido.cliente.tipo}\n\n`;
        } else {
            dadosParaImpressao += `Cliente ID: ${pedido.clienteId || 'N/A'}\n\n`;
        }

        if (pedido.cliente && pedido.cliente.tipo === 'Entrega' && pedido.cliente.endereco) {
            dadosParaImpressao += "--- ENDEREÇO DE ENTREGA ---\n";
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

        if (pedido.itens && Array.isArray(pedido.itens)) {
            pedido.itens.forEach(item => {
                const precoBase = parseFloat(item.precoBase) || 0;
                let precoTotalItem = precoBase;

                dadosParaImpressao += `${item.quantidade}x ${item.nome} - R$ ${precoBase.toFixed(2).replace('.', ',')}\n`;

                if (item.observacoes) {
                    dadosParaImpressao += ` - Obs: ${item.observacoes}\n`;
                }

                if (item.saborPrincipal) {
                    dadosParaImpressao += ` - Sabor: ${item.saborPrincipal}\n`;
                }

                if (item.adicionais && Object.keys(item.adicionais).length > 0) {
                    dadosParaImpressao += ` - Adicionais:\n`;
                    for (const nomeAdicional in item.adicionais) {
                        const adicional = item.adicionais[nomeAdicional];
                        const quantidadeAdicional = parseInt(adicional.quantidade, 10) || 1;
                        const precoAdicional = parseFloat(adicional.preco) || 0;
                        precoTotalItem += precoAdicional * quantidadeAdicional;
                        dadosParaImpressao += `  -> ${nomeAdicional} (${quantidadeAdicional}) - R$ ${(precoAdicional * quantidadeAdicional).toFixed(2).replace('.', ',')}\n`;
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

        dadosParaImpressao += linha;
        dadosParaImpressao += `Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}\n`;

        let valorTotal = subtotalItens;
        const taxaEntrega = parseFloat(pedido.taxaEntrega) || 0;

        if (taxaEntrega > 0) {
            dadosParaImpressao += `Taxa de Entrega: R$ ${taxaEntrega.toFixed(2).replace('.', ',')}\n`;
            valorTotal += taxaEntrega;
        }

        dadosParaImpressao += `\nTOTAL DO PEDIDO: R$ ${valorTotal.toFixed(2).replace('.', ',')}\n`;
        dadosParaImpressao += linha;
        if (pedido.pagamento) {
            dadosParaImpressao += `Forma de Pagamento: ${pedido.pagamento}\n`;
        }

        const valorTroco = parseFloat(pedido.troco) || 0; 
        if (valorTroco > 0) {
            dadosParaImpressao += `Troco para: R$ ${valorTroco.toFixed(2).replace('.', ',')}\n`;
        }

        dadosParaImpressao += linha;
        dadosParaImpressao += centralizar('FIM DO PEDIDO');
        dadosParaImpressao += cortar; // Comando de corte

        console.log(dadosParaImpressao);
        
        // --- CHAMADA DA IMPRESSORA DENTRO DA PROMISE ---
        printer.printDirect({
            data: iconv.encode(dadosParaImpressao, 'ISO-8859-1'), // Corrige acentuação
            printer: impressoraDestino, // Usa o destino do trabalho (será ImpressoraPrincipal)
            type: 'RAW',
            success: function(jobID) {
                console.log(`[SUCESSO] Pedido ID ${docId} | Comanda: '${tipoComanda}' enviada para a impressora: '${impressoraDestino}'. (Job ID: ${jobID})`);
                resolve(jobID); // Resolve a Promise
            },
            error: function(err) {
                console.error(`[ERRO Impressão] Pedido ID ${docId} | Erro ao enviar '${tipoComanda}' para '${impressoraDestino}':`, err);
                reject(err); // Rejeita a Promise
            }
        });
    });
}


// =================================================================================
// ⭐️ NOVO BLOCO DE CONTROLE DE FILA (O MOTOR)
async function processarProximoDaFila() {
    if (filaDeImpressao.length === 0) {
        return 
    }

    // Controle de concorrência: só permite 1 por vez
    if (processandoComanda) {
        return 
    }

    const trabalho = filaDeImpressao.shift() // Pega o trabalho mais antigo (FIFO)

    processandoComanda = true 


    try {
        // Pausa a execução e espera a Promise de imprimirPedido terminar.
        await imprimirPedido(trabalho.pedido, trabalho.tipoComanda, trabalho.impressoraDestino, trabalho.docId);
        
    } catch (error) {
        // Trata a falha na impressão
        console.error(`[ERRO] Falha ao processar trabalho de impressão para ${trabalho.tipoComanda}:`, error)
    } finally {
        // Sempre executa, liberando o recurso e checando a fila novamente.
        processandoComanda = false
        processarProximoDaFila() 
    }
}
// =================================================================================


// 4. ESCUTA DOS PEDIDOS DO FIRESTORE
pedidosRef.where('status', '==', 'pendente_impressao')
.onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            const novoPedido = change.doc.data();
            const docId = change.doc.id;

            console.log(`Novo pedido para imprimir (${docId})`, novoPedido);

            let itensAdicionadosAFila = 0; // Contador para saber se algo foi enfileirado

            if (novoPedido.impressoraDestino && Array.isArray(novoPedido.impressoraDestino)) {
                
                novoPedido.impressoraDestino.forEach(destino => {
                    // Ambos os destinos apontam para a ÚNICA impressora
                    const impressoraParaUsar = Impressoras.impressoraPrincipal; 
                    
                    if (destino === 'cozinha') {
                        let trabalho = {
                            pedido: novoPedido,
                            tipoComanda: 'COMANDA COZINHA',
                            impressoraDestino: impressoraParaUsar,
                            docId: docId
                        }
                        filaDeImpressao.push(trabalho);
                        itensAdicionadosAFila++;
                    }
                    if (destino === 'entregador') {
                        let trabalho = {
                            pedido: novoPedido,
                            tipoComanda: 'COMANDA ENTREGADOR',
                            impressoraDestino: impressoraParaUsar,
                            docId: docId
                        }
                        filaDeImpressao.push(trabalho);
                        itensAdicionadosAFila++;
                    }
                });

                // Se adicionamos trabalhos à fila, iniciamos o processamento.
                if (itensAdicionadosAFila > 0) {
                    processarProximoDaFila();
                }
            } else {
                console.log("A propriedade 'impressoraDestino' não existe ou não é um array para este pedido.");
            }

            // A atualização do status é mantida FORA da fila, pois é rápida e não depende da impressora
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