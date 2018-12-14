//usando a notacao literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object
obj2.nome = 'fabio'
console.log(obj2)

//Funções construtoras
function Produto(){
    return this.nome
}

