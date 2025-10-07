


function removerAcentos(texto) {
    if (typeof texto !== 'string') {
        return texto
    }

    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}


let pessoa = {
    nome: 'JOSÉÉÉ',
    cidade: 'SÃÃÃO PAÚLÓÓÊÊÊ',
    endereco: {
        rua: 'Rua São João Íribe',
        bairro: 'CentróúÊÃÓ'
    },
    bebidas: ['Cocá-Cola', 'ÉÉÉÉ']
}

function processarObjeto(obj) {
    const novoObjeto = {};

    for (const chave in obj) {
        if (typeof obj[chave] === 'string') {
            let converter = removerAcentos(obj[chave])
            novoObjeto[chave] = converter
        }

        if (typeof obj[chave] === 'object') {
            let converter = processarObjeto(obj[chave])
            novoObjeto[chave] = converter
        }

        if (Array.isArray(obj[chave])) {
            
            let converter = obj[chave].map(item => {
            if (typeof item === 'string') return removerAcentos(item);
            if (typeof item === 'object') return processarObjeto(item);
                return item;
        });
            novoObjeto[chave] = converter;


        }



        
    }

    return novoObjeto;
}

console.log('Antes: ', pessoa)
console.log('Depois: ', processarObjeto(pessoa))





