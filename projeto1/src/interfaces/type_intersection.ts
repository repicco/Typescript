/* Type alias serve para criar tipos mais poderosos, com mais informações do que tipos primitivos */

type Info = {
    id: number
    name: string
    description?: string
}

const product: Info = {
    id: 123,
    name: 'Placa de video',
    description: 'Placa de video MSI'
}

type Category = {
    slug: string
    quantity: number
}

const category1: Category = {
    slug: 'hardware',
    quantity: 2
}

type ProductInfo = Info & Category

const newProduct: ProductInfo = {
    id: 1234,
    name: 'Notebook',
    description: 'Notebook Lenovo',
    slug: 'notebook',
    quantity: 10
}

console.log(newProduct)

