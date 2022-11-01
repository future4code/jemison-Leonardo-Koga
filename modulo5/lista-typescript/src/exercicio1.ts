const eu = (nome: string, dataNascimento: string): string => {
    let splitDataNascimento: string [] = dataNascimento.split('/')
    return `Olá me chamo ${nome} nasci no dia ${splitDataNascimento[0]} do mês de ${splitDataNascimento[1]} do ano de ${splitDataNascimento[2]}`
}

console.log(eu("leo", "07/12/1977"));
 