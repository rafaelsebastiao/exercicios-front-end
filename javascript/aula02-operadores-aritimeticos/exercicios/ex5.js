//Solicite 2 notas, e veja se o 1 é múltiplo do segundo. (ex. 9 é múltiplo de 3)​

n1 = Number(window.prompt("Digite o primeiro número: ") )
n2 = Number(window.prompt("Digite o segundo número: ") )

window.alert(n1 % n2 == 0 ? `${n1} é múltiplo de ${n2}` : `${n1} não é múltiplo de ${n2}`)