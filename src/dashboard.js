// Obtener referencias a los enlaces de la barra lateral y al contenedor de contenido
const inicioLink = document.getElementById('inicio-link');
const citasLink = document.getElementById('citas-link');
const ventasLink = document.getElementById('ventas-link');
const usuariosLink = document.getElementById('usuarios-link');
const contenidoDinamico = document.getElementById('contenido-dinamico');

// Funciones para mostrar u ocultar el contenido según la opción seleccionada
function mostrarInicio() {
    contenidoDinamico.innerHTML = '<h2>Contenido de Inicio</h2>';
    mostrarAdministrador();
}

function mostrarCitas() {
    contenidoDinamico.innerHTML = '<h2>Citas</h2>';
    generarTarjetasEventos();
}

function mostrarVentas() {
    contenidoDinamico.innerHTML = '<h2>Ventas</h2>';
    generarTarjetasVentas(); // Generar las tarjetas de ventas al mostrar la sección de ventas

}

function mostrarUsuarios() {
    contenidoDinamico.innerHTML = '<h2>Usuarios</h2>';
    generarTablaUsuarios();
}


// Asignar los controladores de eventos a los enlaces de la barra lateral
inicioLink.addEventListener('click', mostrarInicio);
citasLink.addEventListener('click', mostrarCitas);
ventasLink.addEventListener('click', mostrarVentas);
usuariosLink.addEventListener('click', mostrarUsuarios);

// Mostrar la página "Inicio" al cargar el dashboard
mostrarInicio();



function generarTarjetasVentas() {
    const tarjetasVentas = [
        { id: 1, producto: 'Producto 1', precio: 10 },
        { id: 2, producto: 'Producto 2', precio: 20 },
        { id: 3, producto: 'Producto 3', precio: 30 },
    ];

    const tarjetasHTML = tarjetasVentas.map((venta) => {
        return `
        <div class="tarjeta-venta ">
            <h3>ID: ${venta.id}</h3>
            <p>Producto: ${venta.producto}</p>
            <p>Precio: $${venta.precio}</p>
        </div>
        `;
    });

    const contenidoDinamico = document.getElementById('contenido-dinamico');
    contenidoDinamico.innerHTML += tarjetasHTML.join('');
}


function generarTarjetasEventos() {
    const eventos = [
        { id: 1, nombre: 'Cita 1', fecha: '2023-07-10', cliente: 'Cliente 1', hora: '09:00', servicio: 'Servicio A' },
        { id: 2, nombre: 'Cita 2', fecha: '2023-07-15', cliente: 'Cliente 2', hora: '13:30', servicio: 'Servicio B' },
        { id: 3, nombre: 'Cita 3', fecha: '2023-07-20', cliente: 'Cliente 3', hora: '17:45', servicio: 'Servicio C' },
    ];

    const tarjetasHTML = eventos.map((evento) => {
        return `
        <div class="tarjeta-evento">
            <h3>ID: ${evento.id}</h3>
            <p>Nombre: ${evento.nombre}</p>
            <p>Fecha: ${evento.fecha}</p>
            <p>Cliente: ${evento.cliente}</p>
            <p>Hora: ${evento.hora}</p>
            <p>Servicio: ${evento.servicio}</p>
        </div>
        `;
    });

    const contenidoDinamico = document.getElementById('contenido-dinamico');
    contenidoDinamico.innerHTML = tarjetasHTML.join('');
}

function generarTablaUsuarios() {
    const usuarios = [
        { nombre: 'Juan', apellidos: 'Pérez', nickname: 'juanperez', email: 'juan@example.com', password: '123456' },
        { nombre: 'María', apellidos: 'González', nickname: 'mariagonzalez', email: 'maria@example.com', password: 'abcdef' },
        { nombre: 'Carlos', apellidos: 'López', nickname: 'carloslopez', email: 'carlos@example.com', password: 'qwerty' },
    ];

    const tabla = document.createElement('table');
    tabla.classList.add('tabla-usuarios');

    // Crea la fila de encabezado
    const encabezado = document.createElement('tr');
    const encabezadoNombre = document.createElement('th');
    encabezadoNombre.textContent = 'Nombre';
    encabezado.appendChild(encabezadoNombre);

    const encabezadoApellidos = document.createElement('th');
    encabezadoApellidos.textContent = 'Apellidos';
    encabezado.appendChild(encabezadoApellidos);

    const encabezadoNickname = document.createElement('th');
    encabezadoNickname.textContent = 'Nickname';
    encabezado.appendChild(encabezadoNickname);

    const encabezadoEmail = document.createElement('th');
    encabezadoEmail.textContent = 'Email';
    encabezado.appendChild(encabezadoEmail);

    const encabezadoPassword = document.createElement('th');
    encabezadoPassword.textContent = 'Password';
    encabezado.appendChild(encabezadoPassword);

    const encabezadoAcciones = document.createElement('th');
    encabezadoAcciones.textContent = 'Acciones';
    encabezado.appendChild(encabezadoAcciones);

    tabla.appendChild(encabezado);

    // Agrega las filas de usuarios
    usuarios.forEach((usuario) => {
        const fila = document.createElement('tr');
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = usuario.nombre;
        fila.appendChild(celdaNombre);

        const celdaApellidos = document.createElement('td');
        celdaApellidos.textContent = usuario.apellidos;
        fila.appendChild(celdaApellidos);

        const celdaNickname = document.createElement('td');
        celdaNickname.textContent = usuario.nickname;
        fila.appendChild(celdaNickname);

        const celdaEmail = document.createElement('td');
        celdaEmail.textContent = usuario.email;
        fila.appendChild(celdaEmail);

        const celdaPassword = document.createElement('td');
        celdaPassword.textContent = usuario.password;
        fila.appendChild(celdaPassword);

        const celdaAcciones = document.createElement('td');
        const botonBorrar = document.createElement('button');
        botonBorrar.textContent = 'Borrar usuario';
        botonBorrar.addEventListener('click', () => {
            // Aquí puedes agregar la lógica para borrar el usuario correspondiente
            console.log('Borrando usuario:', usuario);
        });
        celdaAcciones.appendChild(botonBorrar);
        fila.appendChild(celdaAcciones);

        tabla.appendChild(fila);
    });

    const contenidoDinamico = document.getElementById('contenido-dinamico');
    contenidoDinamico.innerHTML = '';
    contenidoDinamico.appendChild(tabla);
}


function mostrarAdministrador() {
    const administrador = {
        nombre: 'Admin',
        apellido: 'Admin',
        email: 'admin@example.com',
        telefono: '123456789',
        rol: 'Administrador'
    };

    const tarjetaHTML = `
        <div class="tarjeta-administrador">
            <h3>Información del Administrador</h3>
            <p>Nombre: ${administrador.nombre} ${administrador.apellido}</p>
            <p>Email: ${administrador.email}</p>
            <p>Teléfono: ${administrador.telefono}</p>
            <p>Rol: ${administrador.rol}</p>
        </div>
    `;

    const contenidoDinamico = document.getElementById('contenido-dinamico');
    contenidoDinamico.innerHTML = tarjetaHTML;
}