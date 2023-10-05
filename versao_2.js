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
    function jogarBlackjack() {
      let jogarNovamente = true;
    
        while (jogarNovamente) {
          const cartasUsuario = [comprarCarta(), comprarCarta()];
           const cartasComputador = [comprarCarta(), comprarCarta()];
    
             let valorUsuario = calcularPontuacao(cartasUsuario);
                let valorComputador = calcularPontuacao(cartasComputador);
    
                   let mensagem = confirm(`Bem vindo(a) ao Blackjack.\nQuer iniciar uma nova rodada?`);
    
        while (mensagem && valorUsuario <= 21) {
          const novaCarta = comprarCarta();
             cartasUsuario.push(novaCarta);
                valorUsuario = calcularPontuacao(cartasUsuario);
    
                   let novasCartasUsuario = cartasUsuario.map((carta) => carta.texto);
    
                   mensagem = confirm(`Suas cartas são ${novasCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}\nDeseja comprar mais uma carta?`);
        }
    
        while (valorComputador <= 21) {
          const novaCarta = comprarCarta();
             cartasComputador.push(novaCarta);
                valorComputador = calcularPontuacao(cartasComputador);
        }
    
                  mostrarResultado(cartasUsuario, valorUsuario, cartasComputador, valorComputador);
    
        jogarNovamente = confirm("Deseja jogar novamente?");
      }
    
      alert("O jogo acabou!");
    }
    
    function calcularPontuacao(cartas) {
      return cartas.reduce((pontuacao, carta) => pontuacao + carta.valor, 0);
    }
    
    function mostrarResultado(cartasUsuario, valorUsuario, cartasComputador, valorComputador) {
      let mensagemUsuario = `Usuário - Cartas: ${cartasUsuario.map((carta) => carta.texto).join(", ")} - Pontuação: ${valorUsuario}`;
        let mensagemComputador = `Computador - Cartas: ${cartasComputador.map((carta) => carta.texto).join(", ")} - Pontuação: ${valorComputador}`;
    
      if (valorUsuario <= 21 && (valorUsuario > valorComputador || valorComputador > 21)) {
        alert(`${mensagemUsuario}\n${mensagemComputador}\nO usuário ganhou!`);
      } else if (valorUsuario === valorComputador) {
        alert(`${mensagemUsuario}\n${mensagemComputador}\nEmpatou!`);
      } else {
        alert(`${mensagemUsuario}\n${mensagemComputador}\nO computador ganhou!`);
      }
    }
    
    jogarBlackjack();