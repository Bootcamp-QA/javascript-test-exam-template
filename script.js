let respuestasCorrectas = ['A','B','C','A'];

function imprimir(mensaje, id) {
    document.getElementById(id).innerText = mensaje;
}

function verMensajeBienvenida() {
    let nombre = document.getElementById("welcomename").value;
    let mensaje = "Welcome " + nombre;
    imprimir(mensaje,"welcomemessage");
    
}
function corregirTodas(numPregunta,respuestaSeleccionada) {
    let respuestaCorrecta = respuestasCorrectas[numPregunta-1];
    let mensaje = "";
    let puntos = 0;
    if(respuestaSeleccionada === respuestaCorrecta) {
        puntos = 2;
        mensaje = "Correct, " + puntos + " points.";
    }
    else if (respuestaSeleccionada === "") {
        puntos = 0;
        mensaje = "Incorrect, " + puntos + " points.";
    }
    else {
        puntos = -1;
        mensaje = "Incorrect, " + puntos + " points.";
    }

    imprimir(mensaje,"messagequestion"+numPregunta);
}

function corregir(numPregunta) {
    let respuestaSeleccionada = document.getElementById("question"+numPregunta).value;
   
    corregirTodas(numPregunta,respuestaSeleccionada);
}

function corregir2(numPregunta) {
    let respuestaSeleccionada = document.getElementById("question"+numPregunta).checked;
    corregirTodas(numPregunta,respuestaSeleccionada);
}