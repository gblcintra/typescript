interface TecnologiaProps {
    id: string;
    nome: string;
    descricao?: string;
    slug?: string[];
}

// let tecnologia1 : TecnologiaProps = {
//     id:'1',
//     nome: 'React',
//     slug: ['react','reactjs']

// }

interface NomesProps {
    tecnologia: TecnologiaProps[];
}

let frontend: NomesProps = {
    tecnologia:[
        {
            id: '123',
            nome: 'ReactJs',
            descricao: 'Biblioteca para criar interfaces'
        },
        {
            id: '321',
            nome:'VueJs',
            descricao: 'Framework Frontend'
        }
    ]
}

console.log("🚀 ~ file: array_interface.ts ~ line 20 ~ frontend.tecnologia", frontend.tecnologia)