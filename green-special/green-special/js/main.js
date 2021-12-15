// Aula 1
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