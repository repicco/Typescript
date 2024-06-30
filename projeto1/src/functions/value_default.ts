function cadastro(email: string, senha: string, nome = 'Aluno', idade?: number): void {
    let data = {
        email,
        senha,
        nome, 
        idade
    }

    console.log(data)
}

cadastro('XXXXXXXXXXXXXXXXXXX', '123456', 'Renato')

function cadastroLoja(nome: string, email: string, status = false): boolean {
    console.log({
        nome,
    })

    return status
}

const statusLoja = cadastroLoja('Loja Qualquer', 'XXXXXXXXXXXXXX', true)

console.log({statusLoja})

