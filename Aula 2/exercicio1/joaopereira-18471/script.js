function lerInput() {
    var texto = document.getElementById("numero").value;
    if(!texto.length) alert("Sem conteudo no input.");
    document.getElementById("texto").innerText = texto
}