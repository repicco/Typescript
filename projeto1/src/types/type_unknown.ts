
//Quando não sabemos o tipo que será recebido.
let total: any // com any podemos receber qualquer coisa e ainda seguir utilizando assim.

total = 100

total = 'Teste'

let quantidade: number = total

console.log(total)

//Valor do tipo unknown só pode ser atribuido para o mesmo tipo ou any
let entregador: unknown = 15

/* let pedido: number = entregador  - O unknown não permitira a atribuição */


