// Exercícios de interpretação de código
// 1.
// a)
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: Globo, horario:  14h}

// 2.
// a)
// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}
// b)
// os três pontos copiam os dados do objeto

// 3.
// a)
// false
// undefined
// b)
// false aconteceu pq a função esta errada, e undefined pq não foi definido altura para pessoa. E o objeto "pessoa" não esta nem dentro da função


// Exercícios de escrita de código
// 1.
// a)
const pessoa = {
    nome: "Leonardo",
    apelidos: ["Leo", "Le", "Leozito"]
}

function objeto(){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)
}
objeto(pessoa)

// b)
const novoApelido = {
    ...pessoa,
    apelidos: ["Leoncio", "Koga", "Leopardo"]
}

function objeto1(){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novoApelido.apelidos[0]}, ${novoApelido.apelidos[1]}, ${novoApelido.apelidos[2]}`)
}
objeto1(novoApelido)

// 2.
// a)
const pessoaUm = {
    nome: "Maria",
    idade: 33,
    profissao: "Professora"
}

const pessoaDois = {
    nome: "João",
    idade: 27,
    profissao: "Desenvolvedor"
}

// b)
function retorno(){
    console.log([`${pessoaUm.nome},${pessoaUm.nome.length}, ${pessoaUm.idade},${pessoaUm.profissao}, ${pessoaUm.profissao.length}`])
    console.log([`${pessoaDois.nome},${pessoaDois.nome.length},${pessoaDois.idade},${pessoaDois.profissao}, ${pessoaDois.profissao.length}`])
}
retorno(pessoaUm, pessoaDois)

// 3.
// a)
const carrinho = []


// b)
const frutasUm = {
    nome: "Mamao",
    disponibilidade: true
}

const frutasDois = {
    nome: "Banana",
    disponibilidade: true
}

const frutasTres = {
    nome: "Uva",
    disponibilidade: true
}

// c)
function receberFrutas(frutasUm){
    carrinho.push(frutasUm)
}
receberFrutas(frutasUm)
receberFrutas(frutasDois)
receberFrutas(frutasTres)

// d)
console.log(carrinho)

// Desafios
// 1.
function imprima(){
    const nome = prompt("Qual seu nome: ")
    const idade = Number(prompt("Qual sua idade: "))
    const profissao = prompt("Qual sua profissão: ")
    console.log({nome, profissao, idade})
}
imprima()

// 2.
const filme = {
    filme1 : {
        anoLancamento: 2022,
        nome: "Batman"
    } ,
    filme2 : {
        anoLancamento: 2022,
        nome: "Animais fantásticos"
    } 
}
    function filmes(){
        const ano = filme.filme1.anoLancamento < filme.filme2.anoLancamento
        console.log(`O primeiro filme foi lançado antes do segundo? ${ano}`)
        const ano1 = filme.filme1.anoLancamento == filme.filme2.anoLancamento
        console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${ano1}`)
    }

    filmes()

// 3.
    function disponivel(){
        frutasTres.disponibilidade = false
        console.log(frutasTres)
    }

    disponivel(frutasTres)
