// some() testa se pelo menos um dos elementos no array passa no teste implementado pela funçao. Retorna um valor booleano, e nao modifica o array.

const palavras = ['medo', 'insegurança', 'vergonha', 'confiança', 'força', 'persistencia'];

console.log(palavras.some(palavra => {
    return palavra.length < 5;
}));


// every() testa se todos os elementos do array passam no teste da funcao. Valor booleano.

console.log(palavras.every(palavra => {
    return palavra.length > 6
}));