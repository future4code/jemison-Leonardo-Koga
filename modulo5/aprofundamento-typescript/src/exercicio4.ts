// Exercício 4

//a)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b)

// No terminal daria o comando tsc

//c)

// Ele iria criar um arquivo .js na pasta build. E na arquivo package.json eu teria que ter o seguinte script: "tsc && node ./build/exercicio3.js"


//d)

//Fiz um teste com os exercícios 1,2,3,4 e dei o comando tsc no terminal, e foram criados os 4 arquivos javascript de uma só vez na pasta build.

