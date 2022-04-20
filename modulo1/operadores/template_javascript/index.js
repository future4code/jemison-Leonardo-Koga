// Exercícios de interpretação de código

/* 
1. 
a. false
b. false
c. true
d. Boleano
*/

/*
2.
O prompt retorna uma String, então ele teria que transformar em Number o resultado.
Se ele transforma em Number será impreso a soma dos valores que o usuário digitar, senão vai dar erro.
*/

/*
3.
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/


// Exercícios de escrita de código

// 1.

let idade = Number(prompt('Qual a sua idade?'))
let idadeAmigo = Number(prompt('Qual a idade do seu melhor amigo/a/?'))
let resposta = idade > idadeAmigo
let diferencaIdade = idade - idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", resposta)
console.log("A diferença de idade de vcs é", diferencaIdade)

// 2.

let par = prompt('Digite um número par')
let restoDivisao = par % 2

console.log("O resto da divisão dividido por 2 é", restoDivisao)

// Todo número par divido por 2 vai dar sempre resultado 0.
// O código funciona mesmo sendo digitado um número impar, mais imprime que o resto da divisão sempre vai ser 1, independente do número impar que for digitado.


// 3.

let idadeAnos = Number(prompt("Qual sua idade em anos?"))
let mesesAno = 12
let meses = idadeAnos * mesesAno
let diaAno = 365
let dias = idadeAnos * diaAno
let horasAno = 8760
let horas = idadeAnos * horasAno


console.log("Idade em meses:", meses, "meses")
console.log("Idade em dias:", dias, "dias")
console.log("Idade em horas:", horas, "horas")

// 4.

let numero1 = Number(prompt("Digite um número:"))
let numero2 = Number(prompt("Digite outro número:"))

let maior = numero1 > numero2
let igual = numero1 == numero2
let divisivel = numero1 % numero2 == 0 
let divisivel2 = numero2 % numero1 == 0

console.log("O primeiro numero é maior que o segundo?", maior)
console.log("O primeiro número é igual ao segundo?", igual)
console.log("O primeiro número é divisivel pelo segundo?", divisivel)
console.log("O segundo numero é divisivel pelo primeiro?", divisivel2)

// Desafio

// 1.

// a)
 
let kelvin = (77 - 32)*(5/9) + 273.15

console.log("77°F é igual a", kelvin, "K")

// b)

let fahrenheit = (80)*(9/5) + 32

console.log(" 80°C é igual a", fahrenheit, "°F")

// c)

let fahrenheit2 = (30)*(9/5) + 32
let kelvin2 = 30 + 273

console.log("30°C é igual a", fahrenheit2, "°F")
console.log("30°C é igual a", kelvin2, "K")

// 2.

// a)

let quilowatt_hora = 0.05
let consumo = 280
let conta = quilowatt_hora * consumo

console.log("Valor da sua conta é: R$", conta)

// b)

let contaDesconto = conta - (conta * 15/100) 

console.log("Valor da sua conta com 15% de desconto é: R$", contaDesconto)

// 3.

// a)

let kilo = 20 / 2.2046226218488

console.log("20lb equivalem a", kilo, "kg")

// b)

let onca = 10.5 / 35.274

console.log("10.5oz equivalem a", onca, "kg")

// c)

let metro = 100 / 0.00062137

console.log("100mi equivalem a", metro, "m")

// d)

let metros = 50 / 3.2808

console.log("50ft equivalem a", metros, "m")

// e)

let litro = 103.56 / 0.26417

console.log("103.56gal equivalem a", litro, "l")

// f)

let litro2 = 450 * 0.24

console.log("450 xic equivalem a", litro2, "l")

// g)

// item escolhido foi o "a"

let escolhido = Number(prompt("Digite a quantidade de libras:"))
let kilo2 = escolhido / 2.2046226218488

console.log(escolhido, "equivalem a", kilo2, "kg")




