let myName = "Murilo";
console.log(myName);
const age = 30;
console.log(age);
let birthCity = "Campo Mourão"
console.log(birthCity);
let birthYear = "1995";
console.log(birthYear);

// Dois tipos: referência e valores
//  tipagem dinâmica

let movie = "Avenger" // string literal
let score = 8.92 // number literal
let isValid = true // boolean
let name; // undefined
let color = null; // redefinition

/* operações aritméticas
+ , - , * , / , ** , ++ , -- */

let a = 0;
console.log(a++); // 0, pois o console.log ocorre antes do incremento.
// menos nítido

let a = 0;
console.log(a += 1); // 1, pois a atribuição ocorre antes

let a = 0;
a += 1;
console.log(a); // leitura mais nítida */

let patientId = 50;
let isEnrolled = true;
let patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
let patientEmail = 'ana@email.com';

console.log(typeof patientInfo); //typeof: object
console.log(typeof agez); // typeof: undefined

//

let base = 5
let height = 8
let area = (base * height)
console.log(area);
let perimetro = (2*base + 2*height);
console.log(perimetro);

//if - se
//else - senão

if (condicao) {
     //codigo
}
else if (outraCondicao){
    //outra codigo
}
else if (outraCondicao){
    //outra codigo
}
else {
    //condicao
}

let nota = 50
if (nota >= 80){
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas")
}
else if (nota < 80 && nota >=60){
    console.log("Você está na lista de espera")

}
else if (nota < 60) {
    console.log("Você reprovou.")
}

let comida = 'pão na chapa';
let bebida = 'coca';

if (bebida === 'café' && comida === 'pão na chapa') {
  console.log('Muito obrigado(a) pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

let conditionOne = true;
let conditionTwo = true;

console.log(conditionOne && conditionTwo);

let cenouras = true;
let leite = true;
let arroz = true;
let feijao = true;

let listaDeCompras = cenouras && leite && arroz && feijao;
console.log(listaDeCompras);

//
let currentHour = 5;
let message = "";

if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir"
}
    else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D"
}
    else if (currentHour >= 14 && currentHour < 18){
    message ="Vamos fazer um bolo pro café da tarde?"
    }
    else if (currentHour >= 11 && currentHour < 14){
    message = "Hora do almoço!!!"
    }
    else if (currentHour >= 4 && currentHour < 11){
    message = "Hmmm, cheiro de café recém-passado"
    }

console.log(message)

//
let bebidaPrincipal =  'café';
let bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'café' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado(a) por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

//

let weekDay = "sábado";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || 
weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D”")
}
    else if (weekDay === "sábado" || weekDay === "domingo"){
        console.log("FINALMENTE, descanso merecido! UwU!")
}

//

console.log(!(2 + 2) === 4);

let squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

console.log(!33); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no JavaScript. Logo, seu oposto é true.

console.log(!null); // true

console.log(!undefined); // true

//

// Nesse exemplo, o "switch/case" deverá imprimir no terminal a classificação
// dos filmes que podem ser assistidos de acordo com a faixa etária das pessoas.

let faixaEtaria = 'adulto';

switch (faixaEtaria) {
  // Caso a variável "faixaEtaria" receba o valor "adolescente", será aplicada a lógica abaixo.
  case 'adolescente':

    // Caso a pessoa seja adolescente, o console exibirá a mensagem 'Consulte a classificação do filme'.
    console.log('Consulte a classificação do filme');

    // O "break" serve para que o código não continue rodando caso seu resultado
    // já tenha sido atingido.
    break;
    
  // Após implementar a lógica de um case, você pode abrir outro case.
  // Agora, faça a lógica do que deve ocorrer se a pessoa for adulta,
  // Colocando o valor "adulto" na variável "faixaEtaria"
  case 'adulto':

    // Caso a pessoa seja adulta, o console exibirá a mensagem:
    // 'A pessoa adulta é classificada para assistir a qualquer filme'
    console.log('A pessoa adulta é classificada para assistir a qualquer filme')

    // Interrompe-se o fluxo novamente caso a pessoa seja adulta.
    break;

  // Repete-se o mesmo processo para o case "idoso".
  case 'idoso':

      console.log('A pessoa idosa é classificada para assistir a qualquer filme');
      break

  // O "default" é utilizado como um retorno padrão caso o valor passado não
  // encaixe em nenhum dos cases.

  // Ou seja, se a pessoa for criança, recém-nascida ou pertencente à qualquer
  // outra faixa etária, essa será a lógica implementada.
  default:

    // Note que não é necessário utilizar o break após o default. Como todo o código
    // já foi executado, não é necessário interromper o funcionamento do mesmo.
    console.log('Só pode assistir a filmes livres');
}
//

let mes = 'Trybe';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); 
//

let situacao = 'aprovada';
switch(situacao) { 
    case 'aprovada':
        console.log("Parabéns, você está no grupo de pessoas aprovadas!");
        break;
    case 'lista':
        console.log("Você está na nossa lista de espera.");
        break;
    case 'reprovada':
        console.log("infelizmente, você reprovou.");
        break;
    default:
        console.log("Informação incorreta.")
  }

