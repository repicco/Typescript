/* function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number {
    return venda1 + venda2 + venda3 + venda4;
}

const resultVendas = totalVendas(10, 15, 20, 25);

console.log(resultVendas) */

function totalVendas(...vendas: number[]): number {
    const qtdVendas = vendas.length;

    console.log(`Quantidade de vendas: ${qtdVendas}`);

    return qtdVendas
}

const resultVendas = totalVendas(10, 15, 20, 25);

console.log({resultVendas})

function mostrarNomes(...nomes: string[]): void {
    console.log(nomes.length)

    nomes.forEach(nome => {
        console.log(nome)
    })
}

mostrarNomes('João', 'Maria', 'José', 'Pedro', 'Renato')