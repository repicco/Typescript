"use strict";
function cadastro(email, senha, nome = 'Aluno', idade) {
    let data = {
        email,
        senha,
        nome,
        idade
    };
    console.log(data);
}
cadastro('XXXXXXXXXXXXXXXXXXX', '123456', 'Renato');
function cadastroLoja(nome, email, status = false) {
    console.log({
        nome,
    });
    return status;
}
const statusLoja = cadastroLoja('Loja Qualquer', 'XXXXXXXXXXXXXX', true);
console.log({ statusLoja });
