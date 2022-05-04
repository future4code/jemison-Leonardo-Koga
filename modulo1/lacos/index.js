// Exercícios de interpretação de código
// 1.
// 10

// 2.
// a)
// 19, 21, 23, 25, 27, 30

// b)
// Sim, teria apenas que depois do for...of... dar um console.log(lista) dentro do escopo

// 3.
// *
// **
// ***
// ****

// Exercícios de escrita de código
// 1. 
/* let quantidadeBichos = Number(prompt("Quantos bichinhos de estimação você tem?"))

let nomes = []

for(i = 0; i < quantidadeBichos; i++){
    let nomesBichos = prompt("Digite o nome/s do seu/s bichinho/s: ")
    nomes.push(nomesBichos)
    console.log(nomes)
}

if(quantidadeBichos === 0){
    console.log("Que pena! Você pode adotar um pet!")
} */

// 2.
// a)

let arrayOriginal =[80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

/* for(let array of arrayOriginal){
    console.log(array)
} */

// b)
/* for(let array of arrayOriginal){
    console.log(array / 10)
} */

// c) 
/* let array = []

for(let par of arrayOriginal){
    if(par % 2 == 0){
        array.push(par)
    }
}
console.log(array) */
  
// d)
/* let arrayString = []
let i = 0

for(let array of arrayOriginal){
    i++
    let numero = array
    array = (`O elemento do índex ${i} é: ${numero}`)
    arrayString.push(array)
}
    console.log(arrayString) */

// e)
/* function descobreMaior(array){
    let maior = 0
    for(i = 0; i < array.length ; i++){
        if(array[i] > maior){
            maior = array[i]
        }
    }
    return maior
}

let maiorNumero = descobreMaior(arrayOriginal)

function descobreMenor(array1){
    let menor = 130
    for(i = 0; i < array1.length; i++){
        if(array1[i] < menor){
            menor = array1[i]
        }
    }
    return menor
}

let menorNumero = descobreMenor(arrayOriginal)

console.log(`O maior numero é ${maiorNumero} e o menor é ${menorNumero}`) */

// Desafios
// 1.
/* let numeroJogador1 = Number(prompt("Digite um número:"))
console.log("Vamos Jogar!")

let numeroJogador2 = Number(prompt("Chute um número:"))
let tentativas = 0

while(numeroJogador1 !== numeroJogador2){
    numeroJogador2 = Number(prompt("Chute um número:"))
    console.log(`O número chutado foi: ${numeroJogador2}`)
    tentativas++
    if(numeroJogador2 < numeroJogador1){
        console.log("Errrrrrrrrou, é maior")
    } else if(numeroJogador2 > numeroJogador1){
        console.log("Errrrrrrrrou, é menor")
    } else{
        console.log(`Acertou!!\nO número de tentativas foi: ${tentativas}`)
    }
} */

// 2.
console.log("Vamos Jogar!")
let computadorJogador = Number(Math.floor(Math.random() * 100))
console.log(computadorJogador)

let numeroJogador2 = Number(prompt("Chute um número:"))
let tentativas = 0

while(numeroJogador2 !== computadorJogador){
    numeroJogador2 = Number(prompt("Chute um número:"))
    console.log(`O número chutado foi: ${numeroJogador2}`)
    tentativas++
    if(numeroJogador2 < computadorJogador){
        console.log("Errrrrrrrrou, é maior")
    } else if(numeroJogador2 > computadorJogador){
        console.log("Errrrrrrrrou, é menor")
    } else{
        console.log(`Acertou!!\n O número de tentativas foi: ${tentativas}`)
    }
}

// Depois de entender como funciona o metodo Math.random foi mais facil, acabei implantando o metodo Math.floor para retornar núneros inteiros. 
