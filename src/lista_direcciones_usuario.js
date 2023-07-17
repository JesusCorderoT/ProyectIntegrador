const direccionesUsuario=[
  {'Alias':'Casa Jaz', 'CP':45960, 'Estado':'Edo. Mex','Municipio':'Naucalpan', 'Contacto':5555555555},
  {'Alias':'Casa Abue', 'CP':45987, 'Estado':'Edo. Mex','Municipio':'Naucalpan', 'Contacto':5566556655},
  {'Alias':'Mamá', 'CP':39560, 'Estado':'Guerrero','Municipio':'Acapulco', 'Contacto':7444444444},
  {'Alias':'Mono', 'CP':36987, 'Estado':'Puebla','Municipio':'Puebla', 'Contacto':2222222222}
]
function mostrarDirecciones(datos){
  const lista=document.getElementById('lista');
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
                              <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
//Boton eliminar de pagina lista_direcciones_usuario.html
function eliminar(elemento) {
  const direccion=document.getElementById(`${elemento}`);
    Swal.fire({
      title: '¿Estás seguro/a?',
      text: "No podrás deshacer esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'Black',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, borrar.'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado.');
        direccion.remove();
      }
    })
}


  
