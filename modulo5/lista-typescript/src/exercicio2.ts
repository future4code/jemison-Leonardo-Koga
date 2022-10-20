const QuemEuSou = (QuemSouEu: any): void => {
    let OqueEh: any = typeof QuemSouEu 
    console.log(`Eu sou a variável ${OqueEh}`);
}

console.log(QuemEuSou("Labenu"));
