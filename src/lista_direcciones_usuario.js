//Boton eliminar de pagina lista_direcciones_usuario.html
document.getElementById('eliminar-li').addEventListener('click', function() {
    Swal.fire({
      title: '¿Estás seguro/a?',
      text: "No es posible revertir esta acción.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar.'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado.'
        )
      }
    })
  });


  
