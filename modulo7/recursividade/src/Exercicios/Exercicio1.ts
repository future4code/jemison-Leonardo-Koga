// a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente

const printNumbersGrowing= (n: number) => {
    if (n >= 0) {
        printNumbersGrowing(n - 1);
        console.log(n);
    }
  };

// b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente

const printNumbersDescending = (n: number) => {
    if (n >= 0) {
        printNumbersDescending(n - 1);
        console.log(n);
    }
  };

  console.log(printNumbersGrowing(7));
  console.log(printNumbersDescending(10));
  
  