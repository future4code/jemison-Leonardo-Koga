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

// Tabuada

const tabuada = []

const gerarTabuada = (valor) => {
    if (11 > valor > 0) {
        for(i = 1; i <= 10; i ++){
            tabuada.push(`${valor} X ${i} = ${valor * i}`)
        }
        console.log(tabuada)
        } else if (valor > 10){
            console.log("Erro. Valor Inválido")
        } else {
            console.log( "Erro. Valor inválido ( deve ser número)")
        }
}

gerarTabuada(3)