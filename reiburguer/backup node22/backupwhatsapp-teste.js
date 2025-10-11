// teste-baileys.js
const makeWASocket = require('@whiskeysockets/baileys').default;
const { useMultiFileAuthState, fetchLatestBaileysVersion, Browsers, DisconnectReason } = require('@whiskeysockets/baileys');
const Pino = require('pino');
const qrcode = require('qrcode-terminal');

let sock = null;

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
    const { version } = await fetchLatestBaileysVersion();

    sock = makeWASocket({
        auth: state,
        version,
        logger: Pino({ level: 'silent' }),
        browser: Browsers.macOS('Baileys'),
        // Configurações adicionais para estabilidade
        syncFullHistory: false,
        printQRInTerminal: false,
        markOnlineOnConnect: true,
        // Importante: desabilita reconexão automática
        shouldReconnect: false,
    });

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            console.log('\n======================================================');
            console.log('📢 ESCANEIE O QR CODE ABAIXO NO SEU CELULAR');
            console.log('======================================================');
            qrcode.generate(qr, { small: true });
        }

        if (connection === 'close') {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
            const statusCode = lastDisconnect?.error?.output?.statusCode;
            
            console.log('❌ Conexão fechada');
            console.log('Código do motivo:', statusCode);
            console.log('Mensagem:', lastDisconnect?.error?.message || 'Sem mensagem');

            if (statusCode === DisconnectReason.loggedOut) {
                console.log('⚠️ Você foi desconectado. Delete a pasta "auth_info_baileys" e rode novamente.');
            } else if (statusCode === 515) {
                console.log('⚠️ Erro de stream detectado. Reconectando em 3 segundos...');
                setTimeout(() => connectToWhatsApp(), 3000);
            } else if (shouldReconnect) {
                console.log('🔄 Tentando reconectar em 5 segundos...');
                setTimeout(() => connectToWhatsApp(), 5000);
            }
        }

        if (connection === 'open') {
            console.log('✅ WhatsApp conectado com sucesso!');
            console.log('Aguardando 2 segundos antes de enviar mensagem...');
            
            // Aguarda um pouco para garantir que a conexão está estável
            setTimeout(() => {
                enviarMensagemTeste(sock);
            }, 2000);
        }
    });

    sock.ev.on('creds.update', saveCreds);

    // Tratamento de erros não capturados
    sock.ev.on('messages.upsert', async ({ messages, type }) => {
        console.log('Mensagem recebida:', type);
    });
}

async function enviarMensagemTeste(sock) {
    const numero = '5582999261614@s.whatsapp.net';

    try {
        console.log('📤 Enviando mensagem de teste...');
        await sock.sendMessage(numero, { text: '✅ Teste Baileys Node 22 OK! Conexão estabelecida com sucesso!' });
        console.log('✅ Mensagem enviada com sucesso!');
    } catch (err) {
        console.error('❌ Erro ao enviar mensagem:', err.message);
        console.error('Stack:', err.stack);
    }
}

// Tratamento de erros globais
process.on('unhandledRejection', (err) => {
    console.error('❌ Erro não tratado:', err);
});

process.on('uncaughtException', (err) => {
    console.error('❌ Exceção não capturada:', err);
});

// Inicia a conexão
console.log('🚀 Iniciando conexão com WhatsApp...');
connectToWhatsApp().catch(err => {
    console.error('❌ Erro ao iniciar:', err.message);
    console.error(err.stack);
});