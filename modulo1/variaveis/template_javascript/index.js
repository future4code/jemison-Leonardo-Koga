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



