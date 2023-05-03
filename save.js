// Cria uma lista de IDs dos elementos textarea
const ids = [];
for (let i = 1; i <= 10; i++) {
  ids.push(`a${i}`, `b${i}`, `c${i}`);
}

// Recupera os valores armazenados para cada elemento textarea
const savedValues = {};
ids.forEach(id => {
  savedValues[id] = localStorage.getItem(id);
});

// Obtém as referências para cada elemento textarea e define um ouvinte de evento para atualizar o valor armazenado
ids.forEach(id => {
  const textarea = document.querySelector(`#${id}`);
  textarea.addEventListener('input', () => {
    localStorage.setItem(id, textarea.value);
  });

  // Define o valor do elemento textarea como o valor armazenado
  if (savedValues[id]) {
    textarea.value = savedValues[id];
  }
});
