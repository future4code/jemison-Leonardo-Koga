/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   // sortear 2 cartas para cada jogado
let usuario = []
let computador = []

if(confirm("Quer iniciar uma nova rodada?")){
      
   let cartaInicial = true
      while(cartaInicial){
         usuario.push(comprarCarta())
         usuario.push(comprarCarta())
         computador.push(comprarCarta())
         computador.push(comprarCarta())
         
         
         if((usuario[0].valor === 11 && usuario[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor === 11)){
            usuario.push(comprarCarta())
            usuario.push(comprarCarta())
            computador.push(comprarCarta())
            computador.push(comprarCarta())
         } else{
            cartaInicial = false
         }
      }
   } else{
      alert("O Jogo acabou!")
   }

   // mostrar carta e perguntar se o usuário quer comprar mais
let comprando = true
   
while(comprando){
   let textos = ""
   let pontos = 0
   for(let carta of usuario){
      textos += carta.texto
      pontos += carta.valor
   }
   if(pontos > 21){
      comprando = false
   } else{
      let confirmMaisCartas = confirm(`Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}\n Deseja comprar mais uma carta?`)
   
      if(confirmMaisCartas){
         usuario.push(comprarCarta())
      } else{
      comprando = false
      }
   }
}
   // Calculo dos pontos dos jogadores
   let pontosUsuario = 0
   let pontosComputador = 0
   let naipeUsuario = ""
   let naipeComputador = ""

   for(let carta of usuario){
      pontosUsuario += carta.valor
      naipeUsuario += carta.texto
   }
   for(let carta of computador){
      pontosComputador += carta.valor
      naipeComputador += carta.texto
   }

   // Compra carta computador
   if(pontosComputador <= 21){
      computador.push(comprarCarta)
      
   } else{
      comprarCarta = false
   }
   

   // comparar quem ganhou
   let resultado = ""
   if(pontosUsuario > pontosComputador && pontosUsuario <= 21){
      resultado = "O usuário ganhou!"
   } else if(pontosComputador > pontosUsuario && pontosComputador <= 21){
      resultado = "O computador ganhou!"
   } else if(pontosComputador > 21 && pontosUsuario <= 21){
      resultado = "O usuário ganhou!"
   } else if(pontosUsuario > 21 && pontosComputador <= 21){
      resultado = "O computador ganhou!"
   } else{
      resultado = "Empate!"
   }

   // Imprimir quem ganhou
   alert(`Usuario - Cartas: ${naipeUsuario} - Pontuação ${pontosUsuario}\n Computador - Cartas: ${naipeComputador} - Pontuação: ${pontosComputador}\n ${resultado}`) 