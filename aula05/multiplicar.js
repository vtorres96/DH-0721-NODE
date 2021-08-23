/*
/ criando funcao multiplicar que recebe dois numeros parametros 
/ de modo que o primeiro parametro sera multiplicado pelo segundo parametro
*/
function multiplicar(numero1, numero2) {
  // verificando se algum dos dois parametros informados e 0 para retornar 0
  if (numero1 == 0 || numero2 == 0) {
    return 0
  }

  return (numero1 * numero2)
}

module.exports = multiplicar
