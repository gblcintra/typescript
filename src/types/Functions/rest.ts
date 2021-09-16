function totalVendas(...vendas: number[]): void {
    const quantidadeVendas = vendas.length;
    console.log(`Você fez ${quantidadeVendas} vendas hoje!`);
    let soma:number = 0;
    vendas.map(venda => {
        soma = soma + venda;
    })
    console.log("🚀 ~ file: rest.ts ~ line 7 ~ totalVendas ~ soma", soma)
};

totalVendas(10, 20, 30, 4, 15);


function mostrarNomes(...nomes: string[]): void {
    nomes.map(nome => {
        console.log(nome);
    });
};

mostrarNomes('Gabriel', 'Teste');