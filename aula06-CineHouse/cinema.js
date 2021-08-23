// Parte I - Questões 1, 2 e 3
let catalogo = [
  {
    codigo: 1,
    titulo: 'Lágrimas do Sol',
    duracao: 1.20,
    atores: ['Bruno', 'João', 'Joana'],
    anoDeLancamento: 2005,
    emCartaz: true
  },
  {
    codigo: 2,
    titulo: 'Homens de Preto',
    duracao: 1.40,
    atores: ['Will', 'Smith', 'Victor'],
    anoDeLancamento: 2008,
    emCartaz: false
  }
]

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
function alterarStatusEmCartaz(codigo){
  for (let i = 0; i < catalogo.length; i++) {
    const filme = catalogo[i];
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

console.log(alterarStatusEmCartaz(2))