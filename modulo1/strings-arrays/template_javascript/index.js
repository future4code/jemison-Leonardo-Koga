// Exercícios de interpretação de código

// 1.
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// 2.
// SUBI NUM ÔNIBUS EM MIRROCOS, 27

// Exercícios de escrita de código
// 1.
let emailDoUsuario = prompt("Digite seu email: ")
let nomeDoUsuario = prompt("Digite seu nome: ")

console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

// 2. 
let comidaPreferida = ["Pizza", "Arroz", "Feijão", "Sushi", "Sorvete"]
// a)
console.log(comidaPreferida)
// b)
console.log("Essas são as minhas comidas preferidas: ", comidaPreferida)

// c)
let comidaUsuario =prompt("Qual sua comida preferida: ")
comidaPreferida.splice(1,1,comidaUsuario)
console.log(comidaPreferida)

// 3.
// a)
let listaDeTarefas = []

// b)
let tarefa1 = prompt("Digite a primeira tarefa: ")
let tarefa2 = prompt("Digite a segunda tarefa: ")
let tarefa3 = prompt("Digite a terceira tarefa: ")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

// c)
console.log(listaDeTarefas)

// d)
let tarefaFeita = prompt("Digite o indice de uma tarefa que já realizou (0, 1, 2): ")

// e) 
listaDeTarefas.splice(tarefaFeita,1)

// f)
console.log(listaDeTarefas)

// Desafios
// 1.
let frase = "Obrigado Vida"
separado = frase.split(/[\s,]+/)
console.log(separado)


// 2.
let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
encontrar = array.indexOf("Abacaxi", 0)
console.log(encontrar)
console.log(array.length)





