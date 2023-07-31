let cadena = document.getElementById("cadena");

let imprimir = (mensaje) => {
    let salida = document.getElementById("salida");
    salida.innerHTML = "<b>" + mensaje + "</b>";
}

cadena.addEventListener("keyup", e =>{
    if(e){
        e.preventDefault();
        imprimir(document.getElementById('cadena').value.length);
    }
}, false);

