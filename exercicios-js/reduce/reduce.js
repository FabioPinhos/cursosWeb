const alunos = [
    {nome: 'João', nota:7.3, bolsista:false},
    {nome: 'Maria', nota:9.2, bolsista:true},
    {nome: 'Pedro', nota:9.8, bolsista:false},
    {nome: 'Ana', nota:8.7, bolsista:true},
]

//dasfio 1: Todos os alunos são bolsista ?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//dasfio 1: Algum deles são alunos são bolsista ?
const algunsBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algunsBolsistas))