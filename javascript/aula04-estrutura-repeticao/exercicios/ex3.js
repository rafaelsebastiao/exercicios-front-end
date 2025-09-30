/*Neste exercício, você vai simular um jogo de "Pedra, papel e tesoura" contra o computador. Para simplificar, vamos supor que a escolha do usuário é sempre "pedra". ​*/

let opcoesJogo = ["pedra", "papel", "tesoura"]
let opcaoUsuario, indiceSorteado, opcaoSorteada, msgResultJogo, resp


do {
    opcaoUsuario = window.prompt("Pedra, papel ou tesoura? ")
    opcaoUsuario = opcaoUsuario.toLowerCase()

    indiceSorteado = Number.parseInt(Math.random() * 3)
    opcaoSorteada = opcoesJogo[indiceSorteado]

    msgResultJogo = `${opcaoUsuario} X ${opcaoSorteada}\n`

    if (opcaoUsuario == "pedra" && opcaoSorteada == "papel") {
        msgResultJogo += `${opcaoSorteada} ganha de ${opcaoUsuario}!\nVocê perdeu!`

    } else if (opcaoUsuario == "pedra" && opcaoSorteada == "tesoura") {

        msgResultJogo += `${opcaoUsuario} ganha de ${opcaoSorteada}!\nVocê ganhou!`

    } else if (opcaoUsuario == "papel" && opcaoSorteada == "tesoura") {

        msgResultJogo += `${opcaoSorteada} ganha de ${opcaoUsuario}!\nVocê perdeu!`

    } else if (opcaoUsuario == "papel" && opcaoSorteada == "pedra") {

        msgResultJogo += `${opcaoUsuario} ganha de ${opcaoSorteada}!\nVocê ganhou!`


    } else if (opcaoUsuario == "tesoura" && opcaoSorteada == "pedra") {

        msgResultJogo += `${opcaoSorteada} ganha de ${opcaoUsuario}!\nVocê perdeu!`

    } else if (opcaoUsuario == "tesoura" && opcaoSorteada == "papel") {

        msgResultJogo += `${opcaoUsuario} ganha de ${opcaoSorteada}!\nVocê ganhou!`

    } else {

        msgResultJogo += "Houve empate!"
    }

    window.alert(msgResultJogo)

    resp = window.confirm("Deseja continuar?")

} while (resp)

