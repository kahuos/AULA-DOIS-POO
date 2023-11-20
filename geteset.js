class Pessoa{
    _idade = 0 
    constructor(nome){
        this.nome = nome
    }
    setarIdade(novaIdade){
        if (typeof novaIdade == "number") {
            this.idade = novaIdade
        }
    }
    
    get idade(){
        return this._idade
    }

    set idade(x){
        if (typeof x == "number") {
            this._idade = x 
        }
    }
}

let p1 = new Pessoa ("Luan");
let p2 = new Pessoa ("Clara");
let p3 = new Pessoa ("Marcelo");

p1.idade = 35
p2.idade = 25
p3.idade = 40
console.log(`${p1.nome} tem ${p1.idade} anos`)
console.log(`${p2.nome} tem ${p2.idade} anos`)
console.log(`${p3.nome} tem ${p3.idade} anos`)