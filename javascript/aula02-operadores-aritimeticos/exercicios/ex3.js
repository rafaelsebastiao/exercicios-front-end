//Crie um programa que pergunte a largura e altura de um parede. Sabendo que 1 litro de tinta pinta 2 metros quadrados, calcule e exiba quantos litros de tinta serão necessários para pintar a parede.

let largura = Number(prompt("Digite a largura da parede: "))
let altura = Number(prompt("Digite a altura da parede: "))

quantLitros = largura * altura / 2

alert(`Para pintar a parede, que possui uma área de ${largura*altura}m², serão necessários ${quantLitros}L de tinta!`)