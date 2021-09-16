//Type enum

//É como uma class
//não temos no js mas no ts sim
//Serve para enumerar um tipo de dados
//como se fosse tema do site, (escuro ou claro)
//dessa forma atribui o valor

enum DesignColors{
    white = "#ffffff",
    black = "#000000"
};

console.log("🚀 ~ file: type_enum.ts ~ line 12 ~ DesignColors.black", DesignColors.black);

//Outro caso tambem
//Usar status dentro do sistema
//dessa forma pega a possição
enum StatusPermission{
    ADMIN,
    USER,
    SUPPORT
};

console.log("🚀 ~ file: type_enum.ts ~ line 16 ~ StatusPermission.ADMIN", StatusPermission.ADMIN);
console.log("🚀 ~ file: type_enum.ts ~ line 16 ~ StatusPermission.USER", StatusPermission.USER);
console.log("🚀 ~ file: type_enum.ts ~ line 16 ~ StatusPermission.SUPPORT", StatusPermission.SUPPORT);