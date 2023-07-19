const tarjetasUsuario=[
    {'Alias':'José Débito', 'Tipo':'Mastercard','Vencimiento':'12/30' },
]
const productos=[
    {'producto': 'Lash Shampoo', 'precio': '100', 'cantidad':'1'},
]
// {'producto': 'Pluma de gel removedor', 'precio': '170', 'cantidad':'1'},
// {'producto': 'Lash brush desechable', 'precio': '35', 'cantidad':'1'}, 

function mostrarProductos(datos){
    const lista=document.getElementById('listaProductos');
    let i=0;
    datos.forEach(element => {
        const pago=`<li class="list-group-item d-flex align-items-start" id="${i}">
                    <div class="ms-2 me-auto ">
                        <div class="fw-bold d-flex align-items-start">Artíulo: ${element.producto}</div>
                        <span>Cantidad:${element.cantidad}</span>
                        <span>Precio:$${element.precio}</span>
                    </div>
                        <button type="button" class="btn btn-dark  btn-sm" onclick="eliminar(${i})">Cambiar</button>
                    </li>`
        lista.innerHTML+=pago;
        i++;
    });
}

function mostrarTarjetas(datos){
    const lista=document.getElementById('listaMétodosPago');
    let i=0;
    datos.forEach(element => {
        const pago=`<li class="list-group-item d-flex align-items-start" id="${i}">
                    <div class="ms-2 me-auto ">
                        <div class="fw-bold d-flex align-items-start">Alias: ${element.Alias}</div>
                        <span>${element.Tipo}</span>
                        <span>Vencimiento: ${element.Vencimiento}</span>
                    </div>
                        <button type="button" class="btn btn-dark  btn-sm" onclick="eliminar(${i})">Cambiar</button>
                    </li>`
        lista.innerHTML+=pago;
        i++;
    });
}

mostrarTarjetas(tarjetasUsuario);
mostrarProductos(productos);
  //Boton eliminar de pagina cuenta_usuario.html
function eliminar(elemento) {
    const tarjeta=document.getElementById(`${elemento}`);
        Swal.fire({
        title: '¿Estás seguro/a?',
        text: "No podrás deshacer esta acción",
        icon: 'warning',
        showCancelButton: true, 
        confirmButtonColor: 'black',
        cancelButtonColor: '#d53032',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Tu tarjeta ha sido removida con éxito');
            tarjeta.remove();
        }
        });
    }
const direccionesUsuario=[
    {'Alias':'Casa Jaz', 'CP':45960, 'Estado':'Edo. Mex','Municipio':'Naucalpan', 'Contacto':5555555555},
]
function mostrarDirecciones(datos){
    const lista=document.getElementById('listaEnvío');
    let i=0;
    datos.forEach(element => {
        const pago=`<li class="list-group-item d-flex align-items-start" id="${i}">
                    <div class="ms-2 me-auto ">
                        <div class="fw-bold d-flex align-items-start">Alias: ${element.Alias}</div>
                        <span>CP. ${element.CP}</span>
                        <span>Entidad: ${element.Estado}</span>
                        <span>Municipio/Alcaldía: ${element.Municipio}</span>
                        <span>Teléfono: ${element.Contacto}</span>
                    </div>
                    
                        <button type="button" class="btn btn-dark  btn-sm" onclick="eliminar(${i})">Cambiar</button>
                    </li>`
        lista.innerHTML+=pago;
        i++;
    });
}
mostrarDirecciones(direccionesUsuario);

function mostrarResumen(datos){
    const lista=document.getElementById('listaResumen');
    let i=0;
    datos.forEach(element => {
        const pago=`<li class="list-group-item d-flex justify-content-between align-items-start" id="${i}">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold d-flex align-items-start">Producto: ${element.producto}</div>
                        <span>Cantidad:${element.cantidad}</span>
                        <span>Precio Total:$${element.precio}</span>
                    </div>
                        <button type="button" class="btn btn-dark  btn-sm" onclick="eliminar(${i})">Eliminar</button>
                    </li>`
        lista.innerHTML+=pago;
        i++;
    });
}

mostrarResumen(productos);

const datosUsuario=[
    {'Alias':'Casa Jaz', 'CP':45960, 'Estado':'Edo. Mex','Municipio':'Naucalpan', 'Contacto':5555555555},
]

function mostrarDatosUsuario(datos){
    const lista=document.getElementById('listaDatosCliente');
    let i=0;
    datos.forEach(element => {
        const pago=`<li class="list-group-item d-flex align-items-start" id="${i}">
                    <div class="ms-2 me-auto ">
                        <div class="fw-bold d-flex align-items-start">Alias: ${element.Alias}</div>
                        <span>${element.Estado}</span>
                        <span>${element.Municipio}</span>
                        <span>Teléfono: ${element.Contacto}</span>
                    </div>
                    
                        <button type="button" class="btn btn-dark  btn-sm" onclick="eliminar(${i})">Cambiar</button>
                    </li>`
        lista.innerHTML+=pago;
        i++;
    });
}
mostrarDatosUsuario(datosUsuario);