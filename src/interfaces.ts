//Interface

//Conjuto de dados(um padrรฃo) para descrever a estrutura de um objeto
interface ILojaProps {
    nome: string;
    endereco: string;
    status: boolean;
    produtoPromocao?: string;
}

let loja: ILojaProps = {
    nome: "Burguer K",
    endereco: 'Rua logo ali',
    status: true,
    produtoPromocao: 'Burguer Duplo'
}

console.log("๐ ~ file: interfaces.ts ~ line 8 ~ loja", loja);
console.log(`๐ ~ ----------------------------------------------`);



function novaLoja({nome,endereco,status}:ILojaProps): void {
    console.log(`๐ ~ Loja ${nome} criada com sucesso!`);
    console.log(`๐ ~ Endereรงo da loja ${endereco}`);
    console.log(`๐ ~ Status da loja: ${status}`);
    console.log(`๐ ~ ----------------------------------------------`);
}

novaLoja({nome:'Subway', endereco:'Rua X', status:true});
novaLoja({nome:'RedBurguer', endereco:'Rua V', status:false});
