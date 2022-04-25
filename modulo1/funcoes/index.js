// Exercícios de interpretação de código
// 1.
// a)
// 10
// 50
// b)
// Ele multiplicaria. No console não apareceria nada.

// 2.
// a)
// Esta função pega o texto do prompt digitado pelo usuário, transforma tudo em minusculo e procura neste texto a palavra "cenoura", caso encontre retorna um booleano true
// b)
// i.true
// ii.true
// iii.true

// Exercícios de escrita de código

// 1.
// a)

function sobreMim(){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${condicao} estudante.`)
}

const nome = "Leonardo"
const cidade = "Santo André"
const idade = "44"
const condicao = "sou"

sobreMim()

// b)

function sobreMimComParametros(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nomeb}, tenho ${idadeb} anos, moro em ${cidadeb} e sou ${profissaob}.`)
}

const nomeb = "Leonardo"
const idadeb = "44"
const cidadeb = "Santo André"
const profissaob = "estudante"

sobreMimComParametros()

// 2.
// a)

function somar(num1, num2){
    const soma = num1 + num2
    return soma
}

const resultado = somar(10, 3)
console.log(resultado)

// b)

function retorneBooleano(num1, num2){
    const boolean = (num1 >= num2).toString()
    return boolean
}

const num1trueFalse = retorneBooleano(10,3)
console.log(num1trueFalse)

// c)

function retorneSePar(num1){
    const par = (num1 % 2 == 0).toString()
    return par
}

const num1Par = retorneSePar(13)
console.log(num1Par)

// d)

function mensagem(frase1){
   const teste= console.log(frase.length, frase.toUpperCase())
}
let frase = "Obrigado vida"
mensagem()

// 3.

const numero1 = Number(prompt("Digite um número: "))
const numero2 = Number(prompt("Digite outro número: "))


function somatoria(){
    const soma = numero1 + numero2
    
    return soma
}

function subtrair(){
    const menos = numero1 - numero2
    
    return menos
}

function multiplicar(){
    const vezes = numero1 * numero2
    
    return vezes
}

function dividir(){
    const divide = numero1 / numero2
    
    return divide
}

const result1 = somatoria()
const result2 = subtrair()
const result3 = multiplicar()
const result4 = dividir()

console.log(`A soma é ${result1}, a subtração é ${result2}, a multiplicação é ${result3}, e a divisão é ${result4}`)

// Desafios
// 1.
//a)

const imprime = (q) =>{
    console.log(q)
}

imprime(1)

// b)

const desafioB = (n1, n2) => {
    const somarEsc = 10 + 3
    imprime(somarEsc)
}

desafioB()

// 2.

function pitagoras (nu1, nu2){
    const catetos = (nu1 * nu1) + (nu2 * nu2)
    return catetos
}

const resultad = pitagoras(0, 60)
const pita = Math.sqrt(resultad) 
console.log(pita)