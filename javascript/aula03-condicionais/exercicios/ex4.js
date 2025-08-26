// Defina uma senha em uma variável. Peça ao usuário para digitar uma senha e verifique se a senha digitada é igual à senha armazenada. Exiba "Acesso permitido" ou "Acesso negado". (Use o operador de comparação estrita ===).​

const SENHA = "12345"
let senha = window.prompt("Informe a senha: ")
window.alert(senha === SENHA ? "Acesso permitido!" : "Acesso negado!")