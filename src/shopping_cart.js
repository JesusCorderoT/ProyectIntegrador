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
//Se crean variables para guardar los datos de los productos y los del carrito
let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));
let orderPrice = 0;
let orderFinalPrice=0;
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

//Se crea la función para remover productos del carrito 
function removeItemFromCart(productId){
    //obtner aquí el valor del precio original del item a remover
    let updatePrices = updatePrice(productId,0);
    orderFinalPrice= updatePrices.orderPrice -= products[(productId-1)].price;
    console.log(orderFinalPrice);
    let tempCart = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(tempCart));
    localStorage.setItem("orderFinalPrice",  JSON.stringify(orderFinalPrice));
    return orderFinalPrice;
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
} 


