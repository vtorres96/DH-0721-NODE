// Aula 1 - Introducao
// verificar se o arquivo main.js esta importado no arquivo index.html
// console.log('Hello World')

// Criar um prompt, de forma que ao receber o nome do usuario,
// exiba no console a mensagem "Olá, nome-do-usuario"
// let nome = prompt('Digite o seu nome no campo abaixo')
// console.log('Olá, ' + nome)

// Exibir um alerta que produtos do site são 
// proibidos para menores de 18 anos
// (ze delivery, sites de bebida, etc)
// alert('Os produtos estão disponíveis apenas para maiores de 18 anos')

// Efetuar uma pergunta de simples confirmação, por exemplo: sim, ou, não
// let idade = confirm('Você confirma ter ao menos 18 anos ?')

// if (!idade) {
//   console.log('a pessoa não pode visualizar os produtos')
// }

// Equipe app mobile - hibrido , nativo (android e outra equipe IOS)
// Equipe web - frontend / backend -> full stack 
//   frontend - react, angular, vue (JS)
//   backend - nodejs (JS), laravel (PHP), .Net/.Net Core (C#), Spring (Java)

// selecionando elementos com querySelector e querySelectorAll
// querySelector/querySelectorAll nos permite selecionar elementos por:
// tag, classe, id, portanto, e considerado mais versatil que os demais metodos de seleção
// document.querySelector - seleciona o primeiro elemento encontrado com a classe .navbar
let navbar = document.querySelector('.navbar')
// console.log(navbar)

// document.querySelectorAll - selecionar todos os elementos encontrados com a classe .navbar
let navbars = document.querySelectorAll('.navbar')
// console.log(navbars)

let sectionNavbar = navbars[1]
// console.log(sectionNavbar)

// selecionando elementos pela tag - getElementByTagName
// necessita receber como parâmetro uma tag e não podemos utilizar, classes ou ids.
// Lembrando que caso exista mais de um elemento, agrupa todos retornados dentro de uma lista,
// ou, caso não encontre elementos, retorna a lista vazia
let divs = document.getElementsByTagName('div')
// console.log(divs)

// selecionando elementos pelo ID - getElementById
// necessita receber como parâmetro um ID e não podemos utilizar classes.
// retorna único elemento encontrado (devido ID ser unico para cada elemento, portanto,
// retornará sempre um elemento apenas), ou, caso não encontre, retorna null.
let mainNav = document.getElementById('mainNav')
// console.log(mainNav)

// selecionando elementos pela classe - getElementsByClassName
// necessita receber como parâmetro um classe existente em um elemento,
// e não podemos utilizar IDs.
// Retorna o elemento com a classe encontrada, caso exista mais elementos com a classe
// retorna uma lista, ou, caso não encontre nenhum elemento, retorna a lista vazia
let navbarGetElementByClassName = document.getElementsByClassName('navbar')
// console.log(navbarGetElementByClassName)

// Aula 2 - Eventos
// 1 - Procurar no index.html tag img que refere-se ao logo do nosso site
// e adicionaremos uma classe "logo"
// 2 - capturar o elemento img atraves da classe logo e armazenar em uma
// variavel para trabalharmos
let logo = document.querySelector('img.logo')

// 3 - Utilizando addEventListener combinado com mouseover e mouseout 
// aplicar uma rotação no logo
// a) quando o usuário passar o mouse por cima do logo, deveremos rotacionar o ângulo
// da imagem em 180º
// logo.addEventListener('mouseover', () => setTimeout(() => {
//   logo.style.transform = 'rotate(180deg)'
// }, 500))

// b) quando o usuário remover o mouse de cima do logo, deveremos
// fazer a rotação para 0º, aplicando sensação que o logo está girando
// logo.addEventListener('mouseout', () => setTimeout(() => {
//   logo.style.transform = 'rotate(0)'
// }, 1000))

// outra opcao de resolver o item 3 - onmouseover e onmouseout
logo.onmouseover = () => setTimeout(() => {
  logo.style.transform = 'rotate(180deg)'
}, 500);

logo.onmouseout = () => setTimeout(() => {
  logo.style.transform = 'rotate(0)'
}, 1000);

// 4 - Fazer o header ficar transparente no topo da página e remover a transparência quando 
// aplicarmos scroll par baixo, ou seja, descer a página
// a) Selecionar o elemento header para altera o estilo dele de acordo com nossa necessidade
let header = document.querySelector('nav#mainNav')

// b) Aplicar tranparencia enquanto o usuário não tiver scrollado/descido a página
// c) Aplicar novamente a cor default quando o usuário tiver scrollado/descido a página
// OBS: aplicar background-color: rgba(255, 255, 255, 0.7) para deixar menu transparente
// OBS: aplicar background-color: rgba(255, 255, 255, 1) para deixar menu na cor default
// window.onscroll = () => {
//   // verificando se o topo da janela esta alinhado com o topo da pagina
//   if (window.scrollY == 0) {
//     header.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
//   } else {
//     header.style.backgroundColor = 'rgba(255, 255, 255, 1)'
//   }
// }

// outra opcao - inves de aplicar style iremos adicionar esses backgrounds em classes,
// por exemplo, aplica-transparencia, remove-transparencia, e a partir dessas classes,
// iremos fazer uma forma de adicionar/remover a classe de acordo com a necessidade
window.onscroll = () => {
  // verificando se o topo da janela esta alinhado com o topo da pagina
  if (window.scrollY == 0) {
    header.classList.add('aplica-transparencia')
    header.classList.remove('remove-transparencia')
  } else {
    header.classList.add('remove-transparencia')
    header.classList.remove('aplica-transparencia')
  }
}

// 5 - FAZER AS IMAGENS DO CARD AUMENTAREM DE TAMANHO AO PASSAR O MOUSE
// a) buscar todas as imagens
let imagensDosCards = document.querySelectorAll('div.ser-icon img.img-fluid')
// console.log(imagensDosCards)

// b) criar um loop para adicionar o evento em cada imagem do array
imagensDosCards.forEach(imagem => {
  imagem.onmouseover = () => {
    // adicionando a classe "grow" na imagem que esta com o mouse posicionado em cima
    imagem.classList.toggle('grow')
  }

  imagem.onmouseout = () => {
    // removendo a classe "grow" da imagem quuando o mouse nao estiver posicionado em cima
    imagem.classList.toggle('grow')
  }
})