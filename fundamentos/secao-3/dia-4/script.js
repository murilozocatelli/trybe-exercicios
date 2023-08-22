// //exercicio 1

// const reader = {
//     name: 'Julia',
//     lastName: 'Pessoa',
//     age: 21,
//     favoriteBooks: [
//       {
//         title: 'O Senhor dos Anéis - a Sociedade do Anel',
//         author: 'J. R. R. Tolkien',
//         publisher: 'Martins Fontes',
//       },
//     ],
//   };

//   console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0].title}'.`);

//   // “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.

//   // exercicio 2: Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:
  
//   const newBook = {
//     title: 'Harry Potter e o Prisioneiro de Azkaban',
//     author: 'JK Rowling',
//     publisher: 'Rocco',
//   }

//   reader.favoriteBooks.push(newBook)
//   console.log(reader)

//   // exercicio 3: 3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:

// // “Julia tem {quantidade} livros favoritos.”

// // {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:

// // “Julia tem 1 livro favorito.”

// console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`)

// // Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         },
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         },
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       },
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//     // Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
//   // De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.
  
//   const customerInfo = (fullOrder) => {
//     return `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment}.`
//   }
  
//   console.log(customerInfo(order));

//   //Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
// // Modifique o nome da pessoa compradora para Luiz Silva;
// // Modifique o valor total da compra para R$ 50,00.
  
//   const orderModifier = (fullOrder) => {
//     order.name = 'Luiz Silva'
//     order.payment.total = 50
//     const pizzas = Object.keys(fullOrder.order.pizza).join(', ')
//     return `Olá, ${order.name}, o valor total de seu pedido de ${pizzas} e ${order.order.drinks.coke.type} é R$ ${order.payment.total}.`
//   }
  
//   console.log(orderModifier(order));

const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };
  
  // Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.
// const valueKeyPosition = (object1, index) => Object.values(object1)[index];
// console.log(valueKeyPosition(school, 0));
// Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

// const sumStudents = () => {
//     let sum = 0;
//     array = school.lessons
//     for (let value of array) {
//         sum += value.students
//     }
//     return sum
// }
// console.log(sumStudents());
// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

const verificaChaveArray = (arrayDeObjetos, chave) => {
    for (const objeto of arrayDeObjetos) {
        if (objeto[chave] === undefined) {
            return false;
        }
    }
    return true;
}

const school = {
    lessons: [
        // ... (seu array de aulas)
    ]
};

console.log(verificaChaveArray(school.lessons, 'course')); // Exemplo de uso com o array 'lessons'
