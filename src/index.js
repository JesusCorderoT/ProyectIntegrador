function validateContactForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "") {
        alert("Por favor, ingrese su nombre.");
        return;
    }

    const emailRegex = (/^([\w\.\_])*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{3,})$/);
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }


    if (message.trim() === "") {
        alert("Por favor, ingrese un mensaje.");
        return;
    }

    alert("Formulario enviado correctamente.");

    const contactForm = document.getElementById("contactForm");
    contactForm.submit();

}

// Agregar el evento 'submit' al formulario y llamar a la función de validación
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", validateContactForm);