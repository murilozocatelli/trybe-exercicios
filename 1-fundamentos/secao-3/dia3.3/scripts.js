function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
  }
  
  console.log(cumprimentaCliente('Isaac')) 

function somaValor(saldo) {
    return saldo + 100
}
console.log(somaValor(200))

function subtraiValor(saldo) {
    return saldo - 100
}
console.log(subtraiValor(400))

function multiplicaValor(saldo) {
    return saldo * 3
}
console.log(multiplicaValor(300))

function divideValor(saldo) {
    return saldo / 10
}
console.log(divideValor(1000))

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cumprimentaCliente(cliente) {
  return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
}

console.log(cumprimentaCliente(clientesTrybeBank));
