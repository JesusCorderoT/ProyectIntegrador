//Arreglo que contiene datos muestra.
let arregloDatos = [
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

// Función que llena dinámicamente la tabla
function insertarDatosTabla(datos) {
    let tabla = document.getElementById("celdasTabla");
    tabla.innerHTML = " ";
    for (let i = 0; i < datos.length; i++) {
        let fila = `<tr>
                    <td scope="row">${datos[i].fecha}</th>
                    <td scope="row">${datos[i].cliente}</td>
                    <td scope="row">${datos[i].productos}</td>
                    <td scope="row">${datos[i].total}</td>
                </tr>`;
        tabla.innerHTML += fila;
    }
}
let datos = arregloDatos; // se inicializa con los datos originales
//Función que lee lo que se introduce en la búsqueda
function readSearch(){
    const input = document.querySelector('input[type="text"]');
    
    input.addEventListener("keyup", () => {
        let value=input.value.toLowerCase();
        console.log(`The term searched for was ${value}`);
        datos = filtrarTabla(value,arregloDatos); //se guardan los datos filtrados en datos
        //Se llama la función de insertar tablar para añadir los datos filtrados
        console.log(`The filter was ${JSON.stringify(datos)}`);
        insertarDatosTabla(datos);
    });   
}
function filtrarTabla(value,datos){
    let datosFiltrados=[];

    for(let i=0; i<datos.length;i++){
        valor=value.toLowerCase();
        let cliente=datos[i].cliente.toLowerCase();
        if(cliente.includes(valor)){
            datosFiltrados.push(datos[i]);
        }
    }
    
    return datosFiltrados;
}

readSearch();
insertarDatosTabla(datos);
// insertarDatosTabla(dummyData);
// console.log(dummyData);