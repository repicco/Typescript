"use strict";
//Quando não sabemos o tipo que será recebido.
let total; // com any podemos receber qualquer coisa e ainda seguir utilizando assim.
total = 100;
total = 'Teste';
let quantidade = total;
console.log(total);
//Valor do tipo unknown só pode ser atribuido para o mesmo tipo ou any
let entregador = 15;
/* let pedido: number = entregador  - O unknown não permitira a atribuição */
