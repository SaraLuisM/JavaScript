// reduce() retorna a soma de todos os elementos em um array

const numeros = [1, 2, 3, 4];

const valorInicial = 0;

const somaComInicialV = numeros.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, valorInicial);

console.log(somaComInicialV);


const numerosNovos = [2, 5, 7, 9, 11];

const somaNova = numerosNovos.reduce((accumulator, currentValue) => {
    console.log('O valor do accumulator: ', accumulator);
    console.log('O valor de currentValue: ', currentValue);
    return accumulator + currentValue
}, + 30);
console.log(somaNova);