// pop() remove o ultimo elemento do array e retorna esse elemento. Altera o comprimento do array.

const plantas = ['girassol', 'tulipa', 'rosa', 'orquidea'];

console.log(plantas.pop());
console.log(plantas);

plantas.pop();
console.log(plantas);


// push() adiciona os elementos especificados ao final de um array e retorna o novo comprimento do array.

const animais = ['cao', 'gato', 'passaro'];
const contar = animais.push('elefante');
console.log(contar);
console.log(animais);
animais.push('galinha', 'girafa');
console.log(animais);
