const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso:13
}

console.log(Object.keys(pessoa))
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}

const obj = Object.assign(dest, o1, o2)

console.log(obj)
