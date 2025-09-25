// Importa a configuração do Firebase e as funções que você precisa do seu arquivo central.
/*import { db, collection, addDoc } from "./firebase-config.js";*/


let catalogoDeProdutos = {
"produto-burguerdoritos": {
  tipo: "lanche",
  nome: "Burguer Doritos",
  precoRiscado: 26.50,
  preco: 22.50,
  descricao: "Hambúrguer saboroso com cheddar cremoso, Doritos e cebola caramelizada.",
  ingredientes: ["Pão Brioche", " Blend de Carne", " Cheddar Cremoso", " Doritos", " Cebola Caramelizada"],
  imagem: "imagens/lanches/doritos.jpg",
  adicionais: [
    { nome: "Hambúrguer", preco: 7.00 },
    { nome: "Geleia de Pimenta", preco: 3.00 },
    { nome: "Cheddar", preco: 4.00 },
    { nome: "Ovo", preco: 4.00 },
    { nome: "Salsicha", preco: 3.00 },
    { nome: "Cebola Onion Rings", preco: 5.00 },
    { nome: "Mussarela", preco: 4.00 },
    { nome: "Bacon", preco: 4.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Molho Verde", preco: 3.00 },
    { nome: "Barbecue", preco: 3.00 },
    { nome: "Alface Americana", preco: 3.00 }
  ]
},

"produto-combotsaleachindividual": {
    tipo: "lanche",
    nome: "COMBO TSÁLÊACH INDIVIDUAL",
    precoRiscado: 44.00,
    preco: 40.00,
    descricao: "Nosso hambúrguer artesanal duplo com queijo mussarela, cheddar e ovo, acompanhado de batata frita média e Coca-Cola Lata.",
    ingredientes: ["1 Hambúrguer Artesanal Duplo", " Coca Lata", " Batata Média", " Pão Brioche", " 2 Carnes", " Ovo", " Queijo Mussarela", " Queijo Cheddar", " Molho da Casa"],
    imagem: "imagens/lanches/combo-individual.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-combotsaleachsanduiches": {
    tipo: "lanche",
    nome: "COMBO TSÁLÊACH SANDUÍCHES",
    precoRiscado: 74.00,
    preco: 70.00,
    descricao: "O combo perfeito para compartilhar: 3 hambúrgueres artesanais, acompanhados de batata grande e Coca-Cola 1L.",
    ingredientes: ["3 Sanduíches Artesanais", " Batata G", " Coca 1L", " Carne", " Ovo", " Molho da Casa"],
    imagem: "imagens/lanches/combo-familia.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-tsaleachartesanal": {
    tipo: "lanche",
    nome: "Tsálêach Artesanal",
    precoRiscado: 19.00,
    preco: 15.00,
    descricao: "Nosso hambúrguer artesanal com o sabor clássico de ovo, mussarela e presunto, com nosso molho da casa.",
    ingredientes: ["Pão Brioche", " Carne Artesanal", " Ovo", " Mussarela", " Presunto", " Molho da Casa"],
    imagem: "imagens/lanches/tsaleach.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-tsaleachcalabresa": {
    tipo: "lanche",
    nome: "Tsálêach Calabresa",
    precoRiscado: 22.00,
    preco: 18.00,
    descricao: "Nosso hambúrguer artesanal com um toque especial de calabresa, ovo, mussarela e presunto, finalizado com nosso molho da casa.",
    ingredientes: ["Pão Brioche", " Carne Artesanal", " Calabresa", " Ovo", " Mussarela", " Presunto", " Molho da Casa"],
    imagem: "imagens/lanches/calabresa.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-tsaleachbacon": {
    tipo: "lanche",
    nome: "Tsálêach Bacon",
    precoRiscado: 26.00,
    preco: 22.00,
    descricao: "Delicioso hambúrguer artesanal com fatias crocantes de bacon, ovo, mussarela e presunto, tudo harmonizado com nosso molho da casa.",
    ingredientes: ["Pão Brioche", " Carne Artesanal", " Bacon", " Ovo", " Mussarela", " Presunto", " Molho da Casa"],
    imagem: "imagens/lanches/bacon.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},


"produto-tsaleachburguer": {
    tipo: "lanche",
    nome: "Tsálêach Burguer",
    precoRiscado: 17.00,
    preco: 13.00,
    descricao: "O clássico que não pode faltar: nossa suculenta carne artesanal e o delicioso queijo derretido em um pão brioche macio.",
    ingredientes: ["Pão Brioche", " Carne Artesanal", " Queijo"],
    imagem: "imagens/lanches/burguer.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},


"produto-tsaleachcarnefile": {
    tipo: "lanche",
    nome: "Tsálêach Carne Filé",
    precoRiscado: 29.00,
    preco: 25.00,
    descricao: "Uma explosão de sabor: carne filé, cebola caramelizada, mussarela e presunto, com nosso molho da casa, em um pão super macio.",
    ingredientes: ["Pão Brioche", " Carne Artesanal", " Filé Carne", " Cebola Caramelizada", " Mussarela", " Presunto", " Molho da Casa"],
    imagem: "imagens/lanches/carne-file.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-tsaleachtudo": {
    tipo: "lanche",
    nome: "TSALÊACH TUDO",
    precoRiscado: 34.00,
    preco: 30.00,
    descricao: "Para quem não abre mão de nada: nosso hambúrguer artesanal com filé de carne, calabresa, bacon, salsicha e mais, tudo com queijo cheddar e molho da casa.",
    ingredientes: ["Pão Brioche", " Carne Artesanal", " 2 Fatias de Pão de Forma", " Filé de Carne", " Calabresa", " Bacon", " Salsicha", " Cebola Caramelizada", " Queijo Cheddar", " Presunto", " Molho da Casa"],
    imagem: "imagens/lanches/tudao.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-x-salada": {
    tipo: "lanche",
    nome: "X-SALADA",
    precoRiscado: 14.00,
    preco: 10.00,
    descricao: "Um clássico leve e saboroso com carne de hambúrguer, ovo, queijo, presunto e nossa salada fresca de alface e tomate.",
    ingredientes: ["Pão Bola", " Carne de Hambúrguer", " Ovo", " Queijo", " Presunto", " Alface", " Tomate"],
    imagem: "imagens/lanches/x-salada.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},


"produto-x-tudo": {
    tipo: "lanche",
    nome: "X-TUDO",
    precoRiscado: 22.00,
    preco: 18.00,
    descricao: "O hambúrguer mais completo com carne de hambúrguer, calabresa, bacon, salsicha e a combinação perfeita de ovo, queijo e salada fresca.",
    ingredientes: ["Pão Bola", " Carne de Hambúrguer", " Calabresa", " Bacon", " Salsicha", " Ovo", " Queijo", " Presunto", " Alface", " Tomate"],
    imagem: "imagens/lanches/x-tudo.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-x-bacon": {
    tipo: "lanche",
    nome: "X-BACON",
    precoRiscado: 19.00,
    preco: 15.00,
    descricao: "O lanche ideal para os amantes de carne, com a combinação perfeita de carne de hambúrguer, bacon crocante e a frescura do alface e tomate.",
    ingredientes: ["Pão Bola", " Carne de Hambúrguer", " Bacon", " Queijo", "Presunto", " Alface", " Tomate"],
    imagem: "imagens/lanches/x-bacon.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-x-calabresa": {
    tipo: "lanche",
    nome: "X-CALABRESA",
    precoRiscado: 20.00,
    preco: 16.00,
    descricao: "Uma explosão de sabor com calabresa, ovo, queijo e presunto, com a finalização de alface e tomate.",
    ingredientes: ["Pão Bola", " Calabresa", " Ovo", " Queijo", " Presunto", " Alface", " Tomate"],
    imagem: "imagens/lanches/x-calabresa.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-x-salsicha": {
    tipo: "lanche",
    nome: "X-SALSICHA",
    precoRiscado: 20.00,
    preco: 16.00,
    descricao: "Um lanche delicioso com salsicha, ovo, queijo e presunto, com a frescura do alface e tomate.",
    ingredientes: ["Pão Bola", " Salsicha", " Ovo", " Queijo", " Presunto", " Alface", " Tomate"],
    imagem: "imagens/lanches/x-salsicha.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},


"produto-x-banana": {
    tipo: "lanche",
    nome: "X-BANANA",
    precoRiscado: 19.00,
    preco: 15.00,
    descricao: "Uma opção diferente e cheia de sabor: a combinação de carne de hambúrguer, queijo e o toque agridoce da banana frita.",
    ingredientes: ["Pão Bola", " Carne de Hambúrguer", " Banana Frita", " Queijo", " Presunto", " Alface", " Tomate"],
    imagem: "imagens/lanches/x-banana.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-x-burguer": {
    tipo: "lanche",
    nome: "X-BURGUER",
    precoRiscado: 13.00,
    preco: 9.00,
    descricao: "O lanche mais clássico e simples, com suculenta carne de hambúrguer, queijo derretido e a leveza da salada.",
    ingredientes: ["Pão Bola", " Carne de Hambúrguer", " Queijo", " Alface", " Tomate"],
    imagem: "imagens/lanches/x-burguer.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-misto-quente": {
    tipo: "lanche",
    nome: "MISTO QUENTE",
    precoRiscado: 12.00,
    preco: 8.00,
    descricao: "O clássico da chapa, com o delicioso queijo e presunto derretidos no pão de forma.",
    ingredientes: ["Pão de Forma", " Queijo", " Presunto"],
    imagem: "imagens/lanches/misto-quente.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-queijo-quente": {
    tipo: "lanche",
    nome: "QUEIJO QUENTE",
    precoRiscado: 14.00,
    preco: 10.00,
    descricao: "Simples e irresistível: 3 fatias de queijo derretidas no pão de forma, perfeitas para qualquer momento.",
    ingredientes: ["Pão de Forma", " 3 Fatias de Queijo"],
    imagem: "imagens/lanches/queijo-quente.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-mistao-quente": {
    tipo: "lanche",
    nome: "MISTÃO QUENTE",
    precoRiscado: 14.00,
    preco: 10.00,
    descricao: "Nosso misto mais robusto, com 3 fatias de queijo e presunto, perfeito para quem busca mais sabor.",
    ingredientes: ["Pão de Forma", " 3 Fatias de Queijo", " Presunto"],
    imagem: "imagens/lanches/mistao-quente.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},


"produto-americano": {
    tipo: "lanche",
    nome: "AMERICANO",
    precoRiscado: 15.00,
    preco: 11.00,
    descricao: "Uma versão mais completa do misto quente, com 3 fatias de queijo, presunto e o toque fresco de ovo, alface e tomate.",
    ingredientes: ["Pão de Forma", " 3 Fatias de Queijo", " Presunto", " Ovo", " Alface", " Tomate"],
    imagem: "imagens/lanches/americano.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},


"produto-3x-salada": {
    tipo: "lanche",
    nome: "3 X-SALADA",
    precoRiscado: 24.00,
    preco: 20.00,
    descricao: "Leve 3 hambúrgueres clássicos com ovo, queijo, presunto e salada, ideal para a família ou amigos.",
    ingredientes: ["3 X-Saladas", " Pão Bola", " Carne de Hambúrguer", " Ovo", " Queijo", " Presunto", " Alface", " Tomate"],
    imagem: "imagens/lanches/combo-3x-salada.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},


"produto-4x-salada-refri": {
    tipo: "lanche",
    nome: "4 X-SALADA + REFRIGERANTE 1L",
    precoRiscado: 34.00,
    preco: 30.00,
    descricao: "Combo completo com 4 X-Saladas e um refrigerante de 1L, perfeito para matar a fome de toda a turma.",
    ingredientes: ["4 X-Saladas", " Refrigerante 1L", " Pão Bola", " Carne de Hambúrguer", " Ovo", " Queijo", " Presunto", " Alface", " Tomate"],
    imagem: "imagens/lanches/combo-4x-salada.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},


"produto-5x-salada-refri": {
    tipo: "lanche",
    nome: "5 X-SALADA + REFRIGERANTE 1L",
    precoRiscado: 44.00,
    preco: 40.00,
    descricao: "Para a galera toda: 5 X-Saladas completos e saborosos, mais um refrigerante de 1L para acompanhar.",
    ingredientes: ["5 X-Saladas", " Refrigerante 1L", " Pão Bola", " Carne de Hambúrguer", " Ovo", " Queijo", " Presunto", " Alface", " Tomate"],
    imagem: "imagens/lanches/combo-5x-salada.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},


"produto-porcao-media": {
    tipo: "porcao",
    nome: "PORÇÃO MÉDIA",
    precoRiscado: 19.00,
    preco: 15.00,
    descricao: "Nossa porção individual de batata frita, ideal para acompanhar seu lanche.",
    ingredientes: ["Batata Frita"],
    imagem: "imagens/lanches/porcao-media.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-porcao-grande": {
    tipo: "porcao",
    nome: "PORÇÃO GRANDE",
    precoRiscado: 24.00,
    preco: 20.00,
    descricao: "Uma porção generosa de batata frita, perfeita para a galera.",
    ingredientes: ["Batata Frita"],
    imagem: "imagens/lanches/porcao-grande.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-especial-cheddar-bacon": {
    tipo: "porcao",
    nome: "ESPECIAL CHEDDAR BACON",
    precoRiscado: 29.00,
    preco: 25.00,
    descricao: "A nossa batata frita especial, coberta com o cremoso queijo cheddar e o inconfundível bacon crocante.",
    ingredientes: ["Batata Frita", " Queijo Cheddar", " Bacon"],
    imagem: "imagens/lanches/porcao-especial-cheddar-bacon.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-espetinho-simples": {
    tipo: "espetinho",
    nome: "ESPETINHO SIMPLES",
    precoRiscado: 14.00,
    preco: 10.00,
    descricao: "Um espetinho de sua escolha, simples e suculento. Escolha entre os sabores de carne, frango, misto ou linguiça de frango.",
    ingredientes: ["Carne", " Frango", " Misto", " Linguiça de Frango"],
    imagem: "imagens/espetinhos/espetinho-simples.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-espetinho-completo": {
    tipo: "espetinho",
    nome: "ESPETINHO COMPLETO",
    precoRiscado: 19.00,
    preco: 15.00,
    descricao: "O espetinho completo para uma refeição de verdade! Um espetinho de sua escolha com todas as guarnições.",
    ingredientes: ["Carne", " Frango", " Misto", " Linguiça de Frango", " Guarnições: Arroz", " Vatapá", " Batatonese", " Farofa", " Vinagrete"],
    imagem: "imagens/espetinhos/espetinho-completo.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},


"produto-espetinhos-especiais": {
    tipo: "espetinho-especial",
    nome: "ESPETINHOS ESPECIAIS",
    precoRiscado: 29.00,
    preco: 25.00,
    descricao: "Espetinhos com cortes nobres e o sabor inigualável de carne, frango, ou misto. Todos acompanhados de todas as guarnições.",
    ingredientes: ["Costela Suína", " Isca de Carne", " Fraldão", " Misto (Fraldão, Linguiça de Frango e Calabresa)", " Guarnições: Arroz", " Vatapá", " Batatonese", " Farofa", " Vinagrete", " Batata"],
    imagem: "imagens/espetinhos/espetinho-especial.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},



"produto-yakissoba-medio": {
    tipo: "prato",
    nome: "Yakissoba Médio",
    precoRiscado: 25.00,
    preco: 20.00,
    descricao: "Tradicional prato oriental com macarrão, legumes e carne preparados no molho shoyu.",
    ingredientes: ["Macarrão Oriental", "Carne em Tiras", "Brócolis", "Cenoura", "Couve-Flor", "Repolho", "Molho Shoyu"],
    imagem: "imagens/pratos/yakissoba.jpg",
    adicionais: [
        { nome: "Frango Extra", preco: 5.00 },
        { nome: "Carne Extra", preco: 6.00 },
        { nome: "Camarão", preco: 8.00 },
        { nome: "Molho Extra", preco: 2.00 }
    ]
},

"produto-yakissoba-grande": {
    tipo: "prato",
    nome: "Yakissoba Grande",
    precoRiscado: 35.00,
    preco: 30.00,
    descricao: "Versão maior do nosso yakissoba tradicional, ideal para compartilhar.",
    ingredientes: ["Macarrão Oriental", "Carne em Tiras", "Legumes Variados", "Molho Shoyu"],
    imagem: "imagens/pratos/yakissoba.jpg",
    adicionais: [
        { nome: "Frango Extra", preco: 5.00 },
        { nome: "Carne Extra", preco: 6.00 },
        { nome: "Camarão", preco: 8.00 },
        { nome: "Molho Extra", preco: 2.00 }
    ]
},

"produto-yakissoba-mista-media": {
    tipo: "prato",
    nome: "Yakissoba Mista Média",
    precoRiscado: 35.00,
    preco: 30.00,
    descricao: "Combinação de carnes e frango salteados com macarrão e legumes no molho oriental.",
    ingredientes: ["Macarrão Oriental", "Frango", "Carne Bovina", "Legumes Variados", "Molho Shoyu"],
    imagem: "imagens/pratos/yakissoba.jpg",
    adicionais: [
        { nome: "Frango Extra", preco: 5.00 },
        { nome: "Carne Extra", preco: 6.00 },
        { nome: "Camarão", preco: 8.00 },
        { nome: "Molho Extra", preco: 2.00 }
    ]
},

"produto-yakissoba-familia": {
    tipo: "prato",
    nome: "Yakissoba Família",
    precoRiscado: 105.00,
    preco: 97.00,
    descricao: "Serve até 5 pessoas. Uma opção perfeita para dividir em família ou com amigos.",
    ingredientes: ["Macarrão Oriental", "Carnes Variadas", "Legumes", "Molho Shoyu"],
    imagem: "imagens/pratos/yakissoba.jpg",
    adicionais: [
        { nome: "Frango Extra", preco: 10.00 },
        { nome: "Carne Extra", preco: 12.00 },
        { nome: "Camarão", preco: 15.00 },
        { nome: "Molho Extra", preco: 4.00 }
    ]
},

"produto-kikao-simples": {
    tipo: "hot-dog",
    nome: "KIKÃO SIMPLES",
    precoRiscado: 12.00,
    preco: 8.00,
    descricao: "O clássico hot dog com salsicha, molho, queijo ralado e batata palha. Simples e delicioso.",
    ingredientes: ["Pão", " Molho", " Salsicha", " Catchup", " Maionese", " Queijo Ralado", " Batata Palha"],
    imagem: "imagens/lanches/kikao-simples.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-kikao-especial": {
    tipo: "hot-dog",
    nome: "KIKÃO ESPECIAL",
    precoRiscado: 16.00,
    preco: 12.00,
    descricao: "O hot dog especial com o acréscimo de queijo mussarela e fatias crocantes de bacon.",
    ingredientes: ["Pão", " Molho", " Salsicha", " Catchup", " Maionese", " Queijo Ralado", " Batata Palha", " Queijo Mussarela", " Bacon"],
    imagem: "imagens/lanches/kikao-especial.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},

"produto-kikao-cheddar-bacon": {
    tipo: "hot-dog",
    nome: "KIKÃO CHEDDAR BACON",
    precoRiscado: 19.00,
    preco: 15.00,
    descricao: "Hot dog com o irresistível creme cheddar e fatias de bacon, perfeito para quem ama essa combinação.",
    ingredientes: ["Pão", " Molho", " Salsicha", " Catchup", " Maionese", " Queijo Ralado", " Batata Palha", " Creme Cheddar", " Bacon"],
    imagem: "imagens/lanches/kikao-cheddar-bacon.jpg",
    adicionais: [
    { nome: "Bacon", preco: 3.00 },
    { nome: "Calabresa", preco: 3.00 },
    { nome: "Cheddar", preco: 3.00 },
    { nome: "Ovo", preco: 3.00 },
    { nome: "Queijo", preco: 3.00 },
    { nome: "Molho Cheddar", preco: 3.00 },
    { nome: "Bacon", preco: 3.00 },
    { nome: "Cebola Caramelizada", preco: 3.00 },
    { nome: "Maionese Caseira", preco: 3.00 }
    ]
},







    "produto-cocacolalata": {
        tipo: "bebida",
        nome: "Coca-cola em Lata" ,
        precoRiscado: 9.00,
        preco: 7.00 ,
        descricao: "Refrigerante Coca-Cola em lata",
        imagem: "imagens/bebidas/cocacola350ml.png"
    },

        "produto-cocacolalatazero": {
        tipo: "bebida",
        nome: "Coca-cola Zero em Lata" ,
        precoRiscado: 9.00,
        preco: 7.00 ,
        descricao: "Refrigerante Coca-Cola em lata",
        imagem: "imagens/bebidas/cocacolaLataZERO.png"
    },

      "produto-guarana250ml": {
        tipo: "bebida",
        nome: "Guaraná em lata",
        precoRiscado: 9.00,
        preco: 7.00,
        descricao: "Guanará em lata",
        imagem: "imagens/bebidas/GuaranaLataATTpngSFundo.png"
    },

          "produto-guaranabarelata": {
        tipo: "bebida",
        nome: "Guaraná Baré em lata",
        precoRiscado: 9.00,
        preco: 7.00,
        descricao: "Guanará Baré em lata",
        imagem: "imagens/bebidas/guaranabaresemfundo.png"
    },

    "produto-fanta250ml": {
      tipo: "bebida",
      nome: "Fanta em Lata",
      precoRiscado: 9.00,
      preco: 7.00,
      descricao: "Fanta em lata",
      imagem: "imagens/bebidas/Fantalata350ml.png"
    },

      "produto-fantauvalata": {
      tipo: "bebida",
      nome: "Fanta Uva em Lata",
      precoRiscado: 9.00,
      preco: 7.00,
      descricao: "Fanta Sabor Uva em lata",
      imagem: "imagens/bebidas/fantauvalata.png"
    },

      "produto-cocacola1L": {
      tipo: "bebida",
      nome: "Coca-Cola 1L",
      precoRiscado: 12.00,
      preco: 10.00,
      descricao: "Coca-Cola 1L",
      imagem: "imagens/bebidas/Coca1LA.png"
    },

    "produto-cocacola1LZero": {
      tipo: "bebida",
      nome: "Coca-Cola Zero 1L",
      precoRiscado: 12.00,
      preco: 10.00,
      descricao: "Coca-Cola 1L",
      imagem: "imagens/bebidas/cocacola1LZero.png"
    },

    "produto-guarana1L": {
      tipo: "bebida",
      nome: "Guaraná 1L",
      precoRiscado: 12.00,
      preco: 10.00,
      descricao: "Guaraná 1L",
      imagem: "imagens/bebidas/guarana1LA.png"
    },

    "produto-fanta1L": {
      tipo: "bebida",
      nome: "Fanta 1L",
      precoRiscado: 12.00,
      preco: 10.00,
      descricao: "Fanta 1L",
      imagem: "imagens/bebidas/fanta1LA.png"
    },

    "produto-sucopolpacapuacu500ml": {
      tipo: "suco",
      nome: "Suco de Polpa de Cupuaçu – 500ml.",
      precoRiscado: 10.00,
      preco: 8.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/polpacapuacu500ml.png"
    },

      "produto-sucopolpaacerola500ml": {
      tipo: "suco",
      nome: "Suco de Polpa de Acerola  – 500ml",
      precoRiscado: 10.00,
      preco: 8.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaAcerola500ml.jpg"
    },

      "produto-sucopolpamaracuja500ml": {
      tipo: "suco",
      nome: "Suco de Polpa de Maracuja  – 500ml",
      precoRiscado: 10.00,
      preco: 8.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/polpamaracuja500ml.png"
    },

      "produto-sucoacerola1l": {
      tipo: "suco",
      nome: "Suco de Polpa de Acerola  – 1L",
      precoRiscado: 14.00,
      preco: 12.00,
      descricao: "Feitop na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/jarrasucoacerola1l.png"
    },

      "produto-sucomaracuja1l": {
      tipo: "suco",
      nome: "Suco de Polpa de Acerola  – 1L",
      precoRiscado: 14.00,
      preco: 12.00,
      descricao: "Feitop na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/jarrasmaracuja1l.png"
    },

      "produto-sucocapuacu1l": {
      tipo: "suco",
      nome: "Suco de Polpa de Cupuaçu  – 1L",
      precoRiscado: 14.00,
      preco: 12.00,
      descricao: "Feitop na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/capuacu1l.png"
    },




}

const precosEntrega = {
  "Aparecida": 9.00,
  "Aeroporto velho": 9.00,
  "Aldeia": 9.00,
  "Alvorada": 16.00,
  "Amparo": 16.00,
  "Alcione Barbalho": 16.00,
  "Área Verde": 17.00,
  "Caranazal": 10.00,
  "Caranazal 2": 11.00,
  "Centro": 10.00,
  "Conquistas": 15.00,
  "Diamantino1": 9.00,
  "Diamantino2": 12.00,
  "Fátima": 9.00,
  "Fernando Guilhon 1": 12.00,
  "Fernando Guilhon 2": 16.00,
  "Floresta": 12.00,
  "Interventoria": 9.00,
  "Ipanema": 20.00,
  "Jaderlândia": 20.00,
  "Jutaí": 16.00,
  "Laguinho": 10.00,
  "Livramento": 12.00,
  "Maricá": 20.00,
  "Mapiri": 10.00,
  "Maracanã": 12.00,
  "Maracanã1": 16.00,
  "Mararu": 30.00,
  "Mínima": 8.00,
  "Matinha": 16.00,
  "Nova República": 16.00,
  "Nova vitória": 15.00,
  "Novo horizonte": 15.00,
  "Pérola do Maricá": 20.00,
  "Prainha": 13.00,
  "Royalle Ville": 16.00,
  "Salé": 10.00,
  "Salé 2": 12.00,
  "Salvação": 16.00,
  "Santa Clara": 10.00,
  "Santana": 13.00,
  "Santarenzinho": 15.00,
  "Santíssimo": 10.00,
  "Santo André": 16.00,
  "São Cristóvão": 16.00,
  "São Francisco": 15.00,
  "São José operário": 12.00,
  "Uruará": 12.00,
  "Urumanduba": 20.00,
  "Urumari": 16.00,
  "Vigia": 20.00,
  "Vista Alegre 1": 16.00,
  "Vista Alegre 2": 20.00,
  "Vitória Régia": 16.00
};


window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  
  preloader.style.opacity = "0"; // inicia fade

  setTimeout(() => {
    preloader.style.display = "none"; // some do DOM
  }, 500); // tempo igual ao transition
});






function atualizarContadorCarrinho() {
    let contador = document.querySelector(".contcarrinho");

    if (!contador) return; // se não existir no HTML, não dá erro

    // Soma todas as quantidades
    let total = itensCarrinho.reduce((soma, item) => soma + item.quantidade, 0);

    contador.textContent = total;
}



// ==========================================================================================
// SELETORES GLOBAIS
let abrirCarrinho = document.querySelector('#botaoCarrinho')
let modalCarrinho = document.querySelector('#ModalCarrinho')
let fecharCarrinho = document.querySelector('.close-button-carrinho')
let mensagemCarrinhoVazioDiv = document.querySelector('#mensagem-carrinho-vazio');
let itensCarrinho = [];

let scrollPosition = 0;

// ==========================================================================================
// FUNÇÃO DE COMPARAÇÃO DE OBJETOS PARA ADICIONAIS E BEBIDAS
// Esta função verifica se dois objetos são idênticos em chaves e valores.
function saoObjetosIguais(obj1, obj2) {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
// ==========================================================================================
// FUNÇÃO ADICIONAR ITEM AO CARRINHO PRINCIPAL
function adicionarAoCarrinho(produto, quantidade, adicionais, bebidas) {

    if (AbertoFechado()) {

     // Procura por um item existente no carrinho com as mesmas características
    let itemExistente = itensCarrinho.find(item =>
    item.produto.nome === produto.nome &&
    saoObjetosIguais(item.adicionais, adicionais) &&   // ✅ usa o parâmetro
    saoObjetosIguais(item.bebidas, bebidas)            // ✅ usa o parâmetro
);



    if (itemExistente) {
        // Se o item já existe, apenas aumenta a quantidade
        itemExistente.quantidade += parseInt(quantidade);
    } else {
        // Se não, adiciona um novo item ao carrinho
        itensCarrinho.push({
            produto: produto,
            quantidade: parseInt(quantidade),
            adicionais: { ...adicionais }, 
            bebidas: { ...bebidas }  
        });
    }

    // A cada adição, o carrinho é atualizado para refletir as mudanças
    atualizarCarrinho();
    atualizarContadorCarrinho();
    






    } else {
    // Se a função retornar 'false' (fechado por hora ou dia)
        alert("Desculpe, estamos fechados. Nosso horário de atendimento é das 18:00h à 01:00h, exceto nas Segundas e Terças.");
        return; 
    }







}


// ... O restante do código vem aqui, logo abaixo.
        fecharCarrinho.addEventListener('click', function() {
        modalCarrinho.style.display = 'none';

        document.body.style.overflow = 'auto'
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
        });

        // FUNÇÃO ABRIR CARRINHO
abrirCarrinho.addEventListener('click', function(event) {
    event.preventDefault();




    // Garante que o modal de dados e o de pedido estejam escondidos
    // Isso evita o problema de um modal estar aberto em cima do outro
    if (exibirModalDados) exibirModalDados.style.display = 'none';
    if (exibirModalPedido) exibirModalPedido.style.display = 'none';
    
    // Agora, sempre abre o modal do carrinho
    modalCarrinho.style.display = 'block';
    scrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    // A função `atualizarCarrinho` já trata se o carrinho está vazio ou não
    atualizarCarrinho();
});

// ==========================================================================================

/* MODAL PRÉ-CARRINHO */

// ABRIR MODAL AO CLICAR NO CARD
const CardProdutos = document.querySelectorAll('.card-destaque, .card-pai')
const ModalPreCarrinho = document.getElementById('ModalPreCarrinho')
const conteudoModal = document.querySelector('.ContModalPreCarrinho')

CardProdutos.forEach(cardAtual => {
    cardAtual.addEventListener('click', () => {
        conteudoModal.textContent = '';
        
        

        // AGORA AS VARIÁVEIS SÃO LOCAIS E SÃO REINICIADAS A CADA CLIQUE
        const adicionaisSelecionados = {};
        const bebidasSelecionadas = {};

        let divbotaoFecharPre = document.createElement('div')
        divbotaoFecharPre.classList.add('divbotaoFecharPre')
        conteudoModal.appendChild(divbotaoFecharPre)


        let botaoFecharPre = document.createElement('button');
        botaoFecharPre.innerHTML = '&times;';
        botaoFecharPre.classList.add('botaoFecharPre');
        divbotaoFecharPre.appendChild(botaoFecharPre);

        // EVENTO DE FECHAR BOTÃO
        botaoFecharPre.addEventListener('click', () => {
            ModalPreCarrinho.style.display = 'none';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'auto'; 
            window.scrollTo(0, scrollPosition);





        });

        const seletorPreCarrinho = cardAtual.dataset.produtoId;
        const produtoSelecionado = catalogoDeProdutos[seletorPreCarrinho];

        ModalPreCarrinho.style.display = 'block';
        scrollPosition = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';



        // ====================================================================
        // Conteúdo Principal do Produto (Imagem, Nome, Descrição, Preços)
        // ====================================================================
        
        // DIV PRINCIPAL DO CONTEÚDO (Imagem e texto do produto)

        let divPrincipal = document.createElement('div')
        divPrincipal.classList.add('divPrincipal')
        conteudoModal.appendChild(divPrincipal)

                // DIV para organizar as imagens
        let divImagemPre = document.createElement('div');
        divImagemPre.classList.add('divImagemPre');
        divPrincipal.appendChild(divImagemPre);

       let imagemPre = document.createElement('img');
        imagemPre.src = `${produtoSelecionado.imagem}`;
        imagemPre.classList.add('imagemPre');
        divImagemPre.appendChild(imagemPre);

        let divPrincipalProdutoInfo = document.createElement('div'); // Renomeei para maior clareza
        divPrincipalProdutoInfo.classList.add('divPrincipalProdutoInfo');
        divPrincipal.appendChild(divPrincipalProdutoInfo);



        // DIV para organizar conteúdo, nome, preco, descrição
        let divConteudoPre = document.createElement('div');
        divConteudoPre.classList.add('divConteudoPre');
        divPrincipalProdutoInfo.appendChild(divConteudoPre);

        let h3ProdutoPre = document.createElement('h3');
        h3ProdutoPre.textContent = `${produtoSelecionado.nome}`;
        h3ProdutoPre.classList.add('h3ProdutoPre');
        divConteudoPre.appendChild(h3ProdutoPre);

        let descricaoPre = document.createElement('p');
        descricaoPre.textContent = `${produtoSelecionado.descricao}`;
        descricaoPre.classList.add('descricaoPre');
        divConteudoPre.appendChild(descricaoPre);

        let ingredientesPre = document.createElement('p')
        ingredientesPre.classList.add('ingredientesPre')
        ingredientesPre.textContent = `${produtoSelecionado.ingredientes}`
        divConteudoPre.appendChild(ingredientesPre)

        let divPrecos = document.createElement('div');
        divPrecos.classList.add('divPrecos');
        divConteudoPre.appendChild(divPrecos);

        let precoRiscadoPre = document.createElement('span');
        precoRiscadoPre.classList.add('PrecoRiscadoPre');
        precoRiscadoPre.textContent = `R$ ${produtoSelecionado.precoRiscado.toFixed(2).replace('.', ',')}`;
        divPrecos.appendChild(precoRiscadoPre);

        let precoPre = document.createElement('span');
        precoPre.classList.add('precoPre');
        precoPre.textContent = `R$ ${produtoSelecionado.preco.toFixed(2).replace('.', ',')}`;
        divPrecos.appendChild(precoPre);

        // DIV PARA SUGESTÃO DE BEBIDAS
        let divSugestaoBebidas = document.createElement('div');
        divSugestaoBebidas.classList.add('divSugestaoBebidas');
        divPrincipal.appendChild(divSugestaoBebidas);

        let divH4eP = document.createElement('div')
        divH4eP.classList.add('divH4eP')
        divSugestaoBebidas.appendChild(divH4eP)

        let divControleH4P = document.createElement('div')
        divControleH4P.classList.add('divControleH4P')
        divH4eP.appendChild(divControleH4P)

        let h4SugestaoBebidas = document.createElement('h4');
        h4SugestaoBebidas.classList.add('h4SugestaoBebidas');
        h4SugestaoBebidas.textContent = `O que você vai beber hoje?`;
        divControleH4P.appendChild(h4SugestaoBebidas);

        let pSugestao = document.createElement('p')
        pSugestao.classList.add('pSugestao')
        pSugestao.textContent = `Escolhas até 3 opções`
        divControleH4P.appendChild(pSugestao)


        for (const produtoId in catalogoDeProdutos) {
            const produtoAtual = catalogoDeProdutos[produtoId];
            
            if (produtoAtual.tipo === 'bebida') {

                let divDividirItensBebidas = document.createElement('div')
                divDividirItensBebidas.classList.add('divDividirItensBebidas')
                divSugestaoBebidas.append(divDividirItensBebidas)


                let divItemBebida = document.createElement('div');
                divItemBebida.classList.add('divItemBebida');
                divDividirItensBebidas.appendChild(divItemBebida);

                
                

                let divImagemBebida = document.createElement('div');
                divImagemBebida.classList.add('divImagemBebida');
                divItemBebida.appendChild(divImagemBebida);

                let imgBebida = document.createElement('img');
                imgBebida.src = `${produtoAtual.imagem}`;
                imgBebida.classList.add('imgBebida')
                divImagemBebida.appendChild(imgBebida);

                let divInfoBebida = document.createElement('div');
                divInfoBebida.classList.add('divInfoBebida');
                divItemBebida.appendChild(divInfoBebida);

                let h4Bebida = document.createElement('h4');
                h4Bebida.classList.add('h4Bebida');
                h4Bebida.textContent = `${produtoAtual.nome}`;
                divInfoBebida.appendChild(h4Bebida);
                
                let divPrecosBebida = document.createElement('div');
                divPrecosBebida.classList.add('divPrecosBebida');
                divInfoBebida.appendChild(divPrecosBebida);

                if (produtoAtual.precoRiscado) {
                    let precoRiscadoBebida = document.createElement('span');
                    precoRiscadoBebida.classList.add('precoRiscadoBebida');
                    precoRiscadoBebida.textContent = `R$ ${produtoAtual.precoRiscado.toFixed(2).replace('.', ',')}`;
                    divPrecosBebida.appendChild(precoRiscadoBebida);
                }

                let precoBebida = document.createElement('span');
                precoBebida.classList.add('precoBebida');
                precoBebida.textContent = `+ R$ ${produtoAtual.preco.toFixed(2).replace('.', ',')}`;
                divPrecosBebida.appendChild(precoBebida);

                let divBotoesBebidas = document.createElement('div');
                divBotoesBebidas.classList.add('divBotoesBebidas');
                divDividirItensBebidas.appendChild(divBotoesBebidas);

                let diminuirBebidas = document.createElement('button');
                diminuirBebidas.classList.add('diminuirBebidas');
                diminuirBebidas.textContent = `-`;
                diminuirBebidas.dataset.id = produtoId;
                divBotoesBebidas.appendChild(diminuirBebidas);
                

                let inputBebidas = document.createElement('input');
                inputBebidas.classList.add('inputBebidas');
                inputBebidas.value = 0;
                inputBebidas.dataset.id = produtoId;
                divBotoesBebidas.appendChild(inputBebidas);

                
                let aumentarBebidas = document.createElement('button');
                aumentarBebidas.classList.add('aumentarBebidas');
                aumentarBebidas.textContent = `+`;
                aumentarBebidas.dataset.id = produtoId;
                divBotoesBebidas.appendChild(aumentarBebidas);


                // LÓGICA DE OCULTAR E EXIBIR + EVENTOS DAS BEBIDAS
                inputBebidas.style.display = 'none';
                diminuirBebidas.style.display = 'none';

                aumentarBebidas.addEventListener('click', (event) => {
                    const idProduto = event.currentTarget.dataset.id; // pega o data-id do botão clicado
                    inputBebidas.style.display = 'block';
                    diminuirBebidas.style.display = 'block';
                    inputBebidas.value = parseInt(inputBebidas.value) + 1;
                    bebidasSelecionadas[idProduto] = parseInt(inputBebidas.value);
                    atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
                    atualizarContadorCarrinho()
                });

                diminuirBebidas.addEventListener('click', (event) => {
    const idProduto = event.currentTarget.dataset.id;
    let valorAtual = parseInt(inputBebidas.value);

    if (valorAtual > 0) {
        valorAtual -= 1;               // diminui o valor primeiro
        inputBebidas.value = valorAtual; 
        bebidasSelecionadas[idProduto] = valorAtual;  // atualiza o objeto com o novo valor
    }

    if (valorAtual === 0) {
        inputBebidas.style.display = 'none';
        diminuirBebidas.style.display = 'none';
    }

    atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
    atualizarContadorCarrinho();
});
}
}

        // LÓGICA PARA OS ADICIONAIS, DOM, OBJECT, EVENTOS...
        let divAdicional = document.createElement('div');
        divPrincipal.appendChild(divAdicional);
        divAdicional.classList.add('divAdicional');

        let divh4PAdicional = document.createElement('div')
        divh4PAdicional.classList.add('divh4PAdcicional')
        divAdicional.appendChild(divh4PAdicional)

        let h4Adicional = document.createElement('h4');
        h4Adicional.classList.add('h4Adicional');
        h4Adicional.textContent = `Deseja um adicional?`;
        divh4PAdicional.appendChild(h4Adicional);

        let txtAdicional = document.createElement('p');
        txtAdicional.classList.add('txtAdicional');
        txtAdicional.textContent = `Escolha até 8 opções`;
        divh4PAdicional.appendChild(txtAdicional);

        produtoSelecionado.adicionais.forEach(adicionalAtual => {

            let divDividirItensAdicionais = document.createElement('div')
            divDividirItensAdicionais.classList.add('divDividirItensAdicionais')
            divAdicional.appendChild(divDividirItensAdicionais)


            let divItemAdicional = document.createElement('div');
            divItemAdicional.classList.add('divItemAdicional');
            divDividirItensAdicionais.appendChild(divItemAdicional);
            
            let divNomePrecoAdicional = document.createElement('div');
            divNomePrecoAdicional.classList.add('divNomePrecoAdiconal');
            divItemAdicional.appendChild(divNomePrecoAdicional);

            let nomeAdicional = document.createElement('p');
            nomeAdicional.classList.add('nomeAdicional');
            nomeAdicional.textContent = `${adicionalAtual.nome}`;
            divNomePrecoAdicional.appendChild(nomeAdicional);
            
            let precoAdicional = document.createElement('span');
            precoAdicional.classList.add('precoAdicional');
            precoAdicional.textContent = `R$ ${adicionalAtual.preco.toFixed(2).replace('.', ',')}`;
            divNomePrecoAdicional.appendChild(precoAdicional);

            let divBotoesAdicionais = document.createElement('div');
            divBotoesAdicionais.classList.add('divBotoesAdicionais');
            divDividirItensAdicionais.appendChild(divBotoesAdicionais);
            
            // CRIANDO OS ELEMENTOS PRIMEIRO
            let diminuirAdicionais = document.createElement('button');
            diminuirAdicionais.classList.add('diminuirAdicionais');
            diminuirAdicionais.textContent = `-`;
            
            let inputQuantidadeAdicionais = document.createElement('input'); 
            inputQuantidadeAdicionais.classList.add('inputQuantidadeAdicionais');
            inputQuantidadeAdicionais.value = 0;
            
            let aumentarQuantidadeAdicionais = document.createElement('button');
            aumentarQuantidadeAdicionais.classList.add('aumentarQuantidadeAdicionais');
            aumentarQuantidadeAdicionais.textContent = `+`;

            // AGORA ANEXANDO AO HTML
            divBotoesAdicionais.appendChild(diminuirAdicionais);
            divBotoesAdicionais.appendChild(inputQuantidadeAdicionais);
            divBotoesAdicionais.appendChild(aumentarQuantidadeAdicionais);
            
            // Lógica de exibir/esconder
            if (!adicionaisSelecionados[adicionalAtual.nome] || adicionaisSelecionados[adicionalAtual.nome] === 0) {
                diminuirAdicionais.style.display = 'none';
                inputQuantidadeAdicionais.style.display = 'none';
            }

            // ADICIONANDO OS EVENTOS AGORA
            diminuirAdicionais.addEventListener('click', () => {
                let valorAtual = parseInt(inputQuantidadeAdicionais.value);
                if (valorAtual > 0) {
                    inputQuantidadeAdicionais.value = valorAtual - 1;
                }
                if (parseInt(inputQuantidadeAdicionais.value) === 0) {
                    diminuirAdicionais.style.display = 'none';
                    inputQuantidadeAdicionais.style.display = 'none';
                }
                adicionaisSelecionados[adicionalAtual.nome] = parseInt(inputQuantidadeAdicionais.value);
                atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
                atualizarContadorCarrinho()

            });
            
            aumentarQuantidadeAdicionais.addEventListener('click', () => {
                diminuirAdicionais.style.display = 'block';
                inputQuantidadeAdicionais.style.display = 'block';
                inputQuantidadeAdicionais.value = parseInt(inputQuantidadeAdicionais.value) + 1;
                adicionaisSelecionados[adicionalAtual.nome] = parseInt(inputQuantidadeAdicionais.value);
                atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
                atualizarContadorCarrinho()
            });
        });

// ====================================================================
        // NOVA DIV PARA OS BOTÕES FINAIS (QUANTIDADE DO PRINCIPAL E ADICIONAR)
        // ====================================================================
        let divFinalAcoes = document.createElement('div');
        divFinalAcoes.classList.add('divFinalAcoes'); // Adicione uma classe para estilizar com CSS
        conteudoModal.appendChild(divFinalAcoes);

        // DIV para organizar os botões de quantidade do produto principal
        let divBotoesAcoes = document.createElement('div'); // Esta já existia, mas vamos movê-la
        divBotoesAcoes.classList.add('divBotoesAcoes');
        divFinalAcoes.appendChild(divBotoesAcoes); // Anexado à nova divFinalAcoes

        // Botão Diminuir
        let botaoDiminuirPre = document.createElement('button');
        botaoDiminuirPre.textContent = `-`;
        botaoDiminuirPre.classList.add('botaoDiminuirPre');
        divBotoesAcoes.appendChild(botaoDiminuirPre);

        // INPUT DE QUANTIDADE
        let inputQuantidadePre = document.createElement('input');
        inputQuantidadePre.classList.add('inputQuantidadePre');
        divBotoesAcoes.appendChild(inputQuantidadePre);
        inputQuantidadePre.value = 1;
        
        // Botão Aumentar Quantidade
        let botaoAumentarPre = document.createElement('button');
        botaoAumentarPre.textContent = `+`;
        botaoAumentarPre.classList.add('botaoAumentarPre');
        divBotoesAcoes.appendChild(botaoAumentarPre);

        // EVENTOS para botões do produto principal (mantidos aqui)
        botaoDiminuirPre.addEventListener('click', () => {
            if (inputQuantidadePre.value > 1) {
                inputQuantidadePre.value = parseInt(inputQuantidadePre.value) - 1;
                atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
                atualizarContadorCarrinho()
            }
        });
        
        botaoAumentarPre.addEventListener('click', () => {
            inputQuantidadePre.value = parseInt(inputQuantidadePre.value) + 1;
            atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
            atualizarContadorCarrinho()
        });

        // Botão Adicionar ao Carrinho
        let botaoAdicionar = document.createElement('button');
        botaoAdicionar.classList.add('AdicionarCarrinho');
        botaoAdicionar.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Adicionar R$ ${produtoSelecionado.preco.toFixed(2).replace('.', ',')}`;
        divFinalAcoes.appendChild(botaoAdicionar); // Anexado à nova divFinalAcoes

        // EVENTO DE ADICIONAR AO CARRINHO E FECHAR MODAL
        botaoAdicionar.addEventListener('click', () => {
            adicionarAoCarrinho(produtoSelecionado, inputQuantidadePre.value, adicionaisSelecionados, bebidasSelecionadas);
            ModalPreCarrinho.style.display = 'none';
            atualizarCarrinho();
            atualizarContadorCarrinho()
            // RESTAURA O BODY
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'auto';
            window.scrollTo(0, scrollPosition); // volta para a posição original do scroll
        });

        // Chamar atualizarPreCarrinho para garantir que os preços iniciais estejam corretos
        atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
        atualizarContadorCarrinho()
    });
});





// FUNÇÃO ATUALIZAR PRÉ CARRINHO
function atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas) {
    let precoPreCarrinho = produtoSelecionado.preco * parseInt(inputQuantidadePre.value);
    
    let precoRiscadoPreCarrinho = produtoSelecionado.precoRiscado * parseInt(inputQuantidadePre.value);

    let precoTotalAdicionais = 0; // <-- Recebe o valor dos itens adicionais

    // Percorrendo os adicionais selecionados com Object.keys()
    Object.keys(adicionaisSelecionados).forEach(nomeDoAdicional => {
        // Procurando o objeto completo do adicional
        let objetoAdicional = produtoSelecionado.adicionais.find(function(adicional) {
            return adicional.nome === nomeDoAdicional;
        });

        if (objetoAdicional) {
            // Pega a quantidade do adicional que o usuário escolheu
            let quantidadeAdicional = adicionaisSelecionados[nomeDoAdicional];
            // Pega o preço unitário do adicional
            let precoUnitario = objetoAdicional.preco;
            precoTotalAdicionais += quantidadeAdicional * precoUnitario;
        }
    });

    // NOVO: Adiciona o cálculo para as bebidas selecionadas
    let precoTotalBebidas = 0;
    Object.keys(bebidasSelecionadas).forEach(idBebida => {
        const quantidadeBebida = bebidasSelecionadas[idBebida];
        const bebida = catalogoDeProdutos[idBebida];
        if (bebida) {
            precoTotalBebidas += quantidadeBebida * bebida.preco;
        }
    });

    let precoTotalFinal = precoPreCarrinho + precoTotalAdicionais + precoTotalBebidas;
    let precoRiscadoTotalFinal = precoRiscadoPreCarrinho + precoTotalAdicionais + precoTotalBebidas;

    // Atualiza os preços na tela
    precoRiscadoPre.textContent = `R$ ${precoRiscadoTotalFinal.toFixed(2).replace('.', ',')}`;
    precoPre.textContent = `R$ ${precoTotalFinal.toFixed(2).replace('.', ',')}`;

    // Atualiza o preço no botão "Adicionar"
    const botaoAdicionar = document.querySelector('.AdicionarCarrinho');
    if (botaoAdicionar) {
        botaoAdicionar.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Adicionar R$ ${precoTotalFinal.toFixed(2).replace('.', ',')}`;
    }
}




   // FUNÇÃO EXIBIR ITENS DO CARRINHO
let itensDoCarrinhoDiv = document.querySelector('#itens-do-carrinho');

function mostrarItensDoCarrinho() {
    itensDoCarrinhoDiv.textContent = "" // Limpa o conteúdo atual

    if (itensCarrinho.length === 0) {
        itensDoCarrinhoDiv.innerHTML = "<p>Seu carrinho está vazio</p>";
    } else {
        itensCarrinho.forEach(function(item) {
            let divItemCarrinho = document.createElement('div');
            divItemCarrinho.classList.add('item-do-carrinho');

            let h3NomeProduto = document.createElement('h3');
            h3NomeProduto.textContent = item.produto.nome;
            h3NomeProduto.classList.add('nomeProduto');

            let descricaoProduto = document.createElement('p');
            descricaoProduto.textContent = `${item.produto.descricao}`;
            descricaoProduto.classList.add('descricaoProduto');

            let spanPrecoProduto = document.createElement('span');
            spanPrecoProduto.textContent = `R$ ${item.produto.preco.toFixed(2).replace('.',',')}`;
            spanPrecoProduto.classList.add('precoCarrinho');

            let imagemProduto = document.createElement('img');
            imagemProduto.src = `${item.produto.imagem}`;
            
             // --- CÓDIGO ALTERADO AQUI ---
            // Verifica o tipo de produto e adiciona a classe correta
            if (item.produto.tipo === 'lanche') {
                imagemProduto.classList.add('imagemProduto');
    } else if (item.produto.tipo === 'bebida') {
                imagemProduto.classList.add('imagemBebidaCarrinho');
    } else if (item.produto.tipo === 'porcao') {
                imagemProduto.classList.add('imagemPorcaoCarrinho');
    }

            // -----------------------------

            let divImagem = document.createElement('div');
            divImagem.classList.add('divImagem');
            divImagem.appendChild(imagemProduto);

            let divProdutoDescricao = document.createElement('div');
            divProdutoDescricao.classList.add('divProdutoDescricao');

            divProdutoDescricao.appendChild(h3NomeProduto);
            divProdutoDescricao.appendChild(descricaoProduto);

            // Adiciona adicionais ao HTML (se existirem)
            const adicionaisComprados = Object.keys(item.adicionais).filter(key => item.adicionais[key] > 0);
            if (adicionaisComprados.length > 0) {
                let divAdicionaisItem = document.createElement('div');
                divAdicionaisItem.classList.add('adicionais-item-carrinho');
                let pAdicionais = document.createElement('p');
                pAdicionais.textContent = 'Adicionais: ' + adicionaisComprados.map(nome => `${item.adicionais[nome]}x ${nome} `).join(', ');
                divAdicionaisItem.appendChild(pAdicionais);
                divProdutoDescricao.appendChild(divAdicionaisItem);
            }

            // Lógica para lanches, que inclui o campo de observação
            if (item.produto.tipo === 'lanche') {
                let ingredientesProdutos = document.createElement('p');
                ingredientesProdutos.textContent = `Ingredientes: ${item.produto.ingredientes.join(', ')}`;
                ingredientesProdutos.classList.add('ingredientesProdutos');
                divProdutoDescricao.appendChild(ingredientesProdutos);

                let divObs = document.createElement('div');
                divObs.classList.add('divObs');
                let labelObs = document.createElement('label');
                labelObs.textContent = 'Observação: '
                labelObs.classList.add('labelObs')
                let inputObs = document.createElement('input');
                inputObs.placeholder = 'Ex: sem maionese, sem tomate, etc';
                inputObs.classList.add('inputObs');
                inputObs.addEventListener('input', function() {
                    item.observacao = inputObs.value;
                });
                if (item.observacao) {
                    inputObs.value = item.observacao;
                }

                divObs.appendChild(labelObs);
                divObs.appendChild(inputObs);
                divProdutoDescricao.appendChild(divObs);
            }

            // Lógica para adicionar as bebidas
            const bebidasCompradas = Object.keys(item.bebidas).filter(key => item.bebidas[key] > 0);
            if (bebidasCompradas.length > 0) {
                let divBebidasItem = document.createElement('div');
                divBebidasItem.classList.add('divBebidasItem');

                bebidasCompradas.forEach(id => {
                    const bebida = catalogoDeProdutos[id];
                    
                    // Contêiner para a imagem e o nome da bebida
                    let divBebidaInfo = document.createElement('div');
                    divBebidaInfo.classList.add('divBebidaInfo');

                    // Cria e adiciona a imagem da bebida
                    let imagemBebida = document.createElement('img');
                    imagemBebida.src = `${bebida.imagem}`;
                    imagemBebida.classList.add('imagemBebidaCarrinho');
                    divBebidaInfo.appendChild(imagemBebida);

                    // Cria e adiciona o texto da bebida (quantidade e nome)
                    let pBebida = document.createElement('p');
                    pBebida.textContent = `${item.bebidas[id]}x ${bebida.nome}`;
                    divBebidaInfo.appendChild(pBebida);

                    // Adiciona o preço da bebida
                    let spanPrecoBebida = document.createElement('span');
                    spanPrecoBebida.textContent = `R$ ${bebida.preco.toFixed(2).replace('.',',')}`;
                    spanPrecoBebida.classList.add('precoCarrinhoBebida');
                    divBebidaInfo.appendChild(spanPrecoBebida);

                    // Adiciona o contêiner de info da bebida ao divBebidasItem
                    divBebidasItem.appendChild(divBebidaInfo);
                });
                
                divProdutoDescricao.appendChild(divBebidasItem);
            }

            let divControleDeQuantidade = document.createElement('div');
            divControleDeQuantidade.classList.add('controles-quantidade');

            let divControleBotoes = document.createElement('div');
            divControleBotoes.classList.add('divControleBotoes');

            let botaoAumentar = document.createElement('button');
            botaoAumentar.textContent = `+`;
            botaoAumentar.classList.add('btnAumentar');
            botaoAumentar.addEventListener('click', function() {
                item.quantidade++;
                atualizarCarrinho();
                atualizarContadorCarrinho()
            });

            let spanQuantidade = document.createElement('span');
            spanQuantidade.textContent = item.quantidade;
            spanQuantidade.classList.add('quantidade-item');

            let botaoDiminuir = document.createElement('button');
            botaoDiminuir.textContent = `-`;
            botaoDiminuir.classList.add('btnDiminuir');
            botaoDiminuir.addEventListener('click', function() {
                if (item.quantidade === 1) {
                    let encontrarItem = itensCarrinho.indexOf(item);
                    itensCarrinho.splice(encontrarItem, 1);
                } else {
                    item.quantidade--;
                }
                atualizarCarrinho();
                atualizarContadorCarrinho()
            });

            let botaoRemover = document.createElement('button');
            let iconeRemover = document.createElement('i');
            iconeRemover.classList.add('fa-solid', 'fa-trash-can');
            botaoRemover.classList.add('btnRemover');
            botaoRemover.addEventListener('click', function() {
                let encontrarItem = itensCarrinho.indexOf(item);
                itensCarrinho.splice(encontrarItem, 1);
                atualizarCarrinho();
                atualizarContadorCarrinho()
            });

            divControleBotoes.appendChild(botaoAumentar);
            divControleBotoes.appendChild(spanQuantidade);
            divControleBotoes.appendChild(botaoDiminuir);
            botaoRemover.appendChild(iconeRemover);
            divControleBotoes.appendChild(botaoRemover);

            divControleDeQuantidade.appendChild(spanPrecoProduto);
            divControleDeQuantidade.appendChild(divControleBotoes);

            let divInfoProdutos = document.createElement('div');
            divInfoProdutos.classList.add('divInfoProdutos');
            divInfoProdutos.appendChild(divProdutoDescricao);
            divInfoProdutos.appendChild(divControleDeQuantidade);

            divItemCarrinho.appendChild(divImagem);
            divItemCarrinho.appendChild(divInfoProdutos);

            itensDoCarrinhoDiv.appendChild(divItemCarrinho);
        });
    }
}



// ==========================================================================================

// ==========================================================================================
// FUNÇÃO ATUALIZAR CARRINHO
let contadorCarrinho = document.querySelector('#contador-carrinho');

function atualizarCarrinho() {
    // Primeiro, mostra os itens no modal para refletir as quantidades e valores
    mostrarItensDoCarrinho();

    let valorTotalCarrinho = document.querySelector('#total-carrinho');
    let somaDoTotal = 0;
    let totalItensCarrinho = 0;

    itensCarrinho.forEach(function(item) {
        // Soma a quantidade de todos os produtos para o contador do carrinho
        totalItensCarrinho += item.quantidade;

        
        // Calcula o preço do item principal
        let precoItem = item.produto.preco * item.quantidade;
        
        // Calcula o preço dos adicionais
        let precoAdicionais = 0;
        for (const nomeAdicional in item.adicionais) {
            const quantidadeAdicional = item.adicionais[nomeAdicional];
            if (quantidadeAdicional > 0) {
                const adicional = item.produto.adicionais.find(a => a.nome === nomeAdicional);
                if (adicional) {
                    precoAdicionais += adicional.preco * quantidadeAdicional;
                }
            }
        }
        
        // Calcula o preço das bebidas
        let precoBebidas = 0;
        for (const idBebida in item.bebidas) {
            const quantidadeBebida = item.bebidas[idBebida];
            if (quantidadeBebida > 0) {
                const bebida = catalogoDeProdutos[idBebida];
                if (bebida) {
                    precoBebidas += bebida.preco * quantidadeBebida;
                }
            }
        }
        
        // Soma todos os preços para o total final do carrinho
        somaDoTotal += (precoItem + precoAdicionais + precoBebidas);
    });

    // Atualiza o contador de itens no topo do carrinho
    if (contadorCarrinho) {
        contadorCarrinho.textContent = `${totalItensCarrinho}`;
    }

    // NOVO: Cria o <h3> se ele não existir
    let h3Total = valorTotalCarrinho.querySelector('h3');
    if (!h3Total) {
        h3Total = document.createElement('h3');
        valorTotalCarrinho.appendChild(h3Total);
    }
    // Atualiza o valor total no modal do carrinho
    h3Total.textContent = `TOTAL: R$ ${somaDoTotal.toFixed(2).replace('.', ',')}`;
    h3Total.classList.add('precoCarrinhoTotal');

    // Se o carrinho estiver vazio, fecha o modal.
    if (itensCarrinho.length === 0) {
        if (modalCarrinho.style.display === 'block') {
            modalCarrinho.style.display = 'none';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'auto'; 
            window.scrollTo(0, scrollPosition);
        }
    }
}


 // FUNÇÃO ABRIR MODAL PEDIDO E LISTAR ITENS
function abrirModalPedidoEListarItens() {
    // 1. Salva a posição de rolagem e "congela" a página ANTES de abrir
    scrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    exibirModalDados.style.display = 'none';
    exibirModalPedido.style.display = 'block';
    divItensListaPedido.innerHTML = '';
    
    let precoItens = 0; // Usando o nome que você já usava

    const bairroSelecionado = document.getElementById('Bairro').value;
    const valorTaxaDeEntrega = precosEntrega[bairroSelecionado] || 0;

    itensCarrinho.forEach(function(item) {
        let divControleItemIndividual = document.createElement('div');
        divControleItemIndividual.classList.add('divControleItemIndividual');
        
        let addPedido = document.createElement('li');
        addPedido.textContent = `Item: ${item.quantidade}x ${item.produto.nome}`;
        addPedido.classList.add('appPedido');
        divControleItemIndividual.appendChild(addPedido);

        let pedidoImagem = document.createElement('img');
        pedidoImagem.src = `${item.produto.imagem}`;
        pedidoImagem.classList.add('imagemPedidoFinal');
        divControleItemIndividual.appendChild(pedidoImagem);
        
        // NOVO: Exibe os adicionais de forma simples, sem .slice()
        let listaAdicionais = [];
        let precoAdicionais = 0;
        
        for (let nomeAdicional in item.adicionais) {
            let quantidadeAdicional = item.adicionais[nomeAdicional];
            if (quantidadeAdicional > 0) {
                let adicional = item.produto.adicionais.find(a => a.nome === nomeAdicional);
                if (adicional) {
                    listaAdicionais.push(`${nomeAdicional} (${quantidadeAdicional})`);
                    precoAdicionais += adicional.preco * quantidadeAdicional;
                }
            }
        }
        
        if (listaAdicionais.length > 0) {
            let pAdicionais = document.createElement('p');
            pAdicionais.textContent = `Adicionais: ${listaAdicionais.join(', ')}`;
            divControleItemIndividual.appendChild(pAdicionais);
            pAdicionais.classList.add('addAdicionais');
        }

        // NOVO: Exibe as bebidas de forma simples, sem .slice()
        let listaBebidas = [];
        let precoBebidas = 0;
        
        for (let idBebida in item.bebidas) {
            let quantidadeBebida = item.bebidas[idBebida];
            if (quantidadeBebida > 0) {
                let bebida = catalogoDeProdutos[idBebida];
                if (bebida) {
                    listaBebidas.push(`${bebida.nome} (${quantidadeBebida})`);
                    precoBebidas += bebida.preco * quantidadeBebida;
                }
            }
        }
        
        if (listaBebidas.length > 0) {
            let pBebidas = document.createElement('p');
            pBebidas.textContent = `Bebidas: ${listaBebidas.join(', ')}`;
            divControleItemIndividual.appendChild(pBebidas);
            pBebidas.classList.add('addBebidas');
        }

        if (item.produto.tipo === 'lanche') {
            let addIngredientes = document.createElement('p');
            addIngredientes.textContent = `Ingredientes: ${item.produto.ingredientes.join(', ')}`;
            addIngredientes.classList.add('addIngredientes');
            divControleItemIndividual.appendChild(addIngredientes);

            if (item.observacao) {
                let addObservacao = document.createElement('p');
                addObservacao.textContent = `Observação: ${item.observacao}`;
                addObservacao.classList.add('addObservacao');
                divControleItemIndividual.appendChild(addObservacao);
            }
        }
        
        let precoItemIndividual = (item.produto.preco * item.quantidade) + precoAdicionais + precoBebidas;
        let addPreco = document.createElement('span');
        addPreco.textContent = `Preço: R$ ${precoItemIndividual.toFixed(2).replace('.', ',')}`;
        addPreco.classList.add('precoFazerPedido');
        divControleItemIndividual.appendChild(addPreco);
        
        precoItens += precoItemIndividual;
        divItensListaPedido.appendChild(divControleItemIndividual);
    });

    const precoFinal = precoItens + valorTaxaDeEntrega;

    totalPreco.textContent = `Preço Total: R$ ${precoFinal.toFixed(2).replace('.', ',')}`;
    taxaEntrega.textContent = `Taxa de Entrega: R$ ${valorTaxaDeEntrega.toFixed(2).replace('.', ',')}`;
};






    // MODAL DADOS DINÂMICAMENTE CONFIGURADO A PARTIR DAQUI ATÉ O ======

    // FUNÇÃO EXIBIR DADOS

    const exibirModalDados = document.querySelector('#ModalDados')
    const btnFinalizar = document.getElementById('finalizar-compra')
    btnFinalizar.addEventListener('click', function() {

       // 1. Salva a posição e "congela" o body ANTES de abrir
    scrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';



        exibirModalDados.style.display = 'block'
        modalCarrinho.style.display = 'none'
    })

    // FUNÇÃO BOTÃO VOLTAR

    const btnVoltar = document.getElementById('VoltarPedido')

    btnVoltar.addEventListener('click', function(event) {
        event.preventDefault();
        
        btnVoltar.classList.add('clicado')
        setTimeout(() => {
          btnVoltar.classList.remove('clicado')
        }, 300);
        exibirModalDados.style.display = 'none'
        modalCarrinho.style.display = 'block'
    })


    // EVENTO BOTÃO FECHAR

    const botaoFecharPedido = document.querySelector('.close-button-dados')
    botaoFecharPedido.addEventListener('click', function() {

     // 2. Remove as propriedades de "congelamento" e restaura a rolagem
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = 'auto'; // Reabilita a rolagem
    window.scrollTo(0, scrollPosition);
      
    exibirModalDados.style.display = 'none'
    document.body.style.overflow = 'auto'
    
})
  // FUNÇÃO AVANÇAR PEDIDO
    const btnAvancar = document.getElementById('AvancarPedido')
    console.log('Botão Avançar encontrado:', btnAvancar); 
    const exibirModalPedido = document.getElementById('ModalFazerPedido')
    const divPedido = document.getElementById('Pedido')
    const totalPreco = document.getElementById('ValorTotalPedidoFinal')
    const divItensListaPedido = document.getElementById('itensListadosNoPedido')

    let precoTotalDosItens = 0

      btnAvancar.addEventListener('click', function() {
      btnAvancar.classList.add('clicado')
      setTimeout(() => {
    btnAvancar.classList.remove('clicado');
      }, 300);

      let possoAvancar = false

      if (opcaoRetirada.checked) {
    possoAvancar = verificarCamposRetirada();
} else if (opcaoEntrega.checked) {
    possoAvancar = verificarCamposEntrega();
} 

if (possoAvancar) {
    abrirModalPedidoEListarItens();
}

    

    })





    

    
      // EVENTO OPÇÃO ENTREGA
    let opcaoEntrega = document.querySelector('.CEntrega')
    let Formul = document.querySelector('#formEntrega')

    opcaoEntrega.addEventListener('click', function() {
        document.querySelector('#formEntrega').style.display = 'flex'
        
    })





    



    // EVENTO OPÇÃO RETIRADA
    let opcaoRetirada = document.querySelector('.CRetirada')
    
    opcaoRetirada.addEventListener('click', function() {

        document.querySelector('#formEntrega').style.display = 'none'
        

        document.querySelector('#Bairro').value = 'Selecionar'
        document.querySelector('#Rua').value = ''
        document.querySelector('#Numero').value = ''
        document.querySelector('#complemento').value = ''
        
    }) 



      // FUNÇÃO QUE VALIDA OS DADOS PARA RETIRADA
      function verificarCamposRetirada() {
        const inputNome = document.getElementById('nomeUsuario')
        const valorNome = inputNome.value

        const inputCell = document.getElementById('cellUsuario')
        const valorCell = inputCell.value

        let dadosPreenchidos = true

        if (valorNome === "") {
          erroNome.style.display = 'block';
          dadosPreenchidos = false;
        } else {
          erroNome.style.display = 'none'
        }

        if (valorCell === "") {
          erroCell.style.display = 'block';
          dadosPreenchidos = false;
        } else {
          erroCell.style.display = 'none'
        }

        return dadosPreenchidos
      }

      /*=============*/

        function verificarCamposEntrega() {

    const inputNome = document.getElementById('nomeUsuario')
    const valorNome = inputNome.value;

    const inputCell = document.getElementById('cellUsuario')
    const valorCell = inputCell.value;

    const selectBairro = document.getElementById('Bairro')
    const valorBairro = selectBairro.value;

    const inputRua = document.getElementById('Rua')
    const valorRua = inputRua.value;

    const inputNumero = document.getElementById('NumeroCasa')
    const valorNumero = inputNumero.value

    const erroNome = document.getElementById('erroNome')
    const erroCell = document.getElementById('erroCell')
    const erroBairro = document.getElementById('erroBairro')
    const erroRua = document.getElementById('erroRua')
    const erroNumero = document.getElementById('erroNumero')
      
      let todosPreenchidos = true;
      
      if (!valorNome) {
        erroNome.style.display = 'block';
        todosPreenchidos = false;
    } else {
      erroNome.style.display = 'none';
    }

      if (!valorCell) {
        erroCell.style.display = 'block';
        todosPreenchidos = false;
      } else {
        erroCell.style.display = 'none'
      }

      if (valorBairro === 'Selecionar') {
        erroBairro.style.display = 'block'
        todosPreenchidos = false;
      } else {
        erroBairro.style.display = 'none';
      }

      if (!valorRua) {
        erroRua.style.display = 'block';
        todosPreenchidos = false;
      } else {
        erroRua.style.display = 'none';
      }

      if (!valorNumero) {
        erroNumero.style.display = 'block'
        todosPreenchidos = false;
      } else {
        erroNumero.style.display = 'none'
      }

      // Retorna o resultado final
      return todosPreenchidos



    }

    // FUNÇÃO VALOR DE TAXA DE ENTREGA


    
    let taxaEntrega = document.getElementById('taxaEntrega')
    let divModalConteudo = document.querySelector('.ContModalFazerPedido')

        


    const btnVoltarPedido = document.getElementById('voltarPedido')
        btnVoltarPedido.addEventListener('click', function() {
        exibirModalPedido.style.display = 'none'
        exibirModalDados.style.display = 'block'
    })

    const btnFecharPedido = document.querySelector('.close-button-pedido')
    btnFecharPedido.addEventListener('click', function() {

     // 2. Remove as propriedades de "congelamento" e restaura a rolagem
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = 'auto'; // Reabilita a rolagem
    window.scrollTo(0, scrollPosition);

    exibirModalPedido.style.display = 'none'
    document.body.style.overflow = 'auto'
    


    })


// =======================================================================================================

// =======================================================================================================





// Mostrar ou esconder input de troco
const inputTroco = document.querySelector('#inputTroco');
document.querySelectorAll('input[name="formaPagamento"]').forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.id === 'Dinheiro') {
            inputTroco.style.display = 'block';
        } else {
            inputTroco.style.display = 'none';
            inputTroco.value = '';
        }
    });
});

// BOTÃO DE FINALIZAR PEDIDO NO WHATSAPP
const btnFinalizarPedidoWhatsApp = document.getElementById('Finalizar-Pedido');

btnFinalizarPedidoWhatsApp.addEventListener('click', async () => {

    if (btnFinalizarPedidoWhatsApp) {
        btnFinalizarPedidoWhatsApp.disabled = true;
        btnFinalizarPedidoWhatsApp.textContent = `Enviando Pedido...`;
    }




    // --- 1. Dados do Cliente ---
    const nomeCliente = document.querySelector('#nomeUsuario')?.value || 'Não informado';
    const telefoneCliente = document.querySelector('#cellUsuario')?.value || 'Não informado';
    const tipoPedido = document.querySelector('input[name="TipoPedido"]:checked')?.id || 'Não informado';
    const bairro = document.querySelector('#Bairro')?.value || 'Não informado';
    const rua = document.querySelector('#Rua')?.value || 'Não informado';
    const numero = document.querySelector('#NumeroCasa')?.value || 'Não informado';
    const complemento = document.querySelector('#complemento')?.value || '';

    // --- 2. Forma de pagamento e troco ---
    const formaPagamentoSelecionada = document.querySelector('input[name="formaPagamento"]:checked')?.id || 'Não informado';
    let troco = '';
    if (formaPagamentoSelecionada === 'Dinheiro') {
        const valorTroco = document.querySelector('#inputTroco')?.value;
        if (valorTroco && parseFloat(valorTroco) > 0) {
            troco = ` | Troco para R$ ${parseFloat(valorTroco).toFixed(2).replace('.', ',')}`;
        }
    }
    let formaPagamentoMensagem = formaPagamentoSelecionada;
    if (troco) formaPagamentoMensagem += troco;

    // --- NOVO: se for PIX, coloca a chave ---
      if (formaPagamentoSelecionada === 'Pix') {
    const chavePIX = document.getElementById('inputChavePIX').value;
    const nomePIX = document.getElementById('inputNomePIX').value;
    const bancoPIX = document.getElementById('inputBancoPIX').value;

    formaPagamentoMensagem =  `*PIX - Chave Celular: ${chavePIX}*\n` +
                              `Nome: *${nomePIX}*\n` +
                              `Banco: ${bancoPIX}\n` + 
                              `----------- ENVIE O COMPROVANTE ABAIXO, POR GENTILEZA. -------------`;
}


    if (!itensCarrinho || itensCarrinho.length === 0) {
        alert("Selecione pelo menos um produto!");
        return;
    }

    // --- 3. Taxa de entrega ---
    let taxaEntregaValor = precosEntrega[bairro] || 0;

    // --- 4. Montar itens do pedido ---
    let totalPedido = 0;

    const itensPedido = itensCarrinho.map((item, index) => {
        const produtoInfo = catalogoDeProdutos[item.produto.id] || item.produto; // pega info do catálogo principal
        const precoBase = produtoInfo.preco * item.quantidade;

      let observacaoTexto = '';
      if (item.observacao) {
        observacaoTexto = ` | Observação: ${item.observacao}`
      }


        // Adicionais
        let adicionaisTexto = '';
        let precoAdicionais = 0;
        if (item.adicionais && Object.keys(item.adicionais).length > 0) {
            adicionaisTexto = Object.entries(item.adicionais)
                .filter(([nome, qtd]) => qtd > 0)
                .map(([nome, qtd]) => {
                    const adicionalInfo = produtoInfo.adicionais?.find(a => a.nome === nome);
                    const preco = adicionalInfo ? adicionalInfo.preco : 0;
                    precoAdicionais += preco * qtd;
                    return `${nome} x${qtd} (R$ ${preco.toFixed(2).replace('.', ',')})`;
                })
                .join(', ');
            if (adicionaisTexto) adicionaisTexto = ` | Adicionais: ${adicionaisTexto}`;
        }

        // Bebidas
        let bebidasTexto = '';
        let precoBebidas = 0;
        if (item.bebidas && Object.keys(item.bebidas).length > 0) {
            bebidasTexto = Object.entries(item.bebidas)
                .filter(([nome, qtd]) => qtd > 0)
                .map(([nome, qtd]) => {
                    const bebidaInfo = catalogoDeProdutos[nome];
                    const preco = bebidaInfo ? bebidaInfo.preco : 0;
                    precoBebidas += preco * qtd;
                    return `${bebidaInfo?.nome || nome} x${qtd} (R$ ${preco.toFixed(2).replace('.', ',')})`;
                })
                .join(', ');
            if (bebidasTexto) bebidasTexto = ` | Bebidas: ${bebidasTexto}`;
        }

        const precoTotalItem = precoBase + precoAdicionais + precoBebidas;
        totalPedido += precoTotalItem;

        return `${index + 1}. ${item.quantidade}x ${produtoInfo.nome} ${observacaoTexto} (R$ ${precoBase.toFixed(2).replace('.', ',')})${adicionaisTexto}${bebidasTexto} | Total Item: R$ ${precoTotalItem.toFixed(2).replace('.', ',')}`;
    }).join('\n');



    // --- 5. Somar taxa de entrega ---
    totalPedido += taxaEntregaValor;

    // --- 6. Montar mensagem final ---
let mensagem =  `*-- NOVO PEDIDO - REI BURGUERS --*\n` +
                `*Dados do Cliente:*\n` +
                `Nome: ${nomeCliente}\n` +
                `Telefone: ${telefoneCliente}\n` +
                `Tipo de Pedido: ${tipoPedido}\n`; 
            

// Adiciona endereço e taxa apenas se for entrega
if (tipoPedido === "Entrega") {
    mensagem += `*Endereço de Entrega:*\n` +
                `Bairro: ${bairro}\n` +
                `Rua: ${rua}\n` +
                `Número: ${numero}\n` +
                `Complemento: ${complemento}\n` +
                `*Taxa de Entrega: R$ ${taxaEntregaValor.toFixed(2).replace('.', ',')}*\n`;
}

// Itens do pedido
mensagem += `*Itens do Pedido:*\n${itensPedido}\n`;


// Total do pedido
mensagem += `*Total do Pedido${tipoPedido === "Entrega" ? " (Itens + Taxa)" : ""}: R$ ${totalPedido.toFixed(2).replace('.', ',')}*\n`;

// Forma de pagamento
mensagem += `*Forma de Pagamento: *\n${formaPagamentoMensagem}`;





// --- NOVO: Montar o objeto para o Firebase (Parte adaptada!) ---
const itensParaFirebase = itensCarrinho.map(item => {
    const itemParaFirebase = {
        nome: item.produto.nome,
        precoBase: item.produto.preco,
        quantidade: item.quantidade,
        observacoes: item.observacao || ''
    };
    
    // Mapeia os adicionais para o novo formato
    if (item.adicionais && Object.keys(item.adicionais).length > 0) {
        itemParaFirebase.adicionais = {};
        for (const nomeAdicional in item.adicionais) {
            const adicionalInfo = item.produto.adicionais.find(ad => ad.nome === nomeAdicional);
            if (adicionalInfo) {
                itemParaFirebase.adicionais[nomeAdicional] = {
                    quantidade: item.adicionais[nomeAdicional],
                    preco: adicionalInfo.preco
                };
            }
        }
    }
    
    // Mapeia as bebidas para o novo formato
    if (item.bebidas && Object.keys(item.bebidas).length > 0) {
        itemParaFirebase.bebidas = {};
        for (const nomeBebida in item.bebidas) {
            // Supondo que você tem um catálogo global de bebidas
            const bebidaInfo = catalogoDeProdutos[nomeBebida]; 
            if (bebidaInfo) {
                itemParaFirebase.bebidas[nomeBebida] = {
                    quantidade: item.bebidas[nomeBebida],
                    preco: bebidaInfo.preco
                };
            }
        }
    }

    return itemParaFirebase;
});

const pedidoParaFirebase = {
    cliente: {
        nome: nomeCliente,
        telefone: telefoneCliente,
        tipo: tipoPedido
    },
    itens: itensParaFirebase, // Agora sim! Itens no formato correto
    taxaEntrega: taxaEntregaValor,
    pagamento: formaPagamentoSelecionada,
    troco: formaPagamentoSelecionada === 'Dinheiro' ? (document.querySelector('#inputTroco')?.value || 0) : 0,
    data: new Date(),
    status: 'pendente_impressao',
    impressoraDestino: ['cozinha', 'entregador']
};

if (tipoPedido === "Entrega") {
    pedidoParaFirebase.cliente.endereco = {
        bairro: bairro,
        rua: rua,
        numero: numero,
        complemento: complemento
    };
}


// --- 8. ENVIAR PARA O FIRESTORE E ABRIR WHATSAPP ---
try {
    const pedidosRef = collection(db, 'clientes/reiburguer/pedidos');
    await addDoc(pedidosRef, pedidoParaFirebase);
    console.log("Pedido enviado para o Firestore com sucesso!");
} catch (error) {
    console.error("Erro ao enviar o pedido para o Firestore:", error);
    alert("Ocorreu um erro ao enviar o pedido. Tente novamente ou verifique sua conexão.");


    if (btnFinalizarPedidoWhatsApp) {
            btnFinalizarPedidoWhatsApp.disabled = false;
            btnFinalizarPedidoWhatsApp.textContent = `Finalizar Pedido`;
        }
}


    // --- 7. Abrir WhatsApp ---
    const numeroWhatsApp = '5595991699523';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');

     // --- 9. Fecha modal e libera rolagem ---
    document.querySelector('#ModalFazerPedido').style.display = 'none';
    document.body.style.overflow = 'auto';
});




    

    //FUNÇÃO TOPO (OPEN-CLOSE)
    let openClose = document.getElementById('open-close')
    let data = new Date()
    let hora = data.getHours()
    let dia = data.getDay()
    //let hora = 18

    

    function AbertoFechado() {

        /*Exemplo de código se fecha-se algum dia o estabelecimento */

        if (dia === 1 || dia === 2) {
            return false
        } 
    
        if (hora >= 18 && hora <= 1) {
          return true
        } else {
          return false
        }

        
        
      }



    function exibirOpenClose() {
        let ResultadoFuncao = AbertoFechado()

        if (ResultadoFuncao === true) {
            let p1 = document.createElement('p')
            p1.textContent = 'Aberto!'
            p1.style.color = 'white'
            p1.style.backgroundColor = 'green'
            p1.style.padding = '5px'
            p1.style.margin = '5px'
            p1.style.borderRadius = '3px'
            openClose.appendChild(p1)

            let novoP = document.createElement('p')
            novoP.textContent = 'Estamos funcionando!'
            novoP.classList.add('novoP')
            openClose.appendChild(novoP)


        } else {

            let p2 = document.createElement('p')
            p2.textContent = 'TSÁLÊACH BURGUER'
            p2.classList.add('btn-fechado-horarios')
            openClose.appendChild(p2)


            let divFuncionamento = document.createElement('div')
            divFuncionamento.classList.add('divFuncionamento')
            openClose.appendChild(divFuncionamento)
            
            let p3 = document.createElement('p')
            p3.textContent = '19:00 - 23:59'
            p3.classList.add('msgfuncionamento')
            divFuncionamento.appendChild(p3)

            let p4 = document.createElement('p')
            p4.textContent = '👈 Visualize os dias'
            p4.classList.add('msgverhorarios')
            divFuncionamento.appendChild(p4)

            let btnEntregaTaxa = document.querySelector('.btnEntrega')
            btnEntregaTaxa.style.display = 'none'

            p3.addEventListener('click', function() {
            modalhorarios.style.display = 'block'

            
        })
        }




        let botaoFechar = document.querySelector('.close-button-horarios')
            botaoFechar.addEventListener('click', function() {
                modalhorarios.style.display = 'none'
            })
    
    }



    exibirOpenClose();



    let ModalEntrega = document.querySelector('#modalTaxaEntrega')
    let btnEntregaTaxa = document.querySelector('.btnEntrega')
    btnEntregaTaxa.addEventListener('click', function() {
        ModalEntrega.style.display = 'block'
    })

    let btnfecharModalEntrega = document.querySelector('.close-button-taxas')

    btnfecharModalEntrega.addEventListener('click', function() {
      ModalEntrega.style.display = 'none'
    })




    let opcaoDinheiro = document.getElementById('Dinheiro')
    let divPIX = document.getElementById('controlePIX')
    let opcaoPIX = document.getElementById('Pix')
    let opcaoCartao = document.getElementById('pagamentoCartao')
    let opcaoTroco = document.getElementById('inputTroco')
    let divformadePagamento = document.querySelector('.formas-pagamento')

    // Evento clique em dinheiro liberar opção troco.
    opcaoDinheiro.addEventListener('click', function () {
      opcaoTroco.style.display = 'flex'
      divformadePagamento.style.marginBottom = '35px'

    })

    opcaoPIX.addEventListener('click', function() {
      opcaoTroco.style.display = 'none'
      divformadePagamento.style.marginBottom = ''
    })

  /*  opcaoCartao.addEventListener('click', function() {
      opcaoTroco.style.display = 'none'
      divformadePagamento.style.marginBottom = ''
    })*/


    // BOTÃO QRCODE

    let qrcode = document.getElementById('qrcode')
    let modalQRCode = document.getElementById('ModalQRCode')
    qrcode.addEventListener('click', function(event) {
      event.preventDefault();
      modalQRCode.style.display = 'flex'

    })

    let botaofecharQRCODE = document.querySelector('.close-button-qrcode')

    botaofecharQRCODE.addEventListener('click', function() {
      modalQRCode.style.display = 'none'
    })

    // BOTÃO ZAP

    let btnZap = document.getElementById('botaozap')
    btnZap.addEventListener('click', function() {

    const numeroWhatsApp = '5595991699523'; // Exemplo: 55 = Brasil, 82 = DDD, 999261614 = número

    // 2. Crie a mensagem (opcional, mas muito útil)
    const mensagemPadrao = 'Olá, gostaria de fazer um pedido!';

    // 3. Monte o link completo para o WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemPadrao)}`;

    // 4. Abra o link em uma nova aba
    window.open(linkWhatsApp, '_blank');

    })


    /* MENU CATEGORIAS */
    
    const botoesMenu = document.querySelectorAll('.botoesCategorias')

      botoesMenu.forEach(function (botaoSelecionado) {
        botaoSelecionado.addEventListener('click', function() {

          const categoriaID = botaoSelecionado.dataset.categoria

                // Se o valor não estiver vazio, rola a página
        if (categoriaID) {
        //Encontra a seção correspondente pelo ID
        const secao = document.getElementById(categoriaID)

        // Rola a página até a seção
        if (secao) {
          secao.scrollIntoView({
            behavior: 'smooth', // Deixa a rolagem suave
            block: 'start' // Alinha o topo da seção com o topo da janela
          });
        }
      }

        })

      })

        


//======================== MODAL DE BEBIDAS ========================

// Elementos do modal
const modalBebida = document.getElementById('modal-bebida');
const fecharBebida = document.querySelector('.fechar-bebida');

const imagemModalBebida = document.querySelector('#modal-bebida #imagem-modal');
const nomeModalBebida = document.querySelector('#modal-bebida #nome-modal');
const descricaoModalBebida = document.querySelector('#modal-bebida #descricao-modal');
const precoRiscadoBebida = document.querySelector('#modal-bebida #preco-riscado-modal');
const precoNormalBebida = document.querySelector('#modal-bebida #preco-normal-modal');
const quantidadeModalBebida = document.querySelector('#modal-bebida #quantidade-modal');
const btnDiminuirBebida = document.querySelector('#modal-bebida .btn-diminuir-modal');
const btnAumentarBebida = document.querySelector('#modal-bebida .btn-aumentar-modal');
const btnAdicionarBebida = document.querySelector('#adicionar-bebida-btn');
const precoTotalBebida = document.querySelector('#preco-total-bebida');

let quantidadeAtualBebida = 1;

// Função para abrir o modal de bebida
function abrirModalBebida(produtoId) {
    const produto = catalogoDeProdutos[produtoId];
    if (!produto) {
        console.error('Produto não encontrado:', produtoId);
        return;
    }

    // Reset quantidade do modal
    quantidadeAtualBebida = 1;

    // Preenche o modal
    imagemModalBebida.src = produto.imagem;
    nomeModalBebida.textContent = produto.nome;
    descricaoModalBebida.textContent = produto.descricao;
    precoRiscadoBebida.textContent = produto.precoAntigo ? `R$ ${produto.precoAntigo.toFixed(2).replace('.', ',')}` : '';
    precoNormalBebida.textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
    quantidadeModalBebida.textContent = quantidadeAtualBebida;
    precoTotalBebida.textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;

    modalBebida.style.display = 'flex';

    // Botão aumentar
    btnAumentarBebida.onclick = function() {
        quantidadeAtualBebida++;
        quantidadeModalBebida.textContent = quantidadeAtualBebida;
        precoTotalBebida.textContent = `R$ ${(produto.preco * quantidadeAtualBebida).toFixed(2).replace('.', ',')}`;
    };

    // Botão diminuir
    btnDiminuirBebida.onclick = function() {
        if (quantidadeAtualBebida > 1) {
            quantidadeAtualBebida--;
            quantidadeModalBebida.textContent = quantidadeAtualBebida;
            precoTotalBebida.textContent = `R$ ${(produto.preco * quantidadeAtualBebida).toFixed(2).replace('.', ',')}`;
        }
    };

    // Limpa qualquer onclick antigo do botão
    btnAdicionarBebida.onclick = null;

    // Adicionar ao carrinho
    btnAdicionarBebida.onclick = function() {
        // Cria uma cópia do produto para evitar referência compartilhada
        const novoItem = {
            produto: { ...produto },
            quantidade: quantidadeAtualBebida,
            adicionais: {},
            observacao: '',
            bebidas: {}
        };

        itensCarrinho.push(novoItem);

        atualizarCarrinho(); 
        atualizarContadorCarrinho();

        modalBebida.style.display = 'none';
    };
}

// Eventos para abrir modal de bebida
document.querySelectorAll('.card-bebida').forEach(card => {
    card.addEventListener('click', function() {
        const produtoId = this.getAttribute('data-produto-id');
        abrirModalBebida(produtoId);
    });
});


let btnfecharModalBebidas = document.querySelector('.fechar-bebida')

btnfecharModalBebidas.addEventListener('click', ()  => {

modalBebida.style.display = 'none';

})