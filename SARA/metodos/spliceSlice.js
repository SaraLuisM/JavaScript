/* splice() 
Altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos no lugar.
Para criar um novo array com um segmento removido e/ou substituído sem alterar o array original, usar toSpliced(). 
Para acessar parte de um array sem modificá-lo, usar slice(). */

const meses = ['Jan', 'Mar', 'Abril', 'Jun'];
meses.splice(1, 0, 'Fev');
console.log(meses);

meses.splice(4, 1, 'Maio');
console.log(meses);


/*O método slice() retorna uma cópia superficial de uma parte de um array em um novo objeto array selecionado do início ao fim (final não incluído) 
onde start e end representam o índice de itens naquele array. 
O array original não è modificado. */

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

console.log(animals.slice(1, 5));

console.log(animals.slice(-2));

console.log(animals.slice(2, -1));

console.log(animals.slice());
