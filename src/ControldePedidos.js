
    fetch('../Pages/TarjetaDePedidos.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('pedidos').innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar los pedidos:', error);
            });    



