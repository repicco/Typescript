//Afirmando um tipo

let statusAtual: unknown =  1

let mudaStatus: number = 0

mudaStatus = statusAtual as number

//outra forma de fazer

mudaStatus = <number>statusAtual

console.log({mudaStatus})

let query: unknown = 'pizza'

let searchTerm: string = query as string

console.log({searchTerm})