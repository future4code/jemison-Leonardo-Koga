// 1.
// a)
// o código pede que o usuário digite um número e depois vê se ele é par.

// b)
// para os números divisiveis por 2 com resto 0.

// c)
// para número impares

// 2.
// a)
// para consultar preço das frutas

// b)
// R$ 2.25

// c)
// R$ 5.5

// 3.
// a)
// para o usuário digitar um número, e ele será transformado em Number, pois o prompt retorna uma String

// b)
// No caso 10 a mensagem será "Esse número passou no teste", e no caso -10 ele não retorna nada

// c)
// Sim existe um erro, pois a variável "let mensagem" ficou dentro do escopo local do "if"

// Exercícios de escrita de código

// 1.
let idade = Number(prompt("Qual a sua idade: "))

function dirigir(idade){
    if(idade >= 18){
        return "Você pode dirigir"
    } else{
        return "Você não pode dirigir"
    }
}
console.log(dirigir(idade))

// 2.
let periodo = prompt("Digite seu turno? M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()

function saudacao(periodo){
    if(periodo == "v"){
        return "Boa tarde!!"
    } else if( periodo == "m"){
        return "Bom dia!!"
    }  
         else{
             return "Boa noite!!"
         }
}

console.log(saudacao(periodo))

// 3)
switch(periodo){
    case "v":
        console.log("Boa tarde!")
        break
    case "m":
        console.log("Bom dia!")
        break
    case "n":
        console.log("Boa noite!")
        break
    default:
        console.log( "Digite umas da opções (m, v, n)")
        break
}

// 4.
let genero = prompt("Qual gênero de filme iremos assistir?").toLowerCase()
let preco = Number(prompt("Qual valor do ingresso?"))

function assistirFilme(genero, preco){
    if( genero === "fantasia" && preco < 15){
        console.log("Bom filme!")
    } else{
        console.log("Escolha outro filme :(")
    }
}
assistirFilme(genero, preco)

// Desafios
// 1.
function assistirFilme(genero, preco){
    if( genero === "fantasia" && preco < 15){    
        let lanche = prompt("Qual snack você quer comprar?")
        console.log("Bom filme!!")
        console.log(`Aproveite seu ${lanche}`)
    } else{
        console.log("Escolha outro filme :(")
    }
}

// 2.
let nomeCompleto = prompt("Digite seu nome completo:")
let tipoJogo = prompt("Qual tipo de jogo? Digite IN (para internacional) ou DO (para doméstico)").toUpperCase()
let etapa = prompt("Qual etapa do jogo? Digite SF (para semi-final), DT (para decisão terceiro lugar) ou FI (para final)").toUpperCase()
let categoria = prompt("Qual categoria? Digite 1, 2, 3 ou 4")
let quantidade = Number(prompt("Qual quantidade de ingressos?"))

let valor

function calcular(etapa, categoria){
    if(etapa === "SF" && categoria === "1"){
        valor = 1320
    } if(etapa === "SF" && categoria === "2"){
        valor = 880
    } if(etapa === "SF" && categoria === "3"){
        valor = 550
    }if(etapa === "SF" && categoria === "4"){
        valor = 220
    } 
}
calcular(etapa, categoria)

function calcular1(etapa, categoria){
    if(etapa === "DT" && categoria === "1"){
        valor = 660
    } if(etapa === "DT" && categoria === "2"){
        valor = 440
    } if(etapa === "DT" && categoria === "3"){
        valor = 330
    }if(etapa === "DT" && categoria === "4"){
        valor = 170
    } 
}
calcular1(etapa, categoria)

function calcular2(etapa, categoria){
    if(etapa === "FI" && categoria === "1"){
        valor = 1980
    } if(etapa === "FI" && categoria === "2"){
        valor = 1320
    } if(etapa === "FI" && categoria === "3"){
        valor = 880
    }if(etapa === "FI" && categoria === "4"){
        valor = 330
    } 
}
calcular2(etapa, categoria)

    switch(tipoJogo){
        case "IN":
            valor = valor * 4.10
            break
    }
function exemplo(tipoJogo){
    let nacionalidade = tipoJogo.replaceAll("DO", "Nacional").replaceAll("IN", "Internacional")
   
    return nacionalidade
}
let result = exemplo(tipoJogo)


function exemplo1(etapa){
    let final = etapa.replaceAll("FI", "Final").replaceAll("DT", "Decissão terceiro lugar").replaceAll("SF", "Semi-Final")
    
    return final
}

let result1 = exemplo1(etapa)

let resultado = valor        

let valorTotal = valor * quantidade

console.log(`-- DADOS DA COMPRA -- \n Nome do Cliente: ${nomeCompleto}\n Tipo do Jogo: ${result}\n Etapa do jogo: ${result1}\n Categoria: ${categoria}\n Quantidade de ingressos: ${quantidade}\n --VALORES--\n Valor do ingresso: R$${resultado}\n Valor total: R$${valorTotal} `)