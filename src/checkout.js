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
        const pago=`<li class="list-group-item d-flex justify-content-between align-items-start" id="${i}">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Producto: ${element.producto}</div>
                        <span>Cantidad:${element.cantidad}</span>
                        <span>Precio:$${element.precio}</span>
                    </div>
                        <button type="button" class="btn btn-dark  btn-sm" onclick="eliminar(${i})">Eliminar</button>
                    </li>`
        lista.innerHTML+=pago;
        i++;
    });
}

function mostrarTarjetas(datos){
    const lista=document.getElementById('listaMétodosPago');
    let i=0;
    datos.forEach(element => {
        const pago=`<li class="list-group-item d-flex justify-content-between align-items-start" id="${i}">
                    <div class="ms-2 me-auto ">
                        <div class="fw-bold">Alias de tarjeta: ${element.Alias}</div>
                        <span>${element.Tipo}</span>
                        <span>Vence el: ${element.Vencimiento}</span>
                    </div>
                    <div class="dropdown">
                    <button class="btn btn-dark btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Opciones
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item"  href="#">Editar</a></li>
                    <li id="eliminar-li" ><a class="dropdown-item" onclick="eliminar(${i})" href="#">Eliminar</a></li>
                    </ul>
                </div> 
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
        const direccion=`<li class="list-group-item d-flex justify-content-between align-items-start" id="${i}">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">Alias: ${element.Alias}</div>
                            <div class="container text-center">
                                <div class="row row-cols-auto">
                                <div class="col"> CP. ${element.CP}</div>
                                <div class="col"> Entidad: ${element.Estado}</div>
                                <div class="col"> Municipio/Alcaldía: ${element.Municipio}</div>
                                <div class="col"> Contacto: ${element.Contacto}</div>          
                                </div>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-dark btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Opciones
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item"  href="#">Editar</a></li>
                                <li id="eliminar-li" ><a class="dropdown-item" onclick="eliminar(${i})" href="#">Eliminar</a></li>
                            </ul>
                            </div>            
                        </li>`
    lista.innerHTML+=direccion;
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
                        <div class="fw-bold">Producto: ${element.producto}</div>
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
