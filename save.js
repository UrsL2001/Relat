// recupera o valor armazenado do textarea
const savedValue = localStorage.getItem('textareaValue');

// obtém a referência para o textarea
const textarea = document.querySelector('#a1');

// define um ouvinte de evento que atualiza o valor armazenado sempre que houver uma alteração no textarea
textarea.addEventListener('input', () => {
  localStorage.setItem('textareaValue', textarea.value);
});

// define o valor do textarea como o valor armazenado
if (savedValue) {
  textarea.value = savedValue;
}
