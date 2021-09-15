//Type array

//array que recebe somente numeros

let numeros: number[];

numeros = [1, 5, 21, 30];

numeros.push(12);

console.log("🚀 ~ file: type_array.ts ~ line 7 ~ numeros", numeros);

let filmes: string[];

filmes = ["Filme 1", "Filme 2"];

filmes.push("Filme 3");

console.log("🚀 ~ file: type_array.ts ~ line 15 ~ filmes", filmes)

//Outra forma de tipar array
let numero: Array<number>;

numero = [1, 2, 3, 4, 5];

console.log("🚀 ~ file: type_array.ts ~ line 24 ~ numero", numero)

//Maneiras de tipar array recebendo 2 tipos
let teste: Array<string | number>

teste = [1, "1"]
console.log("🚀 ~ file: type_array.ts ~ line 32 ~ teste", teste)

//outra forma
let teste2: (string | number)[]

teste2 = [2, "2"]
console.log("🚀 ~ file: type_array.ts ~ line 37 ~ teste2", teste2)