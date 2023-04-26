// Escreva uma função recursiva que consiga imprimir todos os elementos de um array

export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
  };
  
  const array = [1, 2, 3, 4];
  printArray(array);