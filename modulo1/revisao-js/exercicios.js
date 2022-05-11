// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}
retornaTamanhoArray()
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
retornaArrayInvertido()
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const ordenado = array.sort((a, b) => a - b)
    return ordenado
}
retornaArrayOrdenado()
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter(pares => (pares % 2) === 0)
    return numerosPares
}

retornaNumerosPares()
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter(pares => (pares % 2) === 0)
    const elevadoADois = numerosPares.map((elevado)=>{
       return elevado *= elevado
    })
    return elevadoADois
}
retornaNumerosParesElevadosADois()
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = Math.max(...array)
  return maior
}
retornaMaiorNumero()
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1, num2)
    let menorNumero = Math.min(num1, num2)
    let maiorDivisivelPorMenor = maiorNumero % menorNumero == 0
    let diferenca = Math.abs(num1 - num2)

    return {maiorNumero, maiorDivisivelPorMenor, diferenca}
}
retornaObjetoEntreDoisNumeros(num1, num2)
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numeroPares = []
   for(let i = 0; numeroPares.length < n; i += 2){
           numeroPares.push(i)
   }
   return numeroPares
}
console.log(retornaNPrimeirosPares(n))
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC){
        return "Equilátero"
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"
    }else {
        return "Escaleno"
    }
}
classificaTriangulo()

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let chamada = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
    return chamada    
}
retornaChamadaDeFilme()
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const outraPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
     }
     return outraPessoa
}
retornaPessoaAnonimizada()
// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter(pessoa => pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5)
    return pessoasAutorizadas
}
retornaPessoasAutorizadas()
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter(pessoa => pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura <= 1.5)
  return pessoasNaoAutorizadas
}
retornaPessoasNaoAutorizadas()

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
}
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}