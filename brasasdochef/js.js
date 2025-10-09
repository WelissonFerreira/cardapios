// Importa a configuração do Firebase e as funções que você precisa do seu arquivo central.
//import { db, collection, addDoc } from "./firebase-config.js";


let catalogoDeProdutos = {

    "produto-tambaqui": {
        tipo: "prato", // Alterado para refletir o tipo "prato"
        nome: "Tambaqui Sem Espinha Grelhado",
        precoRiscado: 80.00,
        preco: 70.00,
        descricao: "Um delicioso lombo de Tambaqui grelhado e sem espinhas, extremamente saboroso e suculento. Acompanha arroz branco, feijão, e salada.",
        // Exemplo de como você pode usar "ingredientes" ou "acompanhamentos" para pratos
        ingredientes: ["Lombo de Tambaqui Grelhado", "Arroz Branco", "Feijão", "Salada Mista", "Farofa Temperada"], 
        imagem: "imagens/geral/banner.jpeg", // Caminho da imagem
    },





    "produto-combosimples": {
        tipo: "prato",
        nome: "Combo Simples",
        precoRiscado: 45.50,
        preco: 38.50,
        descricao: "Um hambúrguer artesanal saboroso, acompanhado de batata frita crocante e 1 refrigerante gelado. A opção ideal para quem busca uma refeição completa e deliciosa!",
        ingredientes: ["Pão", " Chedar", " Smash de Carne", " + Batata Frita", " + Refri em Lata"],
        imagem: "imagens/lanches/combosimples.png",
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
  "Jardim Santarem": 9.00,
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

/*
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  
  preloader.style.opacity = "0"; // inicia fade

  setTimeout(() => {
    preloader.style.display = "none"; // some do DOM
  }, 500); // tempo igual ao transition
}); */






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
function adicionarAoCarrinho(produto, quantidade, bebidas) {

    if (AbertoFechado()) {

              // Procura por um item existente no carrinho com as mesmas características
    let itemExistente = itensCarrinho.find(item =>
    item.produto.nome === produto.nome &&   // ✅ usa o parâmetro
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
            bebidas: { ...bebidas }  
        });
    }

    // A cada adição, o carrinho é atualizado para refletir as mudanças
    atualizarCarrinho();
    atualizarContadorCarrinho();











    } else {
      // Se a função retornar 'false' (fechado por hora ou dia)
        alert("Desculpe, estamos fechados. Nosso horário de atendimento é das 18:00h à 01:00h, exceto nas Segundas-Feiras.");
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



//=================== FUNÇÃO QUE RENDERIZA O MODAL PRATO ==============================
function modalPrato(produtoSelecionado, bebidasSelecionadas, conteudoModal, scrollPosition) {

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
                    atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, bebidasSelecionadas);
                    
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

    atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, bebidasSelecionadas);
    
});
}
}


     // Variável local para armazenar o valor da observação
let observacaoPrato = ''; // 👈 Use o nome da variável local correto para este modal!

// Otimização: Se você estiver reabrindo um item do carrinho, pode carregar a observação salva
if (produtoSelecionado.observacao) {
    observacaoPrato = produtoSelecionado.observacao;
}



let divObsModal = document.createElement('div');
divObsModal.classList.add('divObsModal'); // Nova classe para estilizar o bloco no modal
divPrincipal.appendChild(divObsModal); 

let labelObsModal = document.createElement('label');
labelObsModal.textContent = 'Observação (Opcional):'
labelObsModal.classList.add('labelObs') 

let inputObsModal = document.createElement('input');
inputObsModal.placeholder = 'Ex: sem maionese, sem tomate, etc.';
inputObsModal.classList.add('inputObs'); 

// 1. Carrega o valor inicial
inputObsModal.value = observacaoPrato;

// 2. Ouve a digitação e atualiza a variável local
inputObsModal.addEventListener('input', function() {
    observacaoPrato = inputObsModal.value;
});

