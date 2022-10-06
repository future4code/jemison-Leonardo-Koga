const clientes = [
    { id: 1, nome: "Fulano"},
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

clientes[4] = {
    id: 5, nome: "Ciclana"
}

console.log(clientes)

const valor = 5

for(i = 0; i <= 10; i ++){
    console.log (`${valor} X ${i} = ${valor * i}`)
}
