const path = require('path');
const fs = require('fs');

const armazenaRegistrosNoJson = (array, arquivo) => {
  /* transformando o array contatos em uma string 
  para sobrescrever o conteudo do arquivo */
  let conteudoString = JSON.stringify(array);

  /* obtendo o caminho ate o arquivo
  para nao sobrescrever arquivos incorretos */
  let caminhoArquivo = path.join('data', arquivo);

  /* sobrescrever o conteudo do arquivo */
  fs.writeFileSync(caminhoArquivo, 'module.exports = ');
  fs.appendFileSync(caminhoArquivo, conteudoString);
}

module.exports = armazenaRegistrosNoJson