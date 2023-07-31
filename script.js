let cadena = document.getElementById("cadena");
let clearButton = document.getElementById("clear");

let imprimirCaracteres = () => {
    let salida = document.getElementById("char");
    salida.innerHTML = "<b>" + cadena.value.length + "</b>";
}

let imprimirPalabras = () => {
    let words = cadena.value.trim().split(/\s+/).filter(word => word !== '').length;
    let wordsOutput = document.getElementById("words");
    wordsOutput.innerHTML = "<b>" + words + "</b>";
}

cadena.addEventListener("keyup", e => {
    e.preventDefault();
    imprimirCaracteres();
    imprimirPalabras();
}, false);

clearButton.addEventListener("click", () => {
    cadena.value = ""; // Borra el texto del cuadro de texto
    imprimirCaracteres(); // Actualiza el contador de caracteres (debería mostrar 0)
    imprimirPalabras(); // Actualiza el contador de palabras (debería mostrar 0)
});
