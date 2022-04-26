// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const trianguloAltura = prompt("Qual a altura do triangulo?")
  const trianguloLargura = prompt("Qual a largura do triangulo?")
  const trianguloArea = trianguloLargura * trianguloAltura

  console.log(trianguloArea)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoNascimento = Number(prompt("Qual seu ano de nascimento?"))

  let idade = anoAtual - anoNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual seu nome?")
  let idade = prompt("Qual sua idade?")
  let email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let primeiraCor = prompt("Qual sua primeira cor favorita?")
  let segundaCor = prompt("Qual sua segunda cor favorita?")
  let terceiraCor = prompt("Qual sua terceira cor favorita")

  console.log([primeiraCor, segundaCor, terceiraCor])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array.shift()
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  ultimo = array.pop()
  primeiro = array.shift()
  array.push(primeiro)
  array.unshift(ultimo)
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Qual o ano atual?")
  let anoDeNascimento = prompt("Qual seu ano de nascimento?")
  let anoRg = prompt("Que ano seu RG foi emitido?")

  idadePessoa = anoAtual - anoDeNascimento
  vencimentoRg = anoAtual - anoRg

  menorDeVinte = idadePessoa <= 20 && vencimentoRg >= 5
  maiorQueVinte = idadePessoa <= 50 && vencimentoRg >= 10
  maiorQueCinquenta = idadePessoa > 50 && vencimentoRg > 15

  renovacao = menorDeVinte || maiorQueVinte || maiorQueCinquenta

  console.log(renovacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  multiplo4 = ano % 4 == 0
  multiplo100 = ano % 100 != 0
  multiplo400 = ano % 400 == 0

  bissexto = multiplo4 && multiplo100 || multiplo400

  return bissexto
}
  

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

    let idade = prompt("Você tem mais de 18 anos?")
    let estudo = prompt("Você possui ensino médio completo?")
    let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
    
    booleanIdade = idade.includes("sim")
    booleanEstudo = estudo.includes("sim")
    booleanDisponilidade = disponibilidade.includes("sim")

    legivel = booleanIdade && booleanEstudo && booleanDisponilidade

    console.log(legivel)
}
