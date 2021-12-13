// Tyoe Alias conseguimos criar tipos mais poderosos, com mais informações do que tipos primitivos

type Info = {
    id:number;
    nome:string;
    descricao?: string;
}

const produtoInfo: Info = {
    id:123,
    nome:'Placa de Video',
    descricao:'Placa GTX 2090'
}

type Categoria = {
    slug:string;
    quantidadeProduto:number
}

const categoria1: Categoria = {
    slug:'Hardware',
    quantidadeProduto:2
}

type ProdutoInfo = Info & Categoria; // ProdutoInfo é a intercessao (UNIAO) entre info e categoria

const novoProduto:ProdutoInfo = {
    id:54321,
    nome: 'Teclado RGB',
    descricao:'Teclado com Leds',
    slug:'teclado-mecanico',
    quantidadeProduto:10
}
console.log("💚🚀  ~ file: type_intersection.ts ~ line 34 ~ novoProduto", novoProduto)
