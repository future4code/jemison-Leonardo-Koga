console.log("exercicio 4");

const primeiraLista = [
    {
        nome: "Banana"
    },
    {
        nome: "Laranja"
    }
]

const segundaLista = [
    {
        nome: "Laranja"
    },
    {
        nome: "Cebola"
    }
]

const gerarLista = []

const gerarItensUnicos = (objetoUm, objetoDois) => {
    for(i = 0; i < objetoUm.lenght; i++) {
        if (gerarLista.indexOf(objetoUm[i] === -1)){
            gerarLista.push(objetoUm[i])
        }
    }
    for(i = 0; i < objetoDois.lenght; i++) {
        if (gerarLista.indexOf(objetoDois[i]) === -1) {
            gerarLista.push(objetoDois[i])
        }
    }
}

gerarItensUnicos(primeiraLista, segundaLista)
console.log(gerarLista)
