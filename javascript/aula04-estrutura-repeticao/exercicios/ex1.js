//Neste exercício, você vai simular um jogo onde o usuário "pensa" em um número de 1 a 100 e o programa deve adivinhar o número, dando um número exato de chutes possíveis.​

let numSorteado = Number.parseInt(Math.random() * 100 ) + 1

let numTentado=0, tentativas=0

while (numSorteado != numTentado){
    numTentado = window.prompt("Digite um número de 1 a 100: ")
    tentativas += 1

    if (numSorteado > numTentado ){
        window.alert("O número sorteado é maior!")
    }else if(numSorteado < numTentado){
        window.alert("O número sorteado é menor!")
    }
}


window.alert(`Parabéns! Você acertou o número em um total de ${tentativas} tentativas!`)