type Uuid = string | number | null;

function acessar(uuid: Uuid, nome: string) {
    console.log(`💚🚀  Id: ${uuid} - Bem Vindo ${nome}`)

}

function logUsuario(uuid: Uuid) {
    console.log(`💚🚀 Conta referente ao UUID  Id: ${uuid}`)
}

acessar(123, 'Gabriel');
acessar(`123`, 'Gabriel');

type Moedas = 'BRL' | 'EUR' | 'USD' | 'BTC';

function comparItem(moeda: Moedas) {
    console.log(`💚🚀 Comprando com a moeda: ${moeda}`)
}

comparItem('BTC')