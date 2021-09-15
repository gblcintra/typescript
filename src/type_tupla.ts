//Type tupla
//não possue no JS e sim apenas com TS

//receba apenas 2 parametros
// O tipo '[string, number]'.A origem tem 2 elementos, o destino permite somente 2.
let aluno: [string, number];

aluno = ["Aluno 1", 123];
aluno = ["Gabriel", 1]

console.log("🚀 ~ file: type_tupla.ts ~ line 5 ~ aluno", aluno)

let statusPedido: [string , string , string];

statusPedido = ["Em produção", "Saiu para entrega", "Pedido entregue"]
