// let num1 = 14;
// let num2 = 9;
// let maiorNumero;

// if (num1 > num2) {
//     maiorNumero = num1
// } else if (num2 > num1) {
//     maiorNumero = num2
// }
// console.log(maiorNumero);

// let num1 = 6;
// let num2 = 4;
// let num3 = 2;
// let maiorNumero;

// if (num1 > num2 && num1 > num3) {
//     maiorNumero = num1
// }   else if (num2 > num1 && num2 > num3) {
//     maiorNumero = num2
// } else if (num3 > num1 && num3 > num2) {
//     maiorNumero = num3
// }
// console.log(maiorNumero);

// let ang1 = '30';
// let ang2 = 100;
// let ang3 = 40;


// if (typeof ang1 !== "number" || typeof ang2 !== 'number' || typeof ang3 !== 'number') {
//     console.log("Erro! as variaveis angs devem ser números!")
// } else if (ang1 + ang2 + ang3 == 180) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// let peca1 = 'borre';
// 'torre';
// 'cavalo';
// 'bispo';
// 'rainha';
// 'rei';

// let peca1geral = peca1.toLowerCase()

// switch (peca1geral) {
//     case 'peao':
//         console.log('uma casa a frente')
//         break;
//     case 'torre':
//         console.log('quantas casas quiser horinzontal e vertical')
//         break
//     default:
//         console.log('defina a peça')
//         break;
// }

// let num1 = 1;
// let num2 = 5;
// let num3 = 3;

// if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// let salarioBruto = 5000
// let aliquotaINSS; // Fazer If pra descobrir
// let salarioBase;
// let deducao; // Fazer if a partir do salarioBase para descobrir
// let aliquotaImpostoDeRenda; // Fazer if a partir do salarioBase para descobrir
// let impostoDeRenda ;// Fazer if a partir do salarioBase pra descobrir
// let salarioLiquido;

// if (typeof salarioBruto !== 'number' || salarioBruto < 0) {
//     console.log ('A váriavel salarioBruto deve ser um número positivo')
// } else if (salarioBruto <= 1556.94) {
//     aliquotaINSS = (8 / 100) * salarioBruto
// } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
//     aliquotaINSS = 9 / 100 * salarioBruto
// } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
//     aliquotaINSS = 11 / 100 * salarioBruto
// } else if (salarioBruto > 5189.82) {
//     aliquotaINSS = 11 / 100 * salarioBruto 
//     if (aliquotaINSS > 570.88) {
//         aliquotaINSS = 570.88
//     }

//     salarioBase = salarioBruto - aliquotaINSS;
// } 
// // ... (seu código anterior)

// if (salarioBase <= 1903.98) {
//     impostoDeRenda = 0;
// } else if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
//     aliquotaImpostoDeRenda = 7.5 / 100;
//     deducao = 142.80;
//     impostoDeRenda = aliquotaImpostoDeRenda * salarioBase - deducao;
// } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
//     aliquotaImpostoDeRenda = 15 / 100;
//     deducao = 354.80;
//     impostoDeRenda = aliquotaImpostoDeRenda * salarioBase - deducao;
// } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
//     aliquotaImpostoDeRenda = 22.5 / 100;
//     deducao = 636.13;
//     impostoDeRenda = aliquotaImpostoDeRenda * salarioBase - deducao;
// } else if (salarioBase > 4664.68) {
//     aliquotaImpostoDeRenda = 27.5 / 100;
//     deducao = 869.36;
//     impostoDeRenda = aliquotaImpostoDeRenda * salarioBase - deducao;
// }

// // ... (seu código posterior)



// salarioLiquido = salarioBase - impostoDeRenda;

//  console.log('Salário bruto: R$' + salarioBruto)
//  console.log('Alíquota INSS: R$' + aliquotaINSS)
//  console.log('Salário base: R$' + salarioBase)
//  console.log('Dedução do Imposto de Renda : R$' + deducao)
//  console.log('Alíquota Imposto de Renta: R$' + aliquotaImpostoDeRenda)
//  console.log('Imposto de Renda: R$' + impostoDeRenda)
//  console.log('Salário líquido: R$' + salarioLiquido)

let salarioBruto = 5000;
let aliquotaINSS; // Fazer If pra descobrir
let salarioBase;
let deducao; // Fazer if a partir do salarioBase para descobrir
let aliquotaImpostoDeRenda; // Fazer if a partir do salarioBase para descobrir
let impostoDeRenda; // Fazer if a partir do salarioBase pra descobrir
let salarioLiquido;

if (typeof salarioBruto !== 'number' || salarioBruto < 0) {
    console.log('A váriavel salarioBruto deve ser um número positivo');
} else if (salarioBruto <= 1556.94) {
    aliquotaINSS = (8 / 100) * salarioBruto;
    salarioBase = salarioBruto - aliquotaINSS;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = 9 / 100 * salarioBruto;
    salarioBase = salarioBruto - aliquotaINSS;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = 11 / 100 * salarioBruto;
    salarioBase = salarioBruto - aliquotaINSS;
} else if (salarioBruto > 5189.82) {
    aliquotaINSS = 11 / 100 * salarioBruto;
    if (aliquotaINSS > 570.88) {
        aliquotaINSS = 570.88;
    }
    salarioBase = salarioBruto - aliquotaINSS;
}

if (salarioBase <= 1903.98) {
    impostoDeRenda = 0;
} else if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
    aliquotaImpostoDeRenda = 7.5 / 100;
    deducao = 142.80;
    impostoDeRenda = aliquotaImpostoDeRenda * salarioBase - deducao;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaImpostoDeRenda = 15 / 100;
    deducao = 354.80;
    impostoDeRenda = aliquotaImpostoDeRenda * salarioBase - deducao;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaImpostoDeRenda = 22.5 / 100;
    deducao = 636.13;
    impostoDeRenda = aliquotaImpostoDeRenda * salarioBase - deducao;
} else if (salarioBase > 4664.68) {
    aliquotaImpostoDeRenda = 27.5 / 100;
    deducao = 869.36;
    impostoDeRenda = aliquotaImpostoDeRenda * salarioBase - deducao;
}

salarioLiquido = salarioBase - impostoDeRenda;

console.log('Salário bruto: R$' + salarioBruto);
console.log('Alíquota INSS: R$' + aliquotaINSS);
console.log('Salário base: R$' + salarioBase);
console.log('Dedução do Imposto de Renda: R$' + deducao);
console.log('Alíquota Imposto de Renda: ' + (aliquotaImpostoDeRenda * 100) + '%');
console.log('Imposto de Renda: R$' + impostoDeRenda);
console.log('Salário líquido: R$' + salarioLiquido);

