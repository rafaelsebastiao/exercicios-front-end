/*
Peça ao usuário para inserir a temperatura atual em graus Celsius. O programa deve exibir:​

"Frio" se a temperatura for menor que 18°C.​

"Agradável" se estiver entre 18°C e 25°C.​

"Quente" se for maior que 25°C.*/

let tempCelsius = Number(window.prompt("Digite a temperatura em graus celcius: "))

window.alert(tempCelsius < 18 ? "Frio" : tempCelsius >= 18 && tempCelsius <= 25? "Agradável" : "Quente")