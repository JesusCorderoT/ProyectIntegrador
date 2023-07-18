// Objeto con los datos del usuario
const usuario = {
  Usuario: "usuarioEjemplo",
  Telefono: 123456789,
  Email: "usuario@example.com",
  Password: "contrasena123",
};

  // Función para validar los datos del formulario
  function validarDatos() {
    const emailInput = document.getElementById('Email');
    const telInput = document.getElementById('Telefono');
    const usuarioInput = document.getElementById('Usuario');
    const contasenaInput = document.getElementById('Password');

    const emailREGEX = new RegExp(/^([\w\.\_])*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{3,})$/);
    const nombreREGEX = new RegExp(/^[a-zA-z\s]{2,}$/);
    const usuarioREGEX = new RegExp(/^[a-zA-z]{4,}$/);
    const telREGEX = new RegExp(/^\d{10}$/);

    if (!emailREGEX.test(emailInput.value) || !telREGEX.test(telInput.value) || !usuarioREGEX.test(usuarioInput.value) || !(contasenaInput.value.length >= 6)) {
      window.alert("Formato de entrada incorrecto, revise los campos proporcionados");
      return false; // Detener el envío del formulario si los campos no son válidos
    }
    return true;
  }

  // Función para mostrar los datos del objeto en los campos del formulario
  function mostrarDatos() {
    document.getElementById("Usuario").value = usuario.Usuario;
    document.getElementById("Telefono").value = usuario.Telefono;
    document.getElementById("Email").value = usuario.Email;
    document.getElementById("Password").value = usuario.Password;
    bloquearCampos();
  }

  // Función para bloquear los campos del formulario
  function bloquearCampos() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.disabled = true;
    });
  }

  // Función para habilitar los campos del formulario
  function habilitarCampos() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.disabled = false;
    });
  }

  // Llamar a la función mostrarDatos para llenar los campos al cargar la página
  window.onload = mostrarDatos;

  // Agregar event listener al botón "Habilitar edición" para habilitar los campos
  document.getElementById("editar-btn").addEventListener("click", () => {
    Swal.fire({
      title: '¿Quieres editar tus datos?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        habilitarCampos();
      }
    });
  });

  // Agregar event listener al formulario para realizar la validación antes de guardar los cambios
  document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el envío del formulario si los campos no son válidos
    if (validarDatos()) {
      //Sección para bd
      bloquearCampos();
      // Recargar la página después de guardar los cambios y mostrar la alerta
      setTimeout(() => {
        window.location.reload();
        Swal.fire('¡Guardado!', '', 'success');
      }, 1000);
    }
  });