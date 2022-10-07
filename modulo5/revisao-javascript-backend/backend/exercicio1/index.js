function converter(Celsius, temperatura) {
  if(temperatura === "F") {
    farenheit = Celsius * 9 / 5 + 32
    return(`${Celsius}° Celsius é = ${farenheit}° Farenheit.`)
  } if ( temperatura === "K") {
    kelvin = Celsius + 273
    return(`${Celsius}° Celsius é = ${kelvin}° Kelvin.`)
  } if ( temperatura !== "F" && temperatura !== "K") {
    return( "Erro, valor errado")
  }
}

console.log(converter(25, "F"))
console.log(converter(30, "K"))
console.log(converter(13, "J"))


