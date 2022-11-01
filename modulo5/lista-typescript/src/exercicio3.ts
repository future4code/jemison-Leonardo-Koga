enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type ficha = {
    nome: string,
    anoDeLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

const filme = (nome: string, anoDeLancamento: number, genero: GENERO, pontuacao?: number) => {
    let info: ficha = {
        nome: nome,
        anoDeLancamento: anoDeLancamento,
        genero: genero,
        pontuacao:pontuacao
    }

    return info
}

console.table(filme("Star Wars", 1977, GENERO.ACAO, 77));
