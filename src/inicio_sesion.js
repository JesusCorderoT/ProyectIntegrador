document.getElementById('botonInicio').addEventListener('click', function() {
    let correoElect = document.getElementById('correo');
    let contrasena = document.getElementById('password');
    let parrafo = document.getElementById('warnings');
    
    // Limpiar mensajes de error anteriores
    parrafo.innerHTML = "";
    
    // Expresión regular para validar el correo electrónico
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    // Condicional de validación
    if (correoElect.value.trim() === '' || contrasena.value.trim() === '') {
        // Mostrar mensaje de error si hay campos vacíos
        parrafo.innerHTML = "Por favor, complete todos los campos";
    } else if (!regexEmail.test(correoElect.value)) {
        // Mostrar mensaje de error si el correo electrónico no es válido
        parrafo.innerHTML = "Por favor, ingrese un correo electrónico válido";
    } else {
        // Redireccionar a la página principal si los datos son válidos
        window.location.href = '../index.html';
    }
});

//codigos para botones de inicio de sesion y registrate
document.getElementById('botonRegistrate').addEventListener('click', function() {
    window.location.href = '../Pages/registrarse.html';
});



