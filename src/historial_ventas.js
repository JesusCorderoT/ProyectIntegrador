
//Arreglo que contiene datos muestra.
arregloDatos = [
    {'fecha': '06/28/2023', 'cliente': 'Walter', 'productos': 'Técnica Clásica', 'total': '$50'},
    {'fecha': '06/30/2023', 'cliente': 'Jesse', 'productos': 'Lash Shampoo', 'total': '$80'},
    {'fecha': '06/29/2023', 'cliente': 'Saul', 'productos': 'Lash Brush Desechables', 'total': '$65'},
    {'fecha': '06/27/2023', 'cliente': 'Hank', 'productos': 'Cepillo de Limpieza', 'total': '$40'},
    {'fecha': '06/26/2023', 'cliente': 'Skyler', 'productos': 'Removedor en Crema', 'total': '$70'},
    {'fecha': '06/25/2023', 'cliente': 'Gustavo', 'productos': 'Pluma de Gel Removedor', 'total': '$90'},
    {'fecha': '06/24/2023', 'cliente': 'Marie', 'productos': 'Lash Brush Desechables', 'total': '$55'},
    {'fecha': '06/23/2023', 'cliente': 'Ted', 'productos': 'Técnica Clásica', 'total': '$60'},
    {'fecha': '06/22/2023', 'cliente': 'Lydia', 'productos': 'Lash Shampoo', 'total': '$85'},
    {'fecha': '06/20/2023', 'cliente': 'Tuco', 'productos': 'Cepillo de Limpieza', 'total': '$45'},
    {'fecha': '06/17/2023', 'cliente': 'Walt Jr.', 'productos': 'Retiro de pestañas', 'total': '$60'},
]
//Función que llena dinámicamente la tabla
function insertarDatosTabla(datos){
    let tabla = document.getElementById("celdasTabla");
    for(let i=0; i<datos.length; i++){
        let fila =  `<tr>
                        <td scope="row">${datos[i].fecha}</th>
                        <td scope="row">${datos[i].cliente}</td>
                        <td scope="row">${datos[i].productos}</td>
                        <td scope="row">${datos[i].total}</td>
                    </tr>`
        tabla.innerHTML+=fila;
    }

}

insertarDatosTabla(arregloDatos);


