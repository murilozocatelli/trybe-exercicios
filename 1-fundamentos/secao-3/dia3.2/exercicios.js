
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* let result = 0; */

/* for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);

media = result / numbers.length

console.log (media)

if (media > 20) {
    console.log("Valor maior que 20");
}
    else if (media <= 20) {
    console.log("Valor menor que 20");
    }
    
    let higherNumber = numbers[0];
    
    for (let index = 1; index < numbers.length; index += 1) {
      if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
      }
    }
    
    console.log(higherNumber); */

/* let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        result +=1 ;
    }
}

if (result === 0) {
console.log("não há número ímpar")
}   else {console.log(result)}

//  */

/* 
let minorNumber = numbers[0]

for (index = 0; index < numbers.length; index +=1){
    if (numbers[index] < minorNumber) {
        inorNumber = numbers[index]
}
}

console.log (minorNumber) */

/* numbers = [];

for (index = 1; index <= 25; index +=1) {
    numbers.push(index)
}
console.log(numbers)

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  }; */

/* let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial); */

/* let word = 'corpo';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord); */

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = (array[0]);

for (index = 0; index < array.length; index +=1) {
   if (array[index].length > biggestWord.length) {
    biggestWord = array[index]
   }
}
console.log(biggestWord)

let smallestWord = (array[0]);

for (index = 0; index < array.length; index +=1) {
    if (array[index].length < smallestWord.length) {
     smallestWord = array[index]
    }
 }
 console.log(smallestWord)