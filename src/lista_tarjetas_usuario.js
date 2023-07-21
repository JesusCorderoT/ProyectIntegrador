const tarjetasUsuario=[
  {'Alias':'José Débito', 'Tipo':'Mastercard','Vencimiento':'12/30', 'Predeterminado':true},
  {'Alias':'José Credito', 'Tipo':'Visa','Vencimiento':'11/30', 'Predeterminado':false },
  {'Alias':'Pagos Internet', 'Tipo':'Amex','Vencimiento':'12/30', 'Predeterminado':false}
]
const lista=document.getElementById('lista');
function mostrarTarjetas(datos){
  let i=0;
  datos.forEach(element => {
    let atributo='';
    if(element.Predeterminado){
      atributo=''
    }else{atributo='hidden'}
      const pago=`<li class="list-group-item d-flex justify-content-between align-items-start" id="${i}">
                    <div class="ms-2 me-auto">
                      <div class="titulos">Alias de tarjeta: ${element.Alias}  </div>
                      <span> ${element.Tipo} </span>
                      <span> Vence el: ${element.Vencimiento} </span>
                      <span ${atributo} id="${element.Alias}"> <mark style="background-color: black; color: white;"> Predeterminado </mark></span>
                    </div>
                    <div class="dropdown">
                            <button class="btn btn-dark" type="button" data-bs-toggle="dropdown" id="estatus" aria-expanded="false">
                            <i class="bi bi-chevron-down"></i>
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item"  onclick="cambiar( ${i})" href="#">Predeterminada</a></li>
                            <li><a class="dropdown-item alert alert-danger"" data-target="Enviada" onclick="eliminar(${i})" href="#">Eliminar</a></li>
                            </ul>
                    </div>
                  </li>`
      lista.innerHTML+=pago;
      i++;
  });
}
mostrarTarjetas(tarjetasUsuario);

//Boton eliminar de pagina cuenta_usuario.html
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
      tarjetasUsuario.forEach(t=>{
        let datosTarjetas=document.getElementById(`${i}`);
        datosTarjetas.remove();
        console.log(`Eliminado el  id${i}`);
        i++;
      });
      if(tarjetasUsuario[elemento].Predeterminado){
        tarjetasUsuario[elemento].Predeterminado=false;
        tarjetasUsuario.splice(elemento,1);
        if(elemento==tarjetasUsuario.length){tarjetasUsuario[0].Predeterminado=true;}
        else{tarjetasUsuario[elemento].Predeterminado=true;}
       
        console.log(tarjetasUsuario);
      }else{tarjetasUsuario.splice(elemento,1);}
      
      mostrarTarjetas(tarjetasUsuario);
      Swal.fire('Eliminado.');
      
    }
  })
}
  function cambiar(elemento){
    let i=0;
    tarjetasUsuario.forEach(element=>{
      let atributo=document.getElementById(`${element.Alias}`);
      if(i==elemento){
        element.Predeterminado=true;
        atributo.removeAttribute('hidden');
      }else{
        element.Predeterminado=false;
        atributo.setAttribute('hidden', '')
      }
      i++;
    });
    console.log(tarjetasUsuario);
  }

