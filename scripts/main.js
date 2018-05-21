var escudos = document.querySelector('img');
escudos.onclick = function () {
    var miSrc = escudos.getAttribute('src');
    if (miSrc === 'images/rise.png') {
        escudos.setAttribute('src', 'images/riseold.png');
    } else {
        escudos.setAttribute('src', 'images/rise.png');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h2');
function estableceUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = '¡Bienvenido a la página oficial, ' + minombre + '!';
}
if (!localStorage.getItem('nombre')) {
    estableceUsuario();
}
else {
    var nombreGuardado = localStorage.getItem('nombre');
    miTitulo.textContent = '¡Bienvenido a la página oficial, ' + nombreGuardado + '!';
}
miBoton.onclick = function() {
    estableceUsuario();
}