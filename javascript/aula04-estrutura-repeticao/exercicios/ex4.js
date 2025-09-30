//Neste exercício, você precisa criar um programa que calcula o fatorial de um número. O fatorial de um número é o produto de todos os números inteiros positivos de 1 até o número. Por exemplo, o fatorial de 5 (representado por 5!) é 1 * 2 * 3 * 4 * 5 = 120. ​
const fatorial = (n) => {return (n == 1 ? 1 : n * fatorial(n-1) ) }

let num = Number.parseInt(window.prompt("Digite um número: ") )
window.alert(`${num}! = ${fatorial(num)}`)