// findIndex() method : retorna o indice do primeiro elemento em um array que satisfaça a funçao. Se nenhum satisfizer retorna -1.

const alimentos = ['maça', 'cenoura', 'cebola', 'hamburger', 'batata', 'pizza'];

const encontrarAlimento = alimentos.findIndex(alimento => {
    return alimento === 'pizza'
});
console.log(encontrarAlimento);

const inicialH = alimentos.findIndex(alimento => {
    return alimento[0] === 'h' ? true : false;
});
console.log(inicialH);


// find() : retorna o primeiro elemento do array que satisfaça a funçao, quase igual ao findIndex que retorna o indice do elemento, o metodo find retorna o elemento.

const numeros = [2, 8, 3, 7, 12, 87];

const encontrarNumero = numeros.find(numero => {
    return numero > 12
});
console.log(encontrarNumero);


// indexOf() : retorna o primeiro indice no qual um determinado elemento pode ser encontrado no array, ou -1 se nao estiver presente.

const cidades = ['Alfufeira', 'Portimao', 'Lagos', 'Sagres', 'Portimao'];

console.log(cidades.indexOf('Portimao'));

console.log(cidades.indexOf('Portimao', 2)); //comeca a contar no index 2

console.log(cidades.indexOf('Lisboa'));



