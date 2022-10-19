// Exercício 2

//a)

// As entradas são os números representado por a, b. E as saídas são maior, menor, media

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b)

// As váriaveis que compõe essa função são: numerosOrdenados, soma, estattisticas.
// A váriavel numerosOrdenados recebe o Type number, pois recebe numeros como parametros
// A váriavel soma recebe o Type Inference, pois ela esta pre definida como o valor zero
// A váriavel estatisticas recebe o Type number, pois vai fazer uma operação matemática

//c)

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: number
}




