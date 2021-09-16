//Type functions

//tipando o retorno de uma função
function login(username: string): string {
    let message: string = `Bem Vindo ${username}`;
    return message;
};

const userMessage = login("Gabriel");
console.log("🚀 ~ file: funcoes.ts ~ line 10 ~ userMessage", userMessage)



let n1: number = 10;
let n2: string = "25";

function soma(valor1: number, valor2: number): string {
    let soma:number = valor1 + valor2;
    if (soma > 20) return 'Soma maior que 20';
    return 'Soma menor que 20';
}

console.log("🚀 ~ file: funcoes.ts ~ line 24 ~ soma(n1, Number(n2))", soma(n1, Number(n2)))


