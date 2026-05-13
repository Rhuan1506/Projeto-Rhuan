const texto = "Desenvolvedor de Front-End";

let index = 0;

function escreverTexto() {
    if(index < texto.length) {
        document.getElementById("typing"). innerHTML += texto.charAt(index);

        index++;

        setTimeout(escreverTexto, 100);
    }
}

escreverTexto();