const palavra = (texto: string): number => {
    let anagramas: number = 1
    if(texto.length === 0 || texto.length === 1) {
        anagramas = 1
        return anagramas
    } else {
        for (let i = 0; i < texto.length; i++) {
            anagramas = anagramas * ( texto.length - i)
        }
        return anagramas
    }
}

const anagramas = palavra("mesa")

console.log(anagramas);
