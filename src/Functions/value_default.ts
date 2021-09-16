//Type value default

//Como deixar um valor por default ou deixar ele opcional
//nome recebe tipagem dinamica
function cadastro(email: string, senha: string, nome = "Aluno", idade?:number): void {
    let data = { email, senha, nome, idade };
    console.log("🚀 ~ file: value_default.ts ~ line 7 ~ cadastro ~ data", data)
}

cadastro('teste@teste.com','123123')
cadastro('gabriel@teste.com','123123','Gabriel', 26)