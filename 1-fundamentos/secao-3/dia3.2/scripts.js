/* let pizzas = ['4 queijos', 'Frango com catupiry', 'Marguerita', 'Palmito', 'Chocolate'];

pizzas.push('Peito de peru'); 
pizzas.push('Gratinada');
pizzas.unshift('Peperoni')
pizzas.pop();
pizzas.shift();

for (let index = 0; index < pizzas.length; index +=1){ 
    console.log(pizzas[index])
}

let indexofMarguerita = pizzas.indexOf('Marguerita');
console.log(indexofMarguerita); */

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu.sort());
 */

/* let numero = 8

for (contador = 1; contador <= 20; contador++) {
    console.log(numero * contador)
} */
/* 
let nomes = ['Paula', 'Roberto','Amanda', 'Cleide', 'Daniel', 'Rods', 'Rogério'];
nomes.push('Joana')

for (indice = 0; indice < nomes.length; indice +=1) {
    console.log("Olá, " + nomes[indice])
} */

/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let indice = 0; indice < groceryList.length; indice += 1){
    console.log(groceryList[indice])
}; */

/* let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let elements of names) {
    console.log(elements)
} */


/* let counter = 0;
while(counter !== 5){
  counter += 1;

console.log(counter)
} */

let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index <= fruits.length; index += 1) {
    sum += fruits[index];
}
if (sum > 15) {
    console.log(sum);
}   else {
    console.log("Valor menor que 16");
}


//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}

let n = 3;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);