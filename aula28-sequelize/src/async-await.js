// para que serve o axios ? serve para disparar as requisicoes HTTP
// seja por metodo POST, GET, PUT, DELETE
const axios = require('axios');

// forma utilizando promise
// const buscarInformacoesDeUsuarioNoGithub = (username) => {
//   axios.get('https://api.github.com/users/' + username)
//   .then(function (resposta) {
//     let { data } = resposta;
//     console.log(data);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   })
// }

// forma utilizando async/await com try/catch
const buscarInformacoesDeUsuarioNoGithub = async (username) => {
  try {
    let { data } = await axios.get('https://api.github.com/usersds/' + username)
    console.log(data)
  } catch (erro) {
    console.log(erro)
  }
}

// const buscarInformacoesDeUsuarioNoGithub = async (username) => {
//   let retorno = await axios.get('https://api.github.com/userss/' + username)
//   if (retorno.status == 200) {
//     console.log(retorno.data)
//   } else {
//     console.log(retorno)
//   }
// }

buscarInformacoesDeUsuarioNoGithub('vtorres96')