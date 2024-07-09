"use strict";
/* Type alias serve para criar tipos mais poderosos, com mais informações do que tipos primitivos */
const product = {
    id: 123,
    name: 'Placa de video',
    description: 'Placa de video MSI'
};
const category1 = {
    slug: 'hardware',
    quantity: 2
};
const newProduct = {
    id: 1234,
    name: 'Notebook',
    description: 'Notebook Lenovo',
    slug: 'notebook',
    quantity: 10
};
console.log(newProduct);
