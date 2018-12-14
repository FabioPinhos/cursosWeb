Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('quadro de honra')
    }else{
        console.log('fim')
    }
}

const teste1 = function(nota2){
    if(nota2.entre(5, 6)){
        console.log('teste1')
    }
}

imprimirResultado(9)
teste1(4)