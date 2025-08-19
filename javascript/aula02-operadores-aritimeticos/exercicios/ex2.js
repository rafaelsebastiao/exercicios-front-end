// Crie um programa que solicite ao usuario as notas de 3 provas. Calcule e exiba a media aritimética dessas notas.

let nota1 = Number(window.prompt('Digite a primeira nota: ') )
let nota2 = Number(window.prompt('Digite a segunda nota: ') )
let nota3 = Number(window.prompt('Digite a terceira nota: ') )

media = (nota1 + nota2  + nota3) / 3
alert(`A média das notas vale: ${media}`)