//Arreglo que contiene datos muestra.
arregloDatos = [
    {'producto': 'Lash Shampoo', 'precio': '100', 'cantidad':'1'},
]

let botonAgregar = document.getElementById("botonAgregar");

//Función que llena dinámicamente el carrito
function insertarDatosTabla(datos){
    let tabla = document.getElementById("celdasTabla");
    for(let i=0; i<datos.length; i++){
        let fila =  `<tr>
                        <td scope="row">${datos[i].producto}<br><img class="featurette-image img-fluid mx-auto" data-src="" alt="200x250" style="width: 200px; height: 250px;" src="/assets/serviciosImg/shampoo.png" data-holder-rendered="true">
                        </td> 
                        
                        <td scope="row">$${datos[i].precio}</td>

                        <td scope="row"><input type="number" value="1"></td>
                    </tr>`
        tabla.innerHTML+=fila;
        tabla.innerHTML+=`<tr>
        <td scope="row"></td> 
        
        <td scope="row"></td>

        <td scope="row">Total: $${datos[i].precio}</td>
    </tr>`
    }

}

//función flecha para agregar fila a la tabla cada que se presione el botón:
const agregar = () => insertarDatosTabla(arregloDatos);

