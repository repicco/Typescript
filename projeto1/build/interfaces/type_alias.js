"use strict";
function logIn(uuid, name) {
    // login
    console.log(`Id: ${uuid} - Bem vindo ${name}`);
}
function logUser(uuid) {
    console.log(`Conta referente ao uuid: ${uuid}`);
}
logIn(1, 'João');
logIn(55, 'Maria');
logUser(1);
function buyItem(money) {
    console.log('Comprando com a moeda: ', money);
}
buyItem("USD");
