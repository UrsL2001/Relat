<?php
// Estabelece a conexão com o banco de dados
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve um envio de formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtém o texto digitado no campo de texto
  $texto_digitado = $_POST["a1"];

  // Prepara a consulta SQL para inserir o texto no banco de dados
  $sql = "INSERT INTO texto (texto_digitado) VALUES ('$texto_digitado')";

  // Executa a consulta SQL
  if ($conn->query($sql) === TRUE) {
    echo "Texto salvo com sucesso!";
  } else {
    echo "Erro ao salvar o texto: " . $conn->error;
  }
}

// Fecha a conexão com o banco de dados
$conn->close();
?>
