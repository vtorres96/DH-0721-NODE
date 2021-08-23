// Parte I - Questões 1, 2 e 3
let catalogo = require('./database/catalogo.json')

// Parte II - Questão 1
// garantir que sera passado um objeto com todas propriedades necessárias
// não há necessidade de seguir uma ordem espeficica para informar os parametros
// afinal estamos passando um objeto contendo todas propriedades necessárias
// codigo, titulo, duracao, atores, anoDeLancamento, emCartaz
function adicionarFilme(filme){
  catalogo.push(filme)
  return catalogo
}

let filme = {
  codigo: 3,
  titulo: 'Minha mãe é uma peça',
  duracao: 1.20,
  atores: ['Paulo', 'Gustavo'],
  anoDeLancamento: 2018,
  emCartaz: false
}

// console.log(adicionarFilme(filme))

// devemos apenas passar os parametros seguindo a ordem indicada na função
function adicionarFilme2(
  codigo, titulo, duracao, atores, anoDeLancamento, emCartaz
){

  let filme = {
    codigo: codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    anoDeLancamento: anoDeLancamento,
    emCartaz: emCartaz
  }
  catalogo.push(filme)
  return catalogo
}

// console.log(adicionarFilme2(4, 'Os Vingadores', 1.20, ['Robert', 'Downey'], 2021, true))

// Parte II - Questão 2
// iremos percorrer todos os filmes contidos no array catalogo, onde catalogo[i]
// irá se referir ao objeto completo do filme, sendo assim a variável filme, nos
// possibilitará de obter as propriedades contidas no filme, como: codigo, titulo, etc...
function buscarFilme(codigo){
  for (let i = 0; i < catalogo.length; i++) {
    const filme = catalogo[i];
    if(codigo == filme.codigo){
      return filme
    }
  }
}

// console.log(buscarFilme(2))

// Parte II - Questão 3
// iremos percorrer todos os filmes contidos no array catalogo, onde catalogo[i]
// irá se referir ao objeto completo do filme, sendo assim a variável filme, nos
// possibilitará de obter as propriedades contidas no filme, como: codigo, titulo, etc...
// Deste modo assim que a condição if for cumprida significa que encontramos o filme,
// logo, alteraremos a propriedade emCartaz através de filme.emCartaz = true/false
function alterarStatusEmCartaz(lista, codigo){
  for (let i = 0; i < lista.length; i++) {
    const filme = lista[i];
    if(codigo == filme.codigo){
      // conforme estamos utilizando uma propriedade booleana comparada com true
      // podemos simplesmente colocar na condicao filme.emCartaz que teremos o mesmo
      // resultado
      if(filme.emCartaz){
        filme.emCartaz = false
      } else {
        filme.emCartaz = true
      }

      return filme
    }
  }
}

// console.log(alterarStatusEmCartaz(catalogo, 1))

// Exercício listar todos os filmes
// neste exercicio ao percorrer os itens da lista, o foco foi exibir apenas 3 propriedades,
// porém, utilizamos um if ternario para que verifique a condição imposta que analisa se o 
// filme está em cartaz, caso a condição informada seja verdadeira 
// teremos como retorno Sim, caso contrário, teremos Não como retorno
// E no caso dos atores, utilizando join, unimos os itens do array em uma única string,
// com a possibilidade de adicionar um caracter entre cada elemento do Array, desta forma,
// teremos uma vírgula adicionada após cada elemento, resultando no caso abaixo:
// se tiver um array ["Bruno", "Marrone"] com join teremos "Bruno, Marrone" 
function listarTodosOsFilmes(lista) {
  let informacoes = 'Confira abaixo nosso catálogo de filmes'
  for (let i = 0; i < lista.length; i++) {
    const item = lista[i];
    informacoes += `
      --------------------
      Título: ${item.titulo}
      Está em cartaz: ${item.emCartaz ? 'Sim' : 'Não'}
      Atores: ${item.atores.join(", ")}
      --------------------
    `
  }

  return informacoes
}

// console.log(listarTodosOsFilmes(catalogo))

// Exercício listar filmes em cartaz
function listarFilmesEmCartaz(lista) {
  let informacoes = 'Confira abaixo nossos filmes que estão em cartaz neste mês'
  for (let i = 0; i < lista.length; i++) {
    const item = lista[i];
    if(item.emCartaz){
      informacoes += `
        --------------------
        Título: ${item.titulo}
        Atores: ${item.atores.join(", ")}
        --------------------
      `
    }
  }
  return informacoes
}

// console.log(listarFilmesEmCartaz(catalogo))

// Exercício alterar status em cartaz com if ternário
function alterarStatusEmCartazTernario(lista, codigo){
  for (let i = 0; i < lista.length; i++) {
    const filme = lista[i];
    if(codigo == filme.codigo){
      // conforme estamos utilizando uma propriedade booleana comparada com true
      // podemos simplesmente colocar na condicao filme.emCartaz que teremos o mesmo
      // resultado
      filme.emCartaz = filme.emCartaz ? false : true
      
      return filme
    }
  }
}

// console.log(alterarStatusEmCartazTernario(catalogo, 2))

function listarFilmesDeLongaDuracao(lista){
  let informacoes = 'Confira abaixo nossos filmes com longa duração'
  lista.forEach(item => {
    if(item.duracao >= 2){
      informacoes += `
        --------------------
        Título: ${item.titulo}
        Está em cartaz: ${item.emCartaz ? 'Sim' : 'Não'}
        Atores: ${item.atores.join(", ")}
        --------------------
      `
    }
  })

  return informacoes
}

// console.log(listarFilmesDeLongaDuracao(catalogo))

// Exercício listar todos os filmes utilizando foreach
function listarTodosOsFilmesForeach(lista) {
  let informacoes = 'Confira abaixo nosso catálogo de filmes'
  lista.forEach(item => {
    informacoes += `
      --------------------
      Título: ${item.titulo}
      Está em cartaz: ${item.emCartaz ? 'Sim' : 'Não'}
      Atores: ${item.atores.join(", ")}
      --------------------
    `
  })
 
  return informacoes
}

console.log(listarTodosOsFilmesForeach(catalogo))