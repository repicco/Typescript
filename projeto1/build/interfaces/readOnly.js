"use strict";
let produto1 = {
    id: '1',
    name: 'produto 1',
    description: 'descricao do produto 1'
};
/* produto1.id = '123' Cannot assign to 'id' because it is a read-only property. */
produto1.name = 'novo nome';
console.log(produto1);
