// Función para iniciar sesión
// function iniciarSesion(nombre, email, tipo) {
//     // Almacenar la información de sesión en sessionStorage
//     sessionStorage.setItem("nombre", nombre);
//     sessionStorage.setItem("email", email);
//     sessionStorage.setItem("loggedIn", "true");
//     sessionStorage.setItem("tipo", tipo);
// }

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
            // Se agrega navbar para usuario normal
            fetch('../Pages/navbar2.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbarContainer').innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar la barra de navegación:', error);
            });

            console.log("Usuario loggeado (normal):", sessionStorage.getItem("nombre"));
            
        } else if (tipo === "admin") {
            // Se agrega navbar para usuario admin
            fetch('../Pages/navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbarContainer').innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar la barra de navegación:', error);
            });

            console.log("Usuario loggeado (admin):", sessionStorage.getItem("nombre"));

        }
    } else {
        // Se agrega navbar para usuario no loggeado
        fetch('../Pages/navbar3.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbarContainer').innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar la barra de navegación:', error);
            });
        console.log("Usuario no loggeado");
    }
}


verificarSesion();

// Simular cierre de sesión

// cerrarSesion();

