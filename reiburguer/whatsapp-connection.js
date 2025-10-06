// whatsapp-connection.js
// Gerencia a conexão do WhatsApp (Baileys)

const makeWASocket = require('@whiskeysockets/baileys').default;
const { useMultiFileAuthState, fetchLatestBaileysVersion, Browsers, DisconnectReason } = require('@whiskeysockets/baileys');
const Pino = require('pino');
const qrcode = require('qrcode-terminal');

let sock = null;
let isConnected = false;

async function connectToWhatsApp() {
    try {
        const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
        const { version } = await fetchLatestBaileysVersion();

        sock = makeWASocket({
            auth: state,
            version,
            logger: Pino({ level: 'silent' }),
            browser: Browsers.macOS('ReiBurguer'),
            syncFullHistory: false,
            printQRInTerminal: false,
            markOnlineOnConnect: true,
            shouldReconnect: false,
        });

        sock.ev.on('connection.update', async (update) => {
            const { connection, lastDisconnect, qr } = update;

            if (qr) {
                console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                console.log('📱 ESCANEIE O QR CODE PARA CONECTAR O WHATSAPP');
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                qrcode.generate(qr, { small: true });
            }

            if (connection === 'close') {
                isConnected = false;
                const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
                const statusCode = lastDisconnect?.error?.output?.statusCode;
                
                console.log('❌ WhatsApp desconectado');
                console.log('Código:', statusCode);

                if (statusCode === DisconnectReason.loggedOut) {
                    console.log('⚠️ Sessão encerrada. Delete a pasta "auth_info_baileys" e reconecte.');
                } else if (statusCode === 515) {
                    console.log('🔄 Erro de stream. Reconectando em 3s...');
                    setTimeout(() => connectToWhatsApp(), 3000);
                } else if (shouldReconnect) {
                    console.log('🔄 Reconectando em 5s...');
                    setTimeout(() => connectToWhatsApp(), 5000);
                }
            }

            if (connection === 'open') {
                isConnected = true;
                console.log('✅ WhatsApp conectado com sucesso!');
                console.log('📱 Pronto para enviar pedidos!\n');
            }
        });

        sock.ev.on('creds.update', saveCreds);

    } catch (error) {
        console.error('❌ Erro ao conectar WhatsApp:', error.message);
        isConnected = false;
    }
}

// Retorna o socket atual
function getWhatsAppSocket() {
    return sock;
}

// Verifica se está conectado
function isWhatsAppConnected() {
    return isConnected;
}

// Tratamento de erros globais
process.on('unhandledRejection', (err) => {
    if (err.message && err.message.includes('Socket')) {
        console.warn('⚠️ Erro de socket ignorado:', err.message);
    }
});

module.exports = {
    connectToWhatsApp,
    getWhatsAppSocket,
    isWhatsAppConnected
};