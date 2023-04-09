
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

let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        result +=1 ;
    }
}

if (result === 0) {
console.log("não há número ímpar")
}   else {console.log(result)}

// 


let minorNumber = numbers[0]

for (index = 0; index < numbers.length; index +=1){
    if (numbers[index] < minorNumber) {
        inorNumber = numbers[index]
}
}

console.log (minorNumber)