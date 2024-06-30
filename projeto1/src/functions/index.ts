function login(username: string, password: string): boolean | string {
    let message = 'Bem vindo ' + username

    console.log(message)

    return username
}

const usernameLogin = login('Renato', 'test123')
console.log({usernameLogin})

// Caso2

let n1: number = 10
let n2: string = '25'

function soma(n1: number, n2: number): string {
    let resultado = n1 + n2
   
    if(resultado > 20) {
        return 'Soma maior que 20'
    } else {
        return 'Soma menor que 20'
    }
}

console.log(soma(n1, parseInt(n2)))