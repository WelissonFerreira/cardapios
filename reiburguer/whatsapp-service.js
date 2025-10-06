import makeWASocket, { useMultiFileAuthState, fetchLatestBaileysVersion, DisconnectReason, Browsers } from '@whiskeysockets/baileys';
import qrcode from 'qrcode-terminal';
import Pino from 'pino';

async function startWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        version,
        auth: state,
        logger: Pino({ level: 'silent' }),
        browser: Browsers.macOS('Baileys'),
        printQRInTerminal: true,
    });

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            console.log('Escaneie o QR Code abaixo:');
            qrcode.generate(qr, { small: true });
        }

        if (connection === 'close') {
            const reasonCode = lastDisconnect?.error?.output?.statusCode;
            console.log('Conexão fechada:', lastDisconnect?.error?.message, 'StatusCode:', reasonCode);

            if (reasonCode !== DisconnectReason.loggedOut) {
                console.log('Conexão fechada por outro motivo, precisará rodar o script novamente');
            }
        }

        if (connection === 'open') {
            console.log('WhatsApp conectado com sucesso!');
        }
    });

    sock.ev.on('creds.update', saveCreds);

    return sock;
}

startWhatsApp().catch(err => console.error('Erro ao iniciar WhatsApp:', err));
