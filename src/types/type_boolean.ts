// Type boolean

let estaAutenticado: boolean = true;

//se for acima de 0 e true
let codeStatus:number = 1;
estaAutenticado = Boolean(codeStatus); //true

console.log("🚀 ~ file: type_boolean.ts ~ line 10 ~ estaAutenticado", estaAutenticado);
console.log("🚀 ~ file: type_boolean.ts ~ line 12 ~ typeof estaAutenticado", typeof estaAutenticado);

//se o string tiver vazia ou undefined é false
let codeStatusS:string = '';
//Boolean transvofma a variavem em boolean
estaAutenticado = Boolean(codeStatusS);

console.log("🚀 ~ file: type_boolean.ts ~ line 18 ~ estaAutenticado", estaAutenticado);
console.log("🚀 ~ file: type_boolean.ts ~ line 19 ~ typeof estaAutenticado", typeof estaAutenticado);