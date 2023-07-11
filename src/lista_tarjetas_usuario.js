//Boton eliminar de pagina cuenta_usuario.html
document.getElementById('eliminar-btn').addEventListener('click', function() {
    Swal.fire({
    title: '¿Estás seguro/a?',
    text: "No podrás deshacer esta acción",
    icon: 'warning',
    showCancelButton: true, 
    confirmButtonColor: 'black',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar'
    }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminada',
        'Tu tarjeta ha sido removida con éxito'
      )
    }
    });
  });

