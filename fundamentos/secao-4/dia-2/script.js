// // Arquivo script.js

// // Cria um novo elemento <li> e o armazena na variável newElement
// let newElement = document.createElement('li');

// // Acessa o novo elemento armazenado em newElement e altera seu conteúdo
// newElement.innerHTML = 'Um texto para o novo elemento';

// // Recupera o elemento que será o pai de newElement e o armazena na variável parent
// let parent = document.getElementById('parent');

// // Insere o novo elemento como filho de parent
// parent.appendChild(newElement);

let irmaoDeOnde = document.createElement('p');
irmaoDeOnde.innerHTML = 'testando <b> strong </b>';
let parent = document.getElementById('elementoOndeVoceEsta').parentElement;
parent.appendChild(irmaoDeOnde);

let filhoDeOnde = document.createElement('section');
filhoDeOnde.innerText = 'filho do Donde'
let paiDeOnde = document.getElementById('elementoOndeVoceEsta');
paiDeOnde.appendChild(filhoDeOnde);

let bisneto = document.createElement('p');
bisneto.innerHTML = '<i> itálico ?</i>';
let paiDoBisneto = document.getElementById('primeiroFilhoDoFilho');
paiDoBisneto.appendChild(bisneto);

let tioAvoDoBisneto = bisneto.parentElement.parentElement.nextElementSibling;

