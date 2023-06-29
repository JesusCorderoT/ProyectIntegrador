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


// Agregar un listener al input del CVV para actualizar la vista previa
cardCvvInput.addEventListener('input', (event) => {
  const cvv = event.target.value;
  cardCvvDisplay.textContent = cvv;

  // Si el CVV tiene 3 o más dígitos, mostrarlo y voltear la tarjeta
  if (cvv.length >= 0) {
    cardPreview.classList.add('flipped');
  } else {
    cardPreview.classList.remove('flipped');
  }
});


// Agregar un listener al input del número de tarjeta para detectar el tipo de tarjeta
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

// Agregar un listener al input del nombre en la tarjeta para actualizar la vista previa
cardNameInput.addEventListener('input', (event) => {
  const cardName = event.target.value;
  cardNameDisplay.textContent = cardName;
});

// Agregar un listener al input del mes de vencimiento para actualizar la vista previa
cardExpiryMonthInput.addEventListener('input', (event) => {
  const expiryMonth = event.target.value;
  const expiryYear = cardExpiryYearInput.value;
  cardExpiryDisplay.textContent = `${expiryMonth}/${expiryYear}`;
});

// Agregar un listener al input del año de vencimiento para actualizar la vista previa
cardExpiryYearInput.addEventListener('input', (event) => {
  const expiryMonth = cardExpiryMonthInput.value;
  const expiryYear = event.target.value;
  cardExpiryDisplay.textContent = `${expiryMonth}/${expiryYear}`;
});


// Agregar un listener al evento 'blur' de todos los campos de formulario, excepto el campo del CVV,
// para quitar la clase 'flipped'
cardNumberInput.addEventListener('click', () => {
  cardPreview.classList.remove('flipped');
});

cardNameInput.addEventListener('click', () => {
  cardPreview.classList.remove('flipped');
});

cardExpiryMonthInput.addEventListener('click', () => {
  cardPreview.classList.remove('flipped');
});

cardExpiryYearInput.addEventListener('click', () => {
  cardPreview.classList.remove('flipped');
});


//Boton guardar de pagina agrega_direccion_usuario.html
document.getElementById('guardar-btn').addEventListener('click', function() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
});



//Boton guardar de pagina agrega_direccion_usuario.html
// document.getElementById('guardar-btn').addEventListener('click', function() {
//   Swal.fire({
//       title: 'Do you want to save the changes?',
//       showDenyButton: true,
//       showCancelButton: true,
//       confirmButtonText: 'Save',
//       denyButtonText: `Don't save`,
//     }).then((result) => {
//       /* Read more about isConfirmed, isDenied below */
//       if (result.isConfirmed) {
//         Swal.fire('Saved!', '', 'success')
//       } else if (result.isDenied) {
//         Swal.fire('Changes are not saved', '', 'info')
//       }
//     })
// });