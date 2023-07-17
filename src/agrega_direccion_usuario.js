//Validación de formulario
const alias=document.getElementById('alias');
const cp=document.getElementById('cp');
const municipio=document.getElementById('municipio');
const colonia=document.getElementById('colonia');
const calle=document.getElementById('calle');
const numInterior=document.getElementById('numeroInt');
const numExterior=document.getElementById('numeroExt');
const calle1=document.getElementById('calle1');
const calle2=document.getElementById('calle2');
const telContacto=document.getElementById('telContacto');
const indicaciones=document.getElementById('indicaciones');

const nombreREGEX=new RegExp (/^[a-zA-z\s]{2,}$/);/*alias, municipio*/
const direccionREGEX=new RegExp(/^[a-zA-z0-9\s]{2,}$/)/*colonia, calle, calle1, calle2 */
const telREGEX=new RegExp (/\d{10}/);/*telContacto*/
const numerosREGEX=new RegExp(/^\d{1,}$/);
const cpREGEX=new RegExp(/\d{5}/);/*cp*/
//Boton guardar de pagina agrega_direccion_usuario.html
document.getElementById('guardar-btn').addEventListener('click', function(evento) {
  
  console.log()
  if (!nombreREGEX.test(alias.value)||!nombreREGEX.test(municipio.value)||!cpREGEX.test(cp.value)||!direccionREGEX.test(colonia.value)||!direccionREGEX.test(calle.value)||!direccionREGEX.test(calle1.value)||!direccionREGEX.test(calle2.value)||!telREGEX.test(telContacto.value)){
    evento.preventDefault;
    window.alert("Formato de entrada incorrecto, revise los campos proporcionados");
  }else{
    Swal.fire({
      title: '¿Quiere agregar dirección?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Dirección añadida con éxito', '', 'Añadido con éxito')

      } else if (result.isDenied) {
        Swal.fire('La nueva dirección no pudo guardarse', '', 'No se guardó la información')
      }
    })
  }
    
  });