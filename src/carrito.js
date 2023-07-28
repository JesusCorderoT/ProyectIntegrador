/// Parte con JSON
function fetchdata(){
    fetch("productos.json") // se hace fetch de la api
    .then(response=>response.json()) // se reseuelve la promesa
    .then(data => { //se almacena la información en localstorage y se crea una un arreglo vacío para el carrito
        localStorage.setItem("products", JSON.stringify(data));
        if(!localStorage.getItem("cart")){
            localStorage.setItem("cart", "[]");
        }
    }
    ); 
}
fetchdata();

let products = JSON.parse(localStorage.getItem("products")); //objeto que obtiene los productos del local storage.
let cart = JSON.parse(localStorage.getItem("cart")); //objeto que tiene los productos del carrito
let orderPrice = 0;
let orderFinalPrice=0;

console.log(products);
console.log(cart);
//Se crean variables para guardar los datos de los productos y los del carrito
//Arreglo que contiene datos muestra.
arregloDatos = [
    {'producto': 'Lash Shampoo', 'precio': '100', 'cantidad':'1'},
]

let botonAgregar = document.getElementById("botonAgregar");

//Función que llena dinámicamente el carrito
function insertarDatosTabla(datos){
    let tabla = document.getElementById("celdasTabla");
    let header= document.getElementById("headerTabla");
    let emptyMessage=document.getElementById("empty");
    tabla.innerHTML="";
    header.innerHTML=
        `
        <th scope="col">Artículo</th> 
        <th scope="col">Precio</th>
        <th scope="col">Total</th>
        `;
    for(let i=0; i<cart.length; i++){
        let fila =  `<tr>
                        <td scope="row">${cart[i].name}<br><img class="featurette-image img-fluid mx-auto" style="" src="${cart[i].image}" data-holder-rendered="true">
                        </td> 
                        
                        <td scope="row">$${cart[i].price}</td>

                        <td scope="row">${cart[i].quantity}</td>
                    </tr>`;
        tabla.innerHTML+=fila;
    }
    let monto = localStorage.getItem("orderFinalPrice");
    console.log(monto);
    emptyMessage.innerHTML= `<p id="monto" ">Monto del pedido: $${monto}</p>
    <p id="botonVaciar"><a class="btn btn-dark botonAgregar" onclick="clearCart();" id="Vaciar" role="button">Vaciar carrito</a></p>
    <p id="botonCheckout"><a  href="/Pages/checkout.html" class="btn btn-dark"  id="irCheckout" role="button">Finalizar compra</a></p>`;
}

//función flecha para agregar fila a la tabla cada que se presione el botón:
const agregar = (productId) => {
    addItemToCart(productId);
    insertarDatosTabla(arregloDatos);
}
    

/////////////////////////////////////////


//Se crea la función para agregar productos al carrito 
function addItemToCart(productId){
    let product = products.find(function(item){
        return item.id == productId;
    }); 
    if(cart.length == 0){
        cart.push(product);
    }else{
    let res = cart.find(element => element.id == productId);
    if(res === undefined){
        cart.push(product);
    }}
    localStorage.setItem("cart", JSON.stringify(cart));
    orderFinalPrice = updatePrice(productId,1);
    console.log(orderFinalPrice.orderPrice);
    localStorage.setItem("orderFinalPrice",  JSON.stringify(orderFinalPrice.orderPrice));
}


//Se crea una función que actualiza la cantidad
function updatePrice(productId, quantity){

    let itemPrice=productId.price;

    for(let product of cart){
        if(product.id == productId){
            product.quantity = quantity;
            itemPrice= parseFloat(product.price)*quantity;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    orderPrice+=itemPrice;
    return {
        itemPrice: itemPrice,
        orderPrice: orderPrice,
    };

}
//función para vacíar el carrito completamente
function clearCart(){
    localStorage.clear();
    fetchdata();
    orderPrice=0;
    let tabla = document.getElementById("celdasTabla");
    let header= document.getElementById("headerTabla");
    let message =  ` <p id="empty" style="text-align: center; ">El carrito está vacío.</p>`;
    tabla.innerHTML="";
    tabla.innerHTML=message;
    header.innerHTML="";
    let montoMessage=document.getElementById(monto);
    monto.innerHTML= ` <p id="empty" style="text-align: center; "></p>`;
    //quitar botones de vaciar carrito y finalizar compra
} 

console.log(products);
console.log(cart);
