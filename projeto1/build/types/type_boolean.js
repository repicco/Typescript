"use strict";
let estaAutenticado = true;
estaAutenticado = false;
let codeStatus = 1;
// Na conversao de boolean, tudo que for diferente de zero, undefined, string vazia será verdadeiro.
estaAutenticado = Boolean(codeStatus);
console.log(estaAutenticado);
