// includes() determina se um array inclui um determinado valor, retornando verdadeiro ou falso conforme apropriado.

const numeros = [1, 2, 3];
console.log(numeros.includes(2));
console.log(numeros.includes(5));



// flat() cria um novo array com todos os elementos do sub-array concatenados.

const array1 = [0, 1, 2, [3, 4]];
console.log(array1.flat());