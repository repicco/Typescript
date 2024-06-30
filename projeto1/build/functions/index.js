"use strict";
function login(username, password) {
    let message = 'Bem vindo ' + username;
    console.log(message);
    return username;
}
const usernameLogin = login('Renato', 'test123');
console.log({ usernameLogin });
// Caso2
let n1 = 10;
let n2 = '25';
function soma(n1, n2) {
    let resultado = n1 + n2;
    if (resultado > 20) {
        return 'Soma maior que 20';
    }
    else {
        return 'Soma menor que 20';
    }
}
console.log(soma(n1, parseInt(n2)));