divObsModal.appendChild(labelObsModal);
divObsModal.appendChild(inputObsModal);

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
                atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, bebidasSelecionadas);
                
            }
        });
        
        botaoAumentarPre.addEventListener('click', () => {
            inputQuantidadePre.value = parseInt(inputQuantidadePre.value) + 1;
            atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, bebidasSelecionadas);
            
        });

        // Botão Adicionar ao Carrinho
        let botaoAdicionar = document.createElement('button');
        botaoAdicionar.classList.add('AdicionarCarrinho');
        botaoAdicionar.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Adicionar R$ ${produtoSelecionado.preco.toFixed(2).replace('.', ',')}`;
        divFinalAcoes.appendChild(botaoAdicionar); // Anexado à nova divFinalAcoes

        // EVENTO DE ADICIONAR AO CARRINHO E FECHAR MODAL
        botaoAdicionar.addEventListener('click', () => {
            adicionarAoCarrinho(produtoSelecionado, inputQuantidadePre.value, bebidasSelecionadas, '', observacaoPrato);
            ModalPreCarrinho.style.display = 'none';
            atualizarCarrinho();
            
            // RESTAURA O BODY
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'auto';
            window.scrollTo(0, scrollPosition)
        });

        // Chamar atualizarPreCarrinho para garantir que os preços iniciais estejam corretos
        atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, bebidasSelecionadas);
        atualizarContadorCarrinho()
        
}

//=================== FIM DA FUNÇÃO QUE RENDERIZA O MODAL PRATO ==============================



/* MODAL PRÉ-CARRINHO */

// ABRIR MODAL AO CLICAR NO CARD
const CardProdutos = document.querySelectorAll('.card-destaque, .card-pai')
const ModalPreCarrinho = document.getElementById('ModalPreCarrinho')
const conteudoModal = document.querySelector('.ContModalPreCarrinho')

CardProdutos.forEach(cardAtual => {
    cardAtual.addEventListener('click', () => {

    console.log('--- 1. Clique no Card Detectado! ---');

      const seletorPreCarrinho = cardAtual.dataset.produtoId;
    console.log('2. ID do Produto (data-produto-id):', seletorPreCarrinho);
      const produtoSelecionado = catalogoDeProdutos[seletorPreCarrinho];
    console.log('3. Objeto Produto Selecionado:', produtoSelecionado);
    // AGORA AS VARIÁVEIS SÃO LOCAIS E SÃO REINICIADAS A CADA CLIQUE
      
      const bebidasSelecionadas = {};

        // 2. PREPARAÇÃO DO MODAL (Comum a todos os tipos)
        conteudoModal.textContent = ''; // 💥 ESSENCIAL: Limpa o conteúdo antigo
        let scrollPosition = 0
        let modalConstruido = false
        

        // --- CRIAÇÃO DO BOTÃO FECHAR (COMO VOCÊ TINHA) ---
        let divbotaoFecharPre = document.createElement('div');
        divbotaoFecharPre.classList.add('divbotaoFecharPre');
        conteudoModal.appendChild(divbotaoFecharPre);

        let botaoFecharPre = document.createElement('button');
        botaoFecharPre.innerHTML = '&times;';
        botaoFecharPre.classList.add('botaoFecharPre');
        divbotaoFecharPre.appendChild(botaoFecharPre);

        // EVENTO DE FECHAR BOTÃO
        botaoFecharPre.addEventListener('click', () => {
             // ... Lógica de fechar o modal e restaurar o scroll (como você tinha) ...
            ModalPreCarrinho.style.display = 'none';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'auto'; 
            window.scrollTo(0, scrollPosition);
        });
        // ---------------------------------------------------

    


    
        if (produtoSelecionado.tipo === 'prato') {

            modalPrato(produtoSelecionado, bebidasSelecionadas, conteudoModal, scrollPosition)
            modalConstruido = true;
            
        } else {
            // 🚨 SE CAIR AQUI, É UM PRODUTO SEM MODAL CONFIGURADO
        console.warn(`Tipo de produto '${produtoSelecionado.tipo}' não tem modal configurado. Modal não será aberto.`);
        // modalConstruido CONTINUA false
        }


    
        
         // 4. 🚀 LÓGICA DE ABERTURA: SÓ ABRE SE ALGO FOI CONSTRUÍDO 🚀
        if (modalConstruido) {
            ModalPreCarrinho.style.display = 'block';
            scrollPosition = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        }

       
        
      



       
    }); 
});







// FUNÇÃO ATUALIZAR PRÉ CARRINHO
function atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, bebidasSelecionadas) {
    let precoPreCarrinho = produtoSelecionado.preco * parseInt(inputQuantidadePre.value);
    
    let precoRiscadoPreCarrinho = produtoSelecionado.precoRiscado * parseInt(inputQuantidadePre.value);


    // NOVO: Adiciona o cálculo para as bebidas selecionadas
    let precoTotalBebidas = 0;
    Object.keys(bebidasSelecionadas).forEach(idBebida => {
        const quantidadeBebida = bebidasSelecionadas[idBebida];
        const bebida = catalogoDeProdutos[idBebida];
        if (bebida) {
            precoTotalBebidas += quantidadeBebida * bebida.preco;
        }
    });

    let precoTotalFinal = precoPreCarrinho + precoTotalBebidas;
    let precoRiscadoTotalFinal = precoRiscadoPreCarrinho + precoTotalBebidas;

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
            if (item.produto.tipo === 'prato') {
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


            // Lógica para pratos, que inclui o campo de observação
            if (item.produto.tipo === 'prato') {
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
        somaDoTotal += (precoItem + precoBebidas);
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

        if (item.produto.tipo === 'prato') {
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
        
        let precoItemIndividual = (item.produto.preco * item.quantidade) + precoBebidas;
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
      btnFinalizarPedidoWhatsApp.disabled = true // Desabilita o botão
      btnFinalizarPedidoWhatsApp.textContent = 'Enviando Pedido...'
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

        const precoTotalItem = precoBase + precoBebidas;
        totalPedido += precoTotalItem;

        return `${index + 1}. ${item.quantidade}x ${produtoInfo.nome} ${observacaoTexto} (R$ ${precoBase.toFixed(2).replace('.', ',')})${bebidasTexto} | Total Item: R$ ${precoTotalItem.toFixed(2).replace('.', ',')}`;
    }).join('\n');



    // --- 5. Somar taxa de entrega ---
    totalPedido += taxaEntregaValor;

    // --- 6. Montar mensagem final ---
let mensagem =  `*-- NOVO PEDIDO - BRASAS DO CHEF --*\n` +
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
    //status: 'teste_web',
    //impressoraDestino: [],
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
      btnFinalizarPedidoWhatsApp.textContent = `Finalizar Pedido`
    }
}


   // --- 9. Abrir WhatsApp para o Cliente --- 
const numeroWhatsAppCliente = '5595991699523'; // número que aparece no botão
const urlCliente = `https://wa.me/${numeroWhatsAppCliente}?text=${encodeURIComponent(mensagem)}`;
window.open(urlCliente, '_blank');



    document.getElementById('ModalConfirmacaoPedido').style.display = 'block';

     // --- 12. Limpar carrinho ---
    itensCarrinho = [];
    atualizarCarrinho(); // (função que você já deve ter para renderizar carrinho)
    // Atualiza o contador para 0
    atualizarContadorCarrinho();

     // --- . Fecha modal e libera rolagem ---
    document.querySelector('#ModalFazerPedido').style.display = 'none';
    document.body.style.overflow = 'auto';
});

  // Fechar modal de confirmação
document.getElementById('btnOkConfirmacao').addEventListener('click', () => {
// 1. Reverte as propriedades de bloqueio
    document.body.style.position = ''; // Remove 'fixed'
    document.body.style.top = '';      // Remove o top negativo
    document.body.style.width = '';    // Remove a largura fixa (se foi definida)
    document.body.style.overflow = 'auto'; // Reverte o overflow

    // 2. Restaura a posição original da página
    window.scrollTo(0, scrollPosition);

    // 3. Fecha o modal
    document.getElementById('ModalConfirmacaoPedido').style.display = 'none';
});




    

    //FUNÇÃO TOPO (OPEN-CLOSE)
    let openClose = document.getElementById('open-close')
    let data = new Date()
    let hora = data.getHours()
    let dia = data.getDay()
    //let hora = 18

    

    function AbertoFechado() {

        /*Exemplo de código se fecha-se algum dia o estabelecimento */

        if (dia === 1) {
          return false
        } 
    
        if (hora >= 15 || hora <= 2) {
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
            p2.textContent = '🐟 BRASAS DO CHEF 🍖'
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