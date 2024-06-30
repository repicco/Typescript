interface CursoProps {
    id: string;
    name: string;
    preco: number;
    promocao: (preco: number) => void
}

function mostraPromocao(preco: number):void {
    console.log(`Promoção no valor de R$ ${preco}`);
}

const novoCurso: CursoProps = {
    id: '1',
    name: 'JavaScript',
    preco: 250,
    promocao: mostraPromocao
}

console.log(novoCurso);
novoCurso.promocao(150)


interface SomaProps {
    (valor1: number, valor2: number): number;
}

let somaNumbers: SomaProps = (valor1: number, valor2:number): number => {
    return valor1 + valor2;
}

const resultado = somaNumbers(10, 20);

console.log('Resultado da variavel ' + resultado)