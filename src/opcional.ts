interface CadastroProps {
    nome?: string;
    email: string;
    status: boolean;
}

const newUUser: CadastroProps = {
    nome: 'Gabriel',
    email: 'gabriel@teste.com',
    status: true
}
console.log("🚀 ~ file: opcopnal.ts ~ line 8 ~ novoUsuario", newUUser);

function novoUser(usuario:CadastroProps){
    console.log("🚀 ~ file: opcopnal.ts ~ line 15 ~ novoUser ~ nome", usuario.email);
}

novoUser({email:'teste@teste.com', status: false});