const pedidosUsuario=[
    {'Orden':'001','Monto':'$500','Productos':["Shapoo", " LashBrush"],'Fecha':'20/06/2023','Estatus':'Por confirmar'},
    {'Orden':'003','Monto':'$500','Productos':["Shapoo", " Removedor en gel ", "LashBrush"],'Fecha':'20/06/2023','Estatus':'Por confirmar'},
    {'Orden':'008','Monto':'$500','Productos':["Shapoo"], 'Fecha':'20/06/2023','Estatus':'Por confirmar'},
]
function mostrarPedidosUsuario(datos){
    let i=0;
    const listado=document.getElementById('lista');
    datos.forEach(elemento => {
        let seccion=`<li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">No. Orden: ${elemento.Orden}</div>
                                <div class="container text-center">
                                    <div class="row row-cols-auto">
                                        <div class="col"> Monto: ${elemento.Monto}</div>
                                        <div class="col"> Fecha: ${elemento.Fecha}</div>
                                        <div class="col"> Productos: ${elemento.Productos} </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <button class="btn btn-dark" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Comentario
                                </button>                
                            </div>
                        </li>`
        listado.innerHTML+=seccion
        i++;
    });
}
mostrarPedidosUsuario(pedidosUsuario);