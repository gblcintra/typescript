//Type Assertion
// Afirmação algum tipo

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

//as number esta afirmando que o status atual é de fato um numero
mudaStatus = statusAtual as number;
console.log("🚀 ~ file: type_assertion.ts ~ line 10 ~ mudaStatus", mudaStatus);

//outra maneira de afirmar
mudaStatus = <number>statusAtual;
console.log("🚀 ~ file: type_assertion.ts ~ line 13 ~ mudaStatus", mudaStatus);

//
let query: unknown = 'pizza';

let searchTerm: string = query as string;

console.log("🚀 ~ file: type_assertion.ts ~ line 20 ~ searchTerm", searchTerm);



