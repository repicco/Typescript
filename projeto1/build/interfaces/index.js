"use strict";
let loja;
loja = {
    nome: 'BK',
    endereco: 'Av. Paulista',
    status: true
};
const BurguerK = {
    nome: 'Burguer K',
    endereco: 'Av. Paulista',
    status: true
};
console.log({ loja, BurguerK });
function novaLoja({ nome, endereco, status }) {
    console.log(`Nome da loja: ${nome}`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Status: ${status}`);
    console.log('-------------------');
}
novaLoja({ nome: 'Red Burguer', endereco: 'Av Presidente Joao', status: true });
novaLoja({ nome: 'Subway', endereco: 'Av. Brigadeiro', status: false });
