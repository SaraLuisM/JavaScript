// map() cria um novo array preenchido com os resultados da chamada de uma funcao fornecida em cada elemento do array chamado.

const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
    return number * number;           // aqui queremos o numero ao quadrado, mas podiamos *+-/ por qualquer numero que quisessemos
});

console.log(squareNumbers);

const friends = ['Hellen', 'oscar', 'john', 'ester', 'Edgar', 'sara', 'tiago', 'àlvaro', 'Sergio', 'olivia', 'luis'];

const secretMessage = friends.map(friend => {
    return friend[0]
});
console.log(secretMessage.join(''));


/*join() cria e retorna uma nova string concatenando todos os elementos, separados por virgulas ou uma string separadora especifica.
Se o array tiver apenas um item, esse item serà retornado sem usar separador.*/

const elementos = ['Fogo', 'Agua', 'Terra'];
console.log(elementos.join());
console.log(elementos.join(''));
console.log(elementos.join(' '));
console.log(elementos.join('-'));