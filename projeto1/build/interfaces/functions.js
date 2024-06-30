"use strict";
function mostraPromocao(preco) {
    console.log(`Promoção no valor de R$ ${preco}`);
}
const novoCurso = {
    id: '1',
    name: 'JavaScript',
    preco: 250,
    promocao: mostraPromocao
};
console.log(novoCurso);
novoCurso.promocao(150);
let somaNumbers = (valor1, valor2) => {
    return valor1 + valor2;
};
const resultado = somaNumbers(10, 20);
console.log('Resultado da variavel ' + resultado);
