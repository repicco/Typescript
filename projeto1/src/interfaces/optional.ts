interface CadastroProps {
    nome?: string;
    email: string;
    status: boolean;
}

const novoUsuario: CadastroProps = {
    email: 'joao@example.com',
    status: true
}

console.log(novoUsuario);

function handleUser(user: CadastroProps) {
    console.log({ nome: user.nome, email: user.email, status: user.status });
}


handleUser({ email: 'maria@example.com', status: false });
