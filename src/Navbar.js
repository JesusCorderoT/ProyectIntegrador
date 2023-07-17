fetch('../Pages/navbar3.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbarContainer').innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar la barra de navegación:', error);
            });