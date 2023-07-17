 //Boton editar de pagina datos_usuario.html
  document.getElementById('editar-btn').addEventListener('click', function() {
  Swal.fire({
    title: '¿Quieres guardar los cambios?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('¡Guardado!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('No se han guardado los cambios', '', 'info')
    }
  })
});
