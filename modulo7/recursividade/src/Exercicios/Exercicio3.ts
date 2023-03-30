// Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).

export const calculateSumTo = (n: number): number => {
    var sum = 0
      for (var i = 0 ; i <= n ; i++) {
          sum += i;
    }
      return sum;
  };
      
  console.log(calculateSumTo(7));
  console.log(calculateSumTo(10));
  console.log(calculateSumTo(100));