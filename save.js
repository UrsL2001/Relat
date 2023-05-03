<script>
    // Adiciona um event listener no evento "beforeunload" do window
    window.addEventListener("beforeunload", function() {
        // Cria um cookie com o valor da textarea
        document.cookie = "a1=" + encodeURIComponent(document.getElementById("a1").value);
    });

    // Função para recuperar o valor de um cookie
    function getCookie(name) {
        var cookieArr = document.cookie.split("; ");
        for (var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            if (name == cookiePair[0]) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }

    // Recupera o valor do cookie e define o valor da textarea
    var a1Value = getCookie("a1");
    if (a1Value) {
        document.getElementById("a1").value = a1Value;
    }
</script>
