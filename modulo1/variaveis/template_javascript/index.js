//Exercícios de interpretação de código


/* 
Exercícios de interpretação de código

Respostas:

1- 
console.log(10);
console.log(10, 5);

2- console.log(10, 10, 10);

3- horasTrabalhadas; valorDia;

*/

//Exercícios de escrita de código

// Exercício 1-
let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

// undefined foi impresso pq as variáveis não foram declaradas valores.

let novoNome = prompt("Qual seu nome?");
let novaIdade = prompt("Qual sua idade?");

nome = novoNome;
idade = novaIdade;

console.log(typeof nome);
console.log(typeof idade);

// a variavel idade foi declarada como String, pois todos os resultados do prompt são strings.

console.log("Olá", nome, "você tem", idade, "anos");

//Exercício 2
let roupa = true;
let comida = true;
let sono =false;

console.log("Você esta usando uma roupa azul?", roupa);
console.log("Vocë está com fome?", comida);
console.log("Voccê está com sono?", sono);

//Exercício 3
let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);

//Desafio
let soma = prompt("Digite um número:");
let primeiroEmNumero = Number(soma);
let soma1 = prompt("Digite outro número:");
let segundoEmNumero = Number (soma1);

let somar = primeiroEmNumero + segundoEmNumero;
let multiplicar = primeiroEmNumero * segundoEmNumero;



console.log("A soma dos valores é", somar);
console.log("A multiplicação dos valores é", multiplicar);

