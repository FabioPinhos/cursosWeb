
// Função em JS é First-Class Object (Citizens)
//criar de forma literarl
function fun1(){ }

// Armazenar em uma variavel
const fun2 = function () { }

// Armazenar dentro de um array
const array = [ function(a, b){ return a + b}, fun1, fun2 ]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function (){return 'Oba' }
console.log(obj.falar())

//Passar funcao como parametro
function run(fun){
    fun()
}

run(function (){ console.log('Executando...')})

//Uma funçao pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
console.log(typeof cincoMais)
cincoMais(4)