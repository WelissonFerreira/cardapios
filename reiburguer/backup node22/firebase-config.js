// firebase-config.js

// Importa as funções que você precisa dos SDKs do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Suas credenciais do projeto web
const firebaseConfig = {
    apiKey: "AIzaSyAma8_i3oYR4aKkdRv0YzXIuZkxNqtiwaQ",
    authDomain: "backendcardapio.firebaseapp.com",
    projectId: "backendcardapio",
    storageBucket: "backendcardapio.firebasestorage.app",
    messagingSenderId: "978890242445",
    appId: "1:978890242445:web:58516a8cc27b5fe54ae5c4"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Pega uma referência ao serviço do Firestore
const db = getFirestore(app);

// Exporta os serviços que você usará no seu app
export {
    db,
    collection,
    addDoc
};