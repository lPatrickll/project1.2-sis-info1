function agregarFila() {
    var nombre = document.getElementById("nombre").value;
    var artista = document.getElementById("artista").value;
    var genero = document.getElementById("genero").value;

    var tabla = document.getElementById("tabla");
    var fila = tabla.insertRow();

    var celdaNombre = fila.insertCell(0);
    var celdaArtista = fila.insertCell(1);
    var celdaGenero = fila.insertCell(2);

    celdaNombre.innerHTML = nombre;
    celdaArtista.innerHTML = artista;
    celdaGenero.innerHTML = genero;
}

function mostrarFormulario() {
    var formularioContainer = document.getElementById('formularioContainer');
    formularioContainer.style.display = 'block';
}