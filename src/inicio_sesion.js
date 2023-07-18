let correoElect = document.getElementById('correo');
let contrasena = document.getElementById('password');
let parrafo = document.getElementById('warnings');

// Función para convertir el texto a minúsculas y actualizar el valor en el campo de correo electrónico
function convertirAMinusculas() {
    correoElect.value = correoElect.value.toLowerCase();
}
// Asociar el evento 'input' a la función de conversión
correoElect.addEventListener('input', convertirAMinusculas);


//Función para funcionamiento del correo electronico.
const acceso = document.getElementById('botonInicio').addEventListener('click', function() {
    
    // Limpiar mensajes de error anteriores
    parrafo.innerHTML = "";
    
    // Expresión regular para validar el correo electrónico
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    // Condicional de validación
    if (correoElect.value.trim() === '' || contrasena.value.trim() === '') {
        // Mostrar mensaje de error si hay campos vacíos
        parrafo.innerHTML = "Por favor, complete todos los campos.";
    } else if (!regexEmail.test(correoElect.value)) {
        // Mostrar mensaje de error si el correo electrónico no es válido
        parrafo.innerHTML = "Por favor, ingrese un correo electrónico válido.";
    } else {
        // Redireccionar a la página principal si los datos son válidos
        window.location.href = '../index.html';
    }
});

//codigos para botones de inicio de sesion y registrate
document.getElementById('botonRegistrate').addEventListener('click', function() {
    window.location.href = '../Pages/registrarse.html';
});


function iniciarSesion(nombre, email, tipo) {
    // Almacenar la información de sesión en sessionStorage
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("tipo", tipo);
}
