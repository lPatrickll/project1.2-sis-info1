function mostrarHistoria(id) {
            var historias = document.querySelectorAll('#content > div');
            for (var i = 0; i < historias.length; i++) {
                historias[i].style.display = 'none';
            }
            document.getElementById(id).style.display = 'block';
        }

        // Agregar eventos a los enlaces
document.querySelector('a[href="#ariel"]').addEventListener('click', function() {
    mostrarHistoria('ariel');
});
document.querySelector('a[href="#felipe"]').addEventListener('click', function() {
    mostrarHistoria('felipe');
});