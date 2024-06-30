let numeros: number[]

numeros = [1, 5, 25]

numeros.push(55)

/* numeros.push('Teste') */

console.log(numeros)


let filmes: Array<string>

filmes = ['Filme1', 'Filme2']

filmes.push('Filme3')

console.log(filmes)

/* let Ids: Array<string | number> */
let Ids: (string | number)[]

Ids = ['132gc', 88]

console.log(Ids)