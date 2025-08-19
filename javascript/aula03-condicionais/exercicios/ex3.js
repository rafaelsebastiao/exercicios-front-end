//Peça ao usuário para digitar dois números. O programa deve comparar os números e informar qual deles é maior, ou se são iguais.

let num1 = parseInt(prompt("Digite um número: "))
let num2 = parseInt(prompt("Digite outro número: "))

if (num1 > num2){
    alert(`${num1} é maior que ${num2}!`)
}else if(num1 < num2){
    alert(`${num2} é maior que ${num1}!`)
}else{
    alert(`Os números são iguais!`)
}