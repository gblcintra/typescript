//Type unknown
//tipo desconhecido
//quando você não sabe o tipo que voce vai receber
//Não é muito utilizada

let total: any;

total = 100;

total = "350";

total = {
    total: 100
}

//outro caso
let idPedido: any = 123;
let totalPedido: unknown = 15;
let entregador: number = idPedido;
//n'ao consegue atribuir um unknown dentro de uma tipagem conhecida
//só pode ser atribuida com tipagem unknown ou any
let totalEntrega: unknown = totalPedido;

console.log("🚀 ~ file: type_unknown.ts ~ line 19 ~ entregador", entregador)
console.log("🚀 ~ file: type_unknown.ts ~ line 22 ~ totalEntrega", totalEntrega)

