function tratarErroELancar(erro){
    throw new Error('...')
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar()   
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)
