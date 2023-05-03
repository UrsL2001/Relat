// envia o valor atualizado do textarea para o servidor
fetch('https://bunkerbd.000webhostapp.com/receber-dados.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ texto: textarea.value })
})
.then(response => {
  // trata a resposta do servidor
  if (response.ok) {
    console.log('Dados armazenados com sucesso no servidor.');
  } else {
    console.error('Erro ao armazenar dados no servidor.');
  }
})
.catch(error => {
  console.error('Erro ao enviar solicitação ao servidor:', error);
});