let status = 'aprovada';
switch(status) {
    case 'aprovada':
      console.log("Parabéns, você está no grupo de pessoas aprovadas!");
      break;
    case 'lista':
      console.log("Você está na nossa lista de espera.");
      break;
    case 'reprovada':
      console.log("Infelizmente, você reprovou.");
      break;
    default:
      console.log("Informação incorreta.");
  }

//
let a = 3;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(b - a);
console.log(a * b);
console.log(b ** a);
console.log(b / a);
console.log(a % b)

let c = 3;
let d = 4;

if (c > d) {
    console.log('c');
} else if (c < d) {
    console.log('d');
};
  else { 
    console.log('os números são iguais')
  }; 

    let a = 22;
    let b = 22;

    if (a > b) {
    console.log("'a' é maior que 'b'");
    } else if (b > a) {
    console.log("'b' é maior que 'a'");
    } else if (b = a) {
        console.log("'b' é maior que 'a'");
        };
 

        let a = 21;
        let b = 21;
        
        if (a > b) {
          console.log("'a' é maior que 'b'");
        } else if (b > a) {
          console.log("'b' é maior que 'a'");
        };
            else {
            console.log ("os números são iguais");
            };


            let a = "murilo"
            let b = "antonio"

        if (a = "murilo"){
            console.log('meu nome é murilo')
        }
            else if (a = "blabal"){
            console.log('meu nome não é murilo')
        };
            else {console.log('erro')}

let a = 20;
let b = 23;

if (a > b) {
  console.log("'a' é maior que 'b'");
} else if (a = b) {
    console.log("a é igual a b")
}
    else {
  console.log("'b' é maior que 'a'");
};
           

let a = 6;
let b = 7;
let c = 5;

    if (a > b || a > c){
        console.log(a + " é o maior número entre os três números.")
    } else if (b > a || b > c){ 
        console.log(b + " é o maior número entre os três números.")
    } else if (c > a || c > b){
        console.log(c + " é o maior dos três números")
    }


let a = 0;

    if (a > 0){
        console.log("positivo")
    } else if (a < 0) {
        console.log("negativo")
    } else if (a === 0){
        console.log("zero")
    }

let a = 30;
let b = 30;
let c = 3;

    if (a + b + c === 180){
        console.log ('true')
    }
        else if (a < 0 || b < 0 || c < 0){
            console.log('erro')
        }
        else if ((a + b + c) > 180 || (a + b + c) < 180){
            console.log('false')
        }
    

let peça = 'Torre';
switch (peça.toLowerCase()) {
    case 'peão' : console.log("move uma casa a frente");
    break;
    case 'torre': console.log("linhas retas")
    break
    case 'bispo': console.log("diagonais");
    break;
    case 'cavalo': console.log("pula em 'L'");
    break;
    case 'rainha': console.log("todas as direções");
    break;
    case 'rei': console.log('uma casa');
    break;
}


let nota = 110;

if (nota < 0 || nota > 100){
    console.log("erro");
    }
    else if 
    (nota >= 90 && nota <= 100 ){
        console.log("A")};
    else if (nota >= 80 && nota < 90) {
        console.log("B");
    }
    else if (nota >= 70 && nota < 80) {
        console.log("C");
    }
    else if (nota >= 60 && nota < 70) {
        console.log("D");
    }
    else if (nota >= 50 && nota < 60) {
        console.log("E");
    }
    else {
        console.log("F");
    }
    


let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

let a = 2;
let b = 3;
let c = 2;



if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    console.log("true");
    else {
    console.log("false")
    }
}

let a = 2;
let b = 3;
let c = 5;

let isEven = false;

if((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

//

let custo = 1;
let venda = 3;
let imposto = 20 * custo / 100

let lucro = (venda - custo - imposto) * 1000


if (custo < 0 || venda < 0 || lucro < 0|| imposto < 0){
    console.log("erro")
}
    else {
        console.log(lucro)
    }


let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos!");
};

//

let salarioBruto = 1000;

if (salarioBruto <= 1.556,94){
    console.log("salário:" + salarioBruto * 0.92);
} else {
    console.log('erro')
}



    let aliquotINSS;
    let aliquotIR;
    
    let grossSalary = 2000.00;
    
    if (grossSalary <= 1556.94) {
      aliquotINSS = grossSalary * 0.08;
    } else if (grossSalary <= 2594.92) {
      aliquotINSS = grossSalary * 0.09;
    } else if (grossSalary <= 5189.82) {
      aliquotINSS = grossSalary * 0.11;
    } else {
      aliquotINSS = 570.88;
    }
    
    let baseSalary = grossSalary - aliquotINSS;
    
    if (baseSalary <= 1903.98) {
      aliquotIR = 0;
    } else if (baseSalary <= 2826.65) {
      aliquotIR = (baseSalary * 0.075) - 142.80;
    } else if (baseSalary <= 3751.05) {
      aliquotIR = (baseSalary * 0.15) - 354.80;
    } else if (baseSalary <= 4664.68) {
      aliquotIR = (baseSalary * 0.225) - 636.13;
    } else {
      aliquotIR = (baseSalary * 0.275) - 869.36;
    };
    
    console.log("Salário: " + (baseSalary - aliquotIR));
  
