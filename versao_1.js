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

    console.log("Bem vindo(a) ao jogo de BlackJack") 

     const carta = comprarCarta()
      
      if (confirm("Quer iniciar uma nova rodada?")){
         let cartaUsuario = comprarCarta()
          let cartaUsuario2 = comprarCarta()
           let valorCartaUsuario = cartaUsuario.valor + cartaUsuario2.valor
             console.log (`Usuário - ${cartaUsuario.texto} ${cartaUsuario2.texto} - ${valorCartaUsuario} `)
              let computador = comprarCarta()
               let computador2 = comprarCarta ()
                let valorCartaComputador = computador.valor + computador2.valor
                 console.log (`Computador - ${computador.texto} ${computador2.texto} - ${valorCartaComputador}`)
                  if ((valorCartaUsuario <= 21) && (valorCartaUsuario > valorCartaComputador)) {
                   console.log('O usuário ganhou!')
                   } else if ((valorCartaUsuario === valorCartaComputador)){
                      console.log ('Empate!')
                       } else {
                       console.log('o computador ganhou D:');
                   } 



      } 
 