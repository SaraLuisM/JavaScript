/*reverse() inverte um array, o primeiro elemento torna-se o ultimo e o ultimo o primeiro. Muda o array original.
Para inverter os elementos em um array sem alterar o array original, usar toReversed()*/

const irmaos = ['Nita', 'Sergio', 'Catarina'];
console.log('Os meus irmaos chamam-se : ' + irmaos.join(' '));

const reversed = irmaos.reverse();
console.log(reversed);

console.log('Os meus irmaos chamam-se : ' + irmaos.join(' '));


//toReversed()

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]