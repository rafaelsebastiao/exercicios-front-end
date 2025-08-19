//Peça ao usuario para inserir dois numeros. Calcule e exiba o resultado das quatro operações aritiméticas básicas(soma, subtração, multiplicação e divisão) entre esses dois números

let num1 = Number(window.prompt("Digite o primeiro número: "))
let num2 = Number(window.prompt("Digite o segundo número: "))

soma = num1 + num2
subtracao = num1 - num2
multiplicacao = num1 * num2
divisao = num1 / num2


alert(`${num1} + ${num2} = ${soma}\n${num1} - ${num2} =${subtracao}\n${num1} * ${num2} = ${multiplicacao}\n${num1} / ${num2} =${divisao}\n`)