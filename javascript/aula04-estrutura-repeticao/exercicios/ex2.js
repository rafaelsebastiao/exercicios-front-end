//Pedir um número ao usuário de 1 a 9, e imprima a tabuada desse valor.​

let numUsuario = window.prompt("Digite um número de 1 a 9: ")

let exibicaoTabuada = ""



for(let i = 1; i <= 10; i++){
    exibicaoTabuada += `${numUsuario} x ${i} = ${numUsuario * i}\n`
}

window.alert(exibicaoTabuada)