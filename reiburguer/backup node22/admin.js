// admin.js
const admin = require('firebase-admin');

// Substitua pelo nome do seu arquivo de credenciais
const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;