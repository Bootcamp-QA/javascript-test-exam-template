function verMensajeBienvenida() {
    let nombre = document.getElementById("welcomename").value;
    let mensaje = "Welcome " + nombre;

    document.getElementById("welcomemessage").innerText = mensaje;
}