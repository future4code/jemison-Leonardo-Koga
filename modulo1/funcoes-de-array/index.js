//Exercícios de interpretação de código

//1.
//a)
//{ nome: "Amanda Rangel", apelido: "Mandi" },
//{ nome: "Laís Petra", apelido: "Laura" },
//{ nome: "Letícia Chijo", apelido: "Chijo" }

//2.
//a)
//["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

//3.
//a)
//[{nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"}]

//------------------------------------------------------------------------------------------------------
//Exercícios de escrita de código

//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //a)
 /* const nomePets = pets.map((pet) => {
     return pet.nome
 })
 console.log(nomePets) */

 //b)
 /* const apenasSalsicha = pets.filter((pet) => {
     return pet.raca === "Salsicha"
 })
 console.log(apenasSalsicha) */

 //c)
 /* const apenasPoodles = pets.filter((pet) => {
     return pet.raca === "Poodle"
 })
 console.log(apenasPoodles)

 const nomePoodles = apenasPoodles.map((nomeCachorro) => {
     return nomeCachorro.nome
 })
 console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodles[0]}!`)
 console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodles[1]}!`) */

 //2.
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a)
 /* const nomeItem = produtos.map((produto) => {
     return produto.nome
 })
 console.log(nomeItem) */

 //b)
 
 /* const nomePreco = produtos.map((produto, indice, array) => {
    for(let i = 0; i < produtos.length; i++){
        delete produto.categoria
        produto.preco -= (produto.preco * 0.05).toFixed(2)
        return produto
    } 
})
console.log(nomePreco) */

 //c)
 /* const objetosBebidas = produtos.filter((produto) => {
     return produto.categoria === "Bebidas"
 })
 console.log(objetosBebidas) */

 //d) 
/* const produtosYpe = produtos.filter( produto => produto.nome.includes("Ypê"))
console.log(produtosYpe) */

 //e) 
 /* const produtosYpe = produtos.filter( produto => produto.nome.includes("Ypê"))

 const nomeYpe = produtosYpe.map((nome) => {
     return nome.nome
 })

 const precoYpe = produtosYpe.map((preco) =>{
     return preco.preco
 })
console.log(`Compre ${nomeYpe[0]} por R$ ${precoYpe[0]}`)
console.log(`Compre ${nomeYpe[1]} por R$ ${precoYpe[1]}`) */

//----------------------------------------------------------------------------------------------------------
//Desafios
//1.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
//a)

 /* const nomePokemons = pokemons.map((pokemon) => {
     return pokemon.nome
 })
 const nomeEmOrdem = nomePokemons.sort()
 console.log(nomeEmOrdem) */

 //b) 
/* const tiposUnicosPokemons = [...new Set(pokemons.map(item => item.tipo))]

console.log(tiposUnicosPokemons) */
