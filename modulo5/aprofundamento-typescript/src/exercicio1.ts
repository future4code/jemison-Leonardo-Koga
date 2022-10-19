//Exercicio 1

//a)

// let minhaString: string = 7

//Ocorre um erro pois a váriavel é uma string e recebeu um número.

//b)

let meuNumero: number | string = 77

//c)

const pessoa1 = {
    name: "José",
    idade: 50,
    corFavorita: "verde"
}

type Pessoas = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa2: Pessoas = {
    nome: "Leo",
    idade: 44,
    corFavorita: "azul"
}

const pessoa3: Pessoas = {
    nome: "Juliane",
    idade: 46,
    corFavorita: "vermelha"
}

const pessoa4: Pessoas = {
    nome: "João",
    idade: 20,
    corFavorita: "marrom"
}

//d)

enum ArcoIris {
    Vermelha = "vermelha",
    Laranja = "laranja",
    Amarela = "amarela",
    Verde = "verde",
    Azul = "azul",
    AzulEscuro = "azul escuro",
    Violeta = "violeta"
}

const pessoa5 = {
    nome: "Leo",
    idade: 44,
    corFavorita: ArcoIris
}

const pessoa6 = {
    nome: "Juliane",
    idade: 46,
    corFavorita: ArcoIris
}

const pessoa7 = {
    nome: "João",
    idade: 20,
    corFavorita: ArcoIris
}

