document.getElementById('numero-pedido').addEventListener('input', function() {
    let numeroPedidoInput = document.getElementById('numero-pedido');
    let numeroPedido = numeroPedidoInput.value.trim();
    
    // Verificar si se ingresaron números de pedido
    if (numeroPedido !== '') {
        let pedidos = numeroPedido.split(',');
        
        // Limpiar la información de seguimiento anterior
        clearTrackingInfo();
        
        // Recorrer los números de pedido ingresados
        pedidos.forEach(function(pedido) {
            // Verificar si el número de pedido es válido
            if (isValidPedido(pedido)) {
                // Obtener información de seguimiento para el pedido
                let infoSeguimiento = getTrackingInfo(pedido);
                
                // Mostrar la información de seguimiento en la página
                if (infoSeguimiento) {
                    showTrackingInfo(infoSeguimiento);
                }
            } else {
                // Mostrar mensaje de error si el número de pedido no es válido
                showErrorMessage('Por favor, ingrese un número de pedido válido');
            }
        });
    } else {
        // Limpiar la información de seguimiento si no se ingresaron números de pedido
        clearTrackingInfo();
    }
});

// Función para verificar si un número de pedido es válido
function isValidPedido(pedido) {
    // verifica aqui si el número de pedido tiene un formato válido
    
    // Ejemplo de validación: el número de pedido debe tener al menos 6 caracteres
    return pedido.trim().length >= 6;
}

// Función para obtener la información de seguimiento para un número de pedido
function getTrackingInfo(pedido) {
    // Llamar aqui desde la base de datos
    
    // Devuelve la información de seguimiento ficticia para el ejemplo
    return {
        estado: 'Enviado',
        fechaEnvio: '01/02/2023',
        numeroSeguimiento: 'ABC123456'
    };
}

// Función para mostrar la información de seguimiento en la página
function showTrackingInfo(infoSeguimiento) {
    let card = document.createElement('div');
    card.className = 'col-md-6 mb-4 product-card';
    
    let cardHtml = `
        <div class="card3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/imgs/loreal png.png" class="card-img-top" alt="Imagen del producto">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Loreal</h5>
                        <p class="card-text">Descripción breve del producto.</p>
                        <ul class="list-group">
                            <li class="list-group-item">Estado: <span class="badge bg-success">${infoSeguimiento.estado}</span></li>
                            <li class="list-group-item">Fecha de envío: ${infoSeguimiento.fechaEnvio}</li>
                            <li class="list-group-item">Número de seguimiento: ${infoSeguimiento.numeroSeguimiento}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    card.innerHTML = cardHtml;
    
    let row = document.querySelector('.row');
    row.appendChild(card);
}

// Función para mostrar un mensaje de error en la página
function showErrorMessage(message) {
    let errorParagraph = document.createElement('p');
    errorParagraph.className = 'text-danger';
    errorParagraph.textContent = message;
    
    let section = document.getElementById('seccion');
    section.appendChild(errorParagraph);
}

// Función para limpiar la información de seguimiento en la página
function clearTrackingInfo() {
    let row = document.querySelector('.row');
    row.innerHTML = '';
    
    let errorParagraph = document.querySelector('.text-danger');
    if (errorParagraph) {
        errorParagraph.remove();
    }
}