let cadena = document.getElementById("cadena");
let clearButton = document.getElementById("clear");

let imprimir = (mensaje) => {
    let salida = document.getElementById("salida");
    salida.innerHTML = "<b>" + mensaje + "</b>";
}

cadena.addEventListener("keyup", e => {
    e.preventDefault();
    imprimir(cadena.value.length);
}, false);

clearButton.addEventListener("click", () => {
    cadena.value = ""; // Borra el texto del cuadro de texto
    imprimir(cadena.value.length); // Actualiza el contador de caracteres (debería mostrar 0)
});
