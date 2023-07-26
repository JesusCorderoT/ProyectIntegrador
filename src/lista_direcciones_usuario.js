const direccionesUsuario=[
  {'Alias':'Casa Jaz', 'CP':45960, 'Estado':'Edo. Mex','Municipio':'Naucalpan', 'Contacto':5555555555, 'Predeterminado':true},
  {'Alias':'Casa Abue', 'CP':45987, 'Estado':'Edo. Mex','Municipio':'Naucalpan', 'Contacto':5566556655, 'Predeterminado':false},
  {'Alias':'Mamá', 'CP':39560, 'Estado':'Guerrero','Municipio':'Acapulco', 'Contacto':7444444444, 'Predeterminado':false},
  {'Alias':'Mono', 'CP':36987, 'Estado':'Puebla','Municipio':'Puebla', 'Contacto':2222222222, 'Predeterminado':false}
]
function mostrarDirecciones(datos){
  const lista=document.getElementById('lista');
  let i=0;
  let atributo='';

  datos.forEach(element => {
    if(element.Predeterminado){
      atributo=''
    }else{atributo='hidden'}
      const direccion=`<li class="list-group-item d-flex justify-content-between align-items-start" id="${i}">
                          <div class="ms-2 me-auto">
                                <span class="titulos">Alias: ${element.Alias}</span>
                                <br>
                                <span> CP. ${element.CP}</span>
                                <span> </span>
                                <span> Entidad: ${element.Estado}</span>
                                <span> </span>
                                <span> Municipio/Alcaldía: ${element.Municipio}</span>
                                <span> </span>
                                <span> Contacto: ${element.Contacto}</span>  
                                <span> </span>
                                <span ${atributo} id="${element.Alias}"> <mark style="background-color: black; color: white;"> Predeterminado </mark></span>       
                          </div>
                          <div class="dropdown">
                              <button class="btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="bi bi-chevron-down"></i>
                              </button>
                              <ul class="dropdown-menu">
                                <li id="eliminar-li" ><a class="dropdown-item" onclick="eliminar(${i})" href="#">Eliminar</a></li>
                              </ul>
                            </div>            
                        </li>`
      lista.innerHTML+=direccion;
      console.log(`Mostrar id${i}`);
      i++;
  });
}
mostrarDirecciones(direccionesUsuario);
//Boton eliminar de pagina lista_direcciones_usuario.html
function eliminar(elemento) {
  
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
        let i=0;
        direccionesUsuario.forEach(d=>{
          let datosDireccion=document.getElementById(`${i}`);
          datosDireccion.remove();
          console.log(`Eliminado el  id${i}`);
          i++;
        });
        if(direccionesUsuario[elemento].Predeterminado){
          direccionesUsuario[elemento].Predeterminado=false;

          direccionesUsuario.splice(elemento,1);
          if(elemento==direccionesUsuario.length){direccionesUsuario[0].Predeterminado=true;}
          else{direccionesUsuario[elemento].Predeterminado=true;}
         
          console.log(direccionesUsuario);
        }else{direccionesUsuario.splice(elemento,1);}
        
        mostrarDirecciones(direccionesUsuario);

        Swal.fire('Eliminado.');
        
      }
    })
}


  
