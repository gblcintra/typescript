// Type boolean

let estaAutenticado: boolean = true;

//se for acima de 0 e true
let codeStatus:number = 1;
estaAutenticado = Boolean(codeStatus); //true

console.log(estaAutenticado);
console.log(typeof estaAutenticado);

//se o string tiver vazia ou undefined é false
let codeStatusS:string = '';
//Boolean transvofma a variavem em boolean
estaAutenticado = Boolean(codeStatusS)

console.log(estaAutenticado);
console.log(typeof estaAutenticado);