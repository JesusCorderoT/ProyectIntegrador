const tarjetasUsuario=[
  {'Alias':'José Débito', 'Tipo':'Mastercard','Vencimiento':'12/30', 'Predeterminado':true},
  {'Alias':'José Credito', 'Tipo':'Visa','Vencimiento':'11/30', 'Predeterminado':false },
  {'Alias':'Pagos Internet', 'Tipo':'Amex','Vencimiento':'12/30', 'Predeterminado':false}
]
function mostrarTarjetas(datos){
  const lista=document.getElementById('lista');
  let i=0;
  datos.forEach(element => {
    let atributo='';
    if(element.Predeterminado){
      atributo=''
    }else{atributo='hidden'}
      const pago=`<li class="list-group-item d-flex justify-content-between align-items-start" id="${i}">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Alias de tarjeta: ${element.Alias}  </div>
                      <span> ${element.Tipo} </span>
                      <span> Vence el: ${element.Vencimiento} </span>
                      <span ${atributo}>  Predeterminado  </span>
                    </div>
                    <button type="button" class="btn btn-danger" onclick="eliminar(${i})">Eliminar</button>
                  </li>`
      lista.innerHTML+=pago;
      i++;
  });
}
mostrarTarjetas(tarjetasUsuario);

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

