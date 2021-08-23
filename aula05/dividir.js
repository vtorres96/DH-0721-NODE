/*
/ criando funcao dividir que recebe dois numeros parametros 
/ de modo que o primeiro parametro sera dividido pelo segundo parametro
*/
function dividir(numero1, numero2) {
  // verificando se algum dos dois parametros informados e 0 para 
  // retornar a mensagem "Não se pode dividir por zero".
  if (numero1 == 0 || numero2 == 0) {
    return "Não se pode dividir por zero"
  }

  return (numero1 / numero2)
}

module.exports = dividir