// Exercício 1

// a) Usamos o process.argv[]

//b)

// const nome = (process.argv[2])
// const idade = (process.argv[3])
// const soma = (process.argv[4])

// console.log(`Olá, ${nome} ! Você tem ${idade} anos.`)

//c)

// const nome = (process.argv[2])
// const idade = (process.argv[3])
// const n1 = Number(process.argv[4])
// const n2 = Number(process.argv[5])

// function somar(n1,n2){
//     return n1+n2;
// }

// const resposta = somar(n1, n2)

// console.log(`Olá, ${nome} ! Você tem ${idade} anos. Em sete anos você terá ${resposta}`)

// Exercício 2

// const operacao = (process.argv[2])
// const n1 = Number(process.argv[3])
// const n2 = Number(process.argv[4])

// function operation(operacao, n1, n2){
//     if (operacao === "soma")
//         return n1 + n2;
//     if (operacao === "subt")
//         return n1 - n2;
//     if (operacao === "mult")
//         return n1 * n2;
//     if (operacao === "div")
//         return n1 / n2;
// }

// console.log(operation("subt", 3, 1))

// Exercício 3

import listaTarefas from "./data.js"

const res2 = []
const user = process.argv[2]

// res2.push(user)


listaTarefas.map((t) => {
    res2.push(user)
})

console.log(res2)