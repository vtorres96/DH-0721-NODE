const { differenceInDays, differenceInMonths, addDays } = require('date-fns')

// Resolver as questões abaixo com o date-fns
// 1) Obter diferença de dias entre 15/09/2010 e 10/06/2020
let dataIniEx1 = new Date(2010, 08, 15)
let dataFimEx1 = new Date(2020, 05, 10)
let diasDeDiferenca = differenceInDays(dataFimEx1, dataIniEx1)
console.log('A diferença de dias entre as datas 15/09/2010 e 10/06/2020 é: ' + diasDeDiferenca +  " dias.")

// 2) Obter diferença de meses entre 15/09/2011 e 28/06/2021
let dataIniEx2 = new Date(2011, 08, 15)
let dataFimEx2 = new Date(2021, 05, 28)
let mesesDeDiferenca = differenceInMonths(dataFimEx2, dataIniEx2)
console.log('A diferença de meses entre as datas 15/09/2011 e 28/06/2021 é: ' + mesesDeDiferenca  + " meses.")

// 3) Adicionar 32 dias na data 20/03/2021
let diasAdicionados = addDays(new Date(2021, 02, 20), 32).toLocaleDateString()
console.log('A data após adicionarmos 32 dias é: ' + diasAdicionados)