"use strict";
const novoUsuario = {
    email: 'joao@example.com',
    status: true
};
console.log(novoUsuario);
function handleUser(user) {
    console.log({ nome: user.nome, email: user.email, status: user.status });
}
handleUser({ email: 'maria@example.com', status: false });
