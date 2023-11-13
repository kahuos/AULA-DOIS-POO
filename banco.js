class Banco{
    constructor(nome, banco){
        this.nome = nome;
        this.banco = banco;
    }
    setarBanco(novoBanco){
        if (typeof novoBanco == "string") {
            this.banco = novoBanco
        }
    }
}

let p1 = new Banco("Julia","Santander");
let p2 = new Banco("Maria","Bradesco");
let p3 = new Banco("Marcos","Safra");
let p4 = new Banco("Joao","Inter");

console.log(`${p1.nome} tem ${p1.banco} como banco`)
console.log(`${p2.nome} tem ${p2.banco} como banco`)
console.log(`${p3.nome} tem ${p3.banco} como banco`)
console.log(`${p4.nome} tem ${p4.banco} como banco`)