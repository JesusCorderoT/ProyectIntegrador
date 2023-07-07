 //Boton editar de pagina datos_usuario.html
  document.getElementById('editar-btn').addEventListener('click', function() {
  Swal.fire({
    title: 'Quieres habilitar la edicion?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
});
