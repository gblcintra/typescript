//Interface

//Conjuto de dados(um padrão) para descrever a estrutura de um objeto
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

console.log("🚀 ~ file: interfaces.ts ~ line 8 ~ loja", loja);
console.log(`🚀 ~ ----------------------------------------------`);



function novaLoja({nome,endereco,status}:ILojaProps): void {
    console.log(`🚀 ~ Loja ${nome} criada com sucesso!`);
    console.log(`🚀 ~ Endereço da loja ${endereco}`);
    console.log(`🚀 ~ Status da loja: ${status}`);
    console.log(`🚀 ~ ----------------------------------------------`);
}

novaLoja({nome:'Subway', endereco:'Rua X', status:true});
novaLoja({nome:'RedBurguer', endereco:'Rua V', status:false});
