<!-- Iniciando TypeScript -->
tsc --init

<!-- Configurando pastas -->
Criar pasta src e build

No arquivo tsconfig.json descomentar 
"rootDir": "./src",     -> Pasta raiz
"outDir": "./build",    -> Pasta para gerar os builds dos arquivos

<!-- Fica verificando alguma alteração no arquivo e realiza o build -->
tsc --watch

