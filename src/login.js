// Función para iniciar sesión
function iniciarSesion(nombre, email, tipo) {
    // Almacenar la información de sesión en sessionStorage
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("tipo", tipo);
}

// Función para cerrar sesión
function cerrarSesion() {
    // Eliminar la información de sesión de sessionStorage
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("tipo");
}

// Función para verificar si el usuario está loggeado y su tipo
function verificarSesion() {
    // Obtener la información de sesión almacenada en sessionStorage
    var loggedIn = sessionStorage.getItem("loggedIn");
    var tipo = sessionStorage.getItem("tipo");

    // Verificar si el usuario está loggeado
    if (loggedIn === "true") {
        // Verificar el tipo de usuario
        if (tipo === "normal") {
            // Mostrar contenido para usuarios loggeados normales
            console.log("Usuario loggeado (normal):", sessionStorage.getItem("nombre"));
            // Aquí puedes agregar el código para mostrar el contenido especial para usuarios loggeados normales en tu página
        } else if (tipo === "admin") {
            // Mostrar contenido para administradores loggeados
            console.log("Usuario loggeado (admin):", sessionStorage.getItem("nombre"));
            // Aquí puedes agregar el código para mostrar el contenido especial para administradores loggeados en tu página
        }
    } else {
        // Mostrar contenido para usuarios no loggeados
        console.log("Usuario no loggeado");
        // Aquí puedes agregar el código para mostrar el contenido especial para usuarios no loggeados en tu página
    }
}

// Ejemplo de uso
iniciarSesion("John Doe", "johndoe@example.com", "normal"); // Para un usuario normal
//iniciarSesion("Jane Doe", "janedoe@example.com", "admin"); // Para un administrador
verificarSesion();

// Simular cierre de sesión
cerrarSesion();
verificarSesion();
