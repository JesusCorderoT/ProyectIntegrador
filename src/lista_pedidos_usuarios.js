const pedidosUsuario=[
    {'Orden':'001','Monto':'$500','Productos':["Shapoo", " LashBrush"],'Fecha':'20/06/2023','Estatus':'Por confirmar', 'Comentario':''},
    {'Orden':'003','Monto':'$500','Productos':["Shapoo", " Removedor en gel ", "LashBrush"],'Fecha':'20/06/2023','Estatus':'En camino', 'Comentario':''},
    {'Orden':'008','Monto':'$500','Productos':["Shapoo"], 'Fecha':'20/06/2023','Estatus':'Entregado', 'Comentario':'El shapoo es muy suave, no deja la piel deshidratada y huele muy rico'},
]



function mostrarPedidosUsuario(datos){
    let i=0;
    const listado=document.getElementById('lista');
    datos.forEach(elemento => {
        let reseña;
        let atributo;
        if(elemento.Estatus=='Entregado'){reseña=elemento.Comentario; atributo='';}
        else{reseña='Deja tu comentario en cuanto llegue tu pedido'; atributo='readonly';}
        let seccion=`<li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="titulos">No. Orden: ${elemento.Orden}</div>
                                <div class="container text-center">
                                    <div class="row row-cols-auto">
                                        <div class="col"> Monto: ${elemento.Monto}</div>
                                        <div class="col"> Fecha: ${elemento.Fecha}</div>
                                        <div class="col"> Productos: ${elemento.Productos} </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#${elemento.Orden}" >Comenta</button>
                            <div class="modal fade mod" id="${elemento.Orden}" tabindex="-1"  aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header titulo-mod">
                                  <p class="modal-title titulos" id="tituloModal">¡Nos interesa tu opinión!</p>
                                </div>
                                <div class="modal-body cuerpo-mod">
                                  <form>
                                    <div class="mb-3">
                                      <label for="${i}" class="col-form-label titulos">Escribe tu reseña:</label>
                                      <textarea class="form-control" id="${i}" ${atributo} >${reseña}</textarea>
                                    </div>
                                  </form >
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                  <button class="btn btn-dark" type="submit" name="submit" value="Submit" onclick="actualizar(${i})">Guardar</button>
                                </div>
                              </div>
                            </div>
                          </div>
                            </div>
                        </li>`
        listado.innerHTML+=seccion;
        i++;
    });
}
mostrarPedidosUsuario(pedidosUsuario);

   
function actualizar(identificador){
  const areaComentario=document.getElementById(`${identificador}`);
  pedidosUsuario[identificador].Comentario=areaComentario.value;
}