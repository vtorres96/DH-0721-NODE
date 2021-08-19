const moment = require('moment')

// Resolver as questões abaixo com o moment
// 1) Obter diferença de dias entre 15/09/2010 e 10/06/2020
let dataIniEx1 = moment("2010-09-15")
let dataFimEx1 = moment("2020-06-10")
let diasDeDiferenca = dataFimEx1.diff(dataIniEx1, 'days')
console.log("A diferença de dias entre 15/09/2010 e 10/06/2020 é: " + diasDeDiferenca + " dias.")

// 2) Obter diferença de meses entre 15/09/2011 e 28/06/2021
let dataIniEx2 = moment("2011-09-15")
let dataFimEx2 = moment("2021-06-28")
let mesesDeDiferenca = dataFimEx2.diff(dataIniEx2, 'months')
console.log("A diferença de meses entre 15/09/2010 e 10/06/2020 é: " + mesesDeDiferenca + " meses.")

// 3) Adicionar 32 dias na data 20/03/2021
let diasAdicionados = moment("2021-03-20").add(32, 'days').toDate().toLocaleDateString()
console.log('A data após adicionarmos 32 dias é: ' + diasAdicionados)