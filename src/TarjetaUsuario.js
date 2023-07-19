// Obtener los elementos HTML necesarios
const cardNumberInput = document.getElementById('card-number-input');
const cardNameInput = document.getElementById('card-name-input');
const cardExpiryMonthInput = document.getElementById('card-expiry-month-input');
const cardExpiryYearInput = document.getElementById('card-expiry-year-input');
const cardCvvInput = document.getElementById('card-cvv-input');
const cardTypeDisplay = document.getElementById('card-type-display');
const cardNumberDisplay = document.getElementById('card-number-display');
const cardNameDisplay = document.getElementById('card-name-display');
const cardExpiryDisplay = document.getElementById('card-expiry-display');
const cardCvvDisplay = document.getElementById('card-cvv-display');
const cardPreview = document.querySelector('.card-preview');
const cardForm = document.querySelector('form');

// Funciones de validación individual para cada campo
function validarNumeroTarjeta() {
  const cardNumber = cardNumberInput.value;
  if (!/^\d{16}$/.test(cardNumber)) {
    mostrarError("El número de tarjeta debe tener 16 dígitos.");
    return false;
  }
  return true;
}

function validarMesVencimiento() {
  const expiryMonth = cardExpiryMonthInput.value;
  if (!/^\d{2}$/.test(expiryMonth)) {
    mostrarError("El mes debe tener 2 dígitos.");
    return false;
  }
  return true;
}

function validarYearVencimiento() {
  const expiryYear = cardExpiryYearInput.value;
  if (!/^\d{2}$/.test(expiryYear)) {
    mostrarError("El año de vencimiento debe tener 2 dígitos.");
    return false;
  }
  return true;
}

function validarCVV() {
  const cvv = cardCvvInput.value;
  if (!/^\d{3}$/.test(cvv)) {
    mostrarError("El CVV debe tener 3 dígitos.");
    return false;
  }
  return true;
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
  Swal.fire("Error", mensaje, "error");
}

// Agregar un listener al evento 'blur' de los campos que requieren validación
cardNumberInput.addEventListener('blur', validarNumeroTarjeta);
cardExpiryMonthInput.addEventListener('blur', validarMesVencimiento);
cardExpiryYearInput.addEventListener('blur', validarYearVencimiento);
cardCvvInput.addEventListener('blur', validarCVV);

// Agregar un listener al evento 'input' del campo CVV para mostrar la tarjeta volteada solo cuando hay 3 dígitos.
cardCvvInput.addEventListener('input', (event) => {
  const cvv = event.target.value;
  cardCvvDisplay.textContent = cvv;

  // Si el CVV tiene 3 dígitos, mostrar la tarjeta volteada
  if (cvv.length > 0) {
    cardPreview.classList.add('flipped');
  } else {
    cardPreview.classList.remove('flipped');
  }
});

// Agregar un listener al evento 'input' del número de tarjeta para detectar el tipo de tarjeta
cardNumberInput.addEventListener('input', (event) => {
  const cardNumber = event.target.value;

  // Detectar el tipo de tarjeta
  let cardType = '';
  if (cardNumber.startsWith('4')) {
    cardType = 'visa';
  } else if (cardNumber.startsWith('5')) {
    cardType = 'mastercard';
  } else if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
    cardType = 'amex';
  } else if (cardNumber.startsWith('6')) {
    cardType = 'discover';
  }

  // Actualizar la vista previa con el tipo de tarjeta detectado
  if (cardType === 'visa') {
    cardTypeDisplay.style.backgroundImage = "url('/assets/imgs/logos/visa.png')";
  } else if (cardType === 'mastercard') {
    cardTypeDisplay.style.backgroundImage = "url('/assets/imgs/logos/mastercard.png')";
  } else if (cardType === 'amex') {
    cardTypeDisplay.style.backgroundImage = "url('/assets/imgs/logos/amex.png')";
  } else if (cardType === 'discover') {
    cardTypeDisplay.style.backgroundImage = "url('/assets/imgs/loader.gif')";
  }

  // Formatear el número de tarjeta con espacios cada 4 dígitos
  const formattedCardNumber = cardNumber.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
  cardNumberDisplay.textContent = formattedCardNumber;
});

// Agregar un listener al evento 'input' del nombre en la tarjeta para actualizar la vista previa
cardNameInput.addEventListener('input', (event) => {
  const cardName = event.target.value;
  cardNameDisplay.textContent = cardName;
});

// Agregar un listener al evento 'input' del mes de vencimiento para actualizar la vista previa
cardExpiryMonthInput.addEventListener('input', (event) => {
  const expiryMonth = event.target.value;
  const expiryYear = cardExpiryYearInput.value;
  cardExpiryDisplay.textContent = `${expiryMonth}/${expiryYear}`;
});

// Agregar un listener al evento 'input' del año de vencimiento para actualizar la vista previa
cardExpiryYearInput.addEventListener('input', (event) => {
  const expiryMonth = cardExpiryMonthInput.value;
  const expiryYear = event.target.value;
  cardExpiryDisplay.textContent = `${expiryMonth}/${expiryYear}`;
});

// Función para validar todo el formulario antes de enviar los datos
function validarFormulario() {
  const esNumeroTarjetaValido = validarNumeroTarjeta();
  const esMesVencimientoValida = validarMesVencimiento();
  const esYearVencimientoValido = validarYearVencimiento();
  const esCVVValido = validarCVV();

  if (esNumeroTarjetaValido && esMesVencimientoValida && esCVVValido && esYearVencimientoValido) {
    Swal.fire("¡Éxito!", "Formulario válido, puedes enviar los datos.", "success");
    //Seccion para BD
  } else {
    Swal.fire("Error", "Por favor, completa correctamente todos los campos.", "error");
  }
}

// Agregar un listener al botón de 'Guardar' para validar el formulario antes de enviar los datos
document.getElementById('guardar-btn').addEventListener('click', validarFormulario);