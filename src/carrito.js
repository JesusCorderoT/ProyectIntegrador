//Arreglo que contiene datos muestra.
arregloDatos = [
    {'producto': 'Lash Shampoo', 'precio': '100', 'cantidad':'1'},
]

let botonAgregar = document.getElementById("botonAgregar");

//Función que llena dinámicamente el carrito
function insertarDatosTabla(datos){
    let contadorProductos=0;
    let tabla = document.getElementById("celdasTabla");
    let header= document.getElementById("headerTabla");
    let emptyMessage=document.getElementById("empty");
    header.innerHTML=
        `
        <th scope="col">Artículo</th> 
        <th scope="col">Precio</th>
        <th scope="col">Total</th>
        `;
    for(let i=0; i<datos.length; i++){
        let fila =  `<tr>
                        <td scope="row">${datos[i].producto}<br><img class="featurette-image img-fluid mx-auto" style="" src="/assets/serviciosImg/shampoo.png" data-holder-rendered="true">
                        </td> 
                        
                        <td scope="row">$${datos[i].precio}</td>

                        <td scope="row">${datos[i].cantidad}</td>
                    </tr>`;
        tabla.innerHTML+=fila;
        // tabla.innerHTML+=`<tr>
        // <td scope="row"></td> 
        
        //  <td scope="row"></td>

        //  <td scope="row">Mto: $${datos[i].precio}</td>
        //  </tr>`;
    contadorProductos+=1;
    }
    emptyMessage.innerHTML= `<p">Monto del pedido: $${datos[0].precio} </p>
    <p><a  href="/Pages/checkout.html" class="btn btn-dark"  id="irCheckout" role="button">Finalizar compra</a></p>`;
    // tabla.innerHTML+=`Monto:`;
}

//función flecha para agregar fila a la tabla cada que se presione el botón:
const agregar = () => insertarDatosTabla(arregloDatos);

