
// Vamos supor que temos um jogo e esse jogo pode ter uma declare.

interface JogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];

}

const left4dead: JogoProps = {
    id: '123',
    nome: 'Left 4 Dead',
    descricao: 'Jogo de ação e tiro',
    plataforma: ['PS5', 'PC']
}

interface DLC extends JogoProps {
    jogoOriginal:JogoProps;
    novoConteudo: string[]
}

const left4deadDLC: DLC = {
    id: '99',
    nome: 'Left 4 Dead - Novos mapas',
    descricao: '4 novos mapas para jogar online',
    plataforma: ['PS5', 'PC'],
    novoConteudo:['Modo Coop','Mais 5 horas de jogo','Medalhas'],
    jogoOriginal: left4dead
}
console.log("💚🚀  ~ file: extends.ts ~ line 33 ~ left4deadDLC", left4deadDLC)
