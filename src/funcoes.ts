interface CursoProps {
    id: string;
    nome: string;
    preco: number;
    //definir apenas a funcao e o que ela deve esperar e retornar
    promocao: (preco: number) => void
}

// function mostraPromocao(preco: number): void {
//     console.log(`Promocao no curso por apenas: R$ ${preco}`);
// }

const novoCurso: CursoProps = {
    id: '1',
    nome: 'Curso TyperScript',
    preco: 750,
    promocao: (preco: number): void => {
        console.log(`Promocao no curso por apenas: R$ ${preco}`);
    }
}
console.log("🚀 ~ file: funcoes.ts ~ line 14 ~ novoCurso", novoCurso);
console.log("🚀 ~ file: funcoes.ts ~ line 19 ~ novoCurso.promocao(350)", novoCurso.promocao(350));


interface SomaProps{
    (valor1:number, valor2:number):number;
}

let somaNumeros: SomaProps = (valor1:number, valor2:number): number => {
    console.log('Resultado: ', valor1 + valor2);
    return valor1+valor2;
}

const resultado = somaNumeros(15,10);
console.log("🚀 ~ file: funcoes.ts ~ line 35 ~ resultado", resultado)

