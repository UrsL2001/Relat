<script>
    // Define um objeto para armazenar os valores das textareas
    var values = {};

    // Itera sobre todas as textareas
    var textareas = document.querySelectorAll("textarea");
    textareas.forEach(function(textarea) {
        // Adiciona um event listener no evento "blur" da textarea
        textarea.addEventListener("blur", function() {
            // Armazena o valor da textarea no objeto "values"
            values[textarea.id] = this.value;
            // Armazena o objeto "values" no localStorage
            localStorage.setItem("textareaValues", JSON.stringify(values));
        });

        // Recupera os valores do localStorage e define os valores das textareas
        var storedValues = JSON.parse(localStorage.getItem("textareaValues"));
        if (storedValues && storedValues[textarea.id]) {
            textarea.value = storedValues[textarea.id];
            values[textarea.id] = storedValues[textarea.id];
        }
    });
</script>
