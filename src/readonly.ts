interface ProdutoProps{
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto1: ProdutoProps = {
    id: '1',
    nome:'Tenis Nike',
    descricao: 'Super tenis prmocao'
}

//Não é possível atribuir a 'id' porque é uma propriedade de somente leitura.
// produto1.id = '123';

console.log("🚀 ~ file: readonly.ts ~ line 8 ~ produto1", produto1.id)
