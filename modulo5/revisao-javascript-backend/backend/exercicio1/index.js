function cToF(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C é equivalente a  ${cToFahr}\xB0F.`;
    console.log(message);
}

function fToC(kelvin) 
{
  const fTemp = kelvin;
  const fToKel = fTemp + 273;
  const message = `${fTemp}\xB0C é equivalente a ${fToKel}\xB0C.`;
    console.log(message);
} 
cToF(60);
fToC(45);




