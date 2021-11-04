// se for full stack teremos um retorno de sucesso 
// caso nao seja full stack teremos um retorno de erro 
const adivinhandoMelhorCurso = (curso) => {
  return new Promise((resolve, reject) => {
    if (curso == "Full Stack") {
      resolve({
        success: true,
        message: 'Acertou, na mosca! Full Stack é o melhor curso',
        status: 200,
        data: [
          {
            idcliente: 1,
            nome: 'Nome 1',
          },
          {
            idcliente: 2,
            nome: 'Nome 2',
          }
        ]
      });
    } else {
      reject({
        success: false,
        message: 'Que pena! Tente outra vez, até advinhar o melhor curso',
        status: 400,
        data: []
      });
    }
  });
}

// Como obter a propriedade data
adivinhandoMelhorCurso('Full Stack')
.then(resposta => {
  if(resposta.status == 200) {
    // o foreach não lida muito bem com execução de função assíncrona,
    // mas, em contrapartida, temos outros métodos que lidam muito bem com 
    // essa parte relacionada a assíncronismo, podemos pensar em: map, filter, reduce
    resposta.data.map(item => {
      console.log(item.idcliente)
      console.log(item.nome)
    })
  }
})
.catch(erro => {
  return erro;
})