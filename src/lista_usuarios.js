const Usuarios=[
    {'id':1, 'nombre':'Rebeca', 'apellido':'Solís', 'email':'rebe@gmail.com','telefono':'5555555555', 'username':'Rebeliz', 'frecuente':true},
    {'id':2, 'nombre':'Marco', 'apellido':'Rodriguez', 'email':'rodma@gmail.com','telefono':'5555555566', 'username':'Markrod', 'frecuente':false},
    {'id':3, 'nombre':'Laura', 'apellido':'López', 'email':'lau123@gmail.com','telefono':'5555555678', 'username':'LauLau', 'frecuente':false},
    {'id':4, 'nombre':'Saúl', 'apellido':'Mendez', 'email':'mendez@gmail.com','telefono':'5555785555', 'username':'Saulez', 'frecuente':true},
    {'id':5, 'nombre':'Viviana', 'apellido':'Campos', 'email':'viv.cam@gmail.com','telefono':'5532555555', 'username':'CampViv', 'frecuente':false},
    {'id':6, 'nombre':'Clara', 'apellido':'Hernandez', 'email':'cldz@gmail.com','telefono':'5555555462', 'username':'Clarita', 'frecuente':true}
]

function mostrarUsuarios(lista){
    const espacioTarjetas=document.getElementById('cardSpace');
    lista.forEach(element => {
        const tarjetas=`<div class="my-2 p-3 ">
                            <div class="container-tablas"> 
                            <h6 id="titulo1" class="border-bottom  pb-2 mb-0">#U-<span>${element.id}</span></h6>
                            <div class="media text-muted pt-3">
                                    <h3 id="titulo2">${element.username}<h3> 
                                    <h4 id="titulo2">Nombre: <span>${element.nombre}</span> </h4>
                                    <h4 id="titulo2">Apellidos: <span>${element.apellido}</span> </h4>
                                    <h4 id="titulo2">Correo electrónico: <span> ${element.email} </span> </h4>
                                    <h4 id="titulo2">Número de teléfono: <span>${element.telefono}</span> </h4>
                                </p>
                            </div>
                            </div>
                        </div>`
    espacioTarjetas.innerHTML+=tarjetas;
    });
}
function usuariosFrecuentes(lista){
    const espacioFrecuentes=document.getElementById('frecuentes');
    lista.forEach(element => {
        console.log(typeof element.frecuente);
        if(element.frecuente==true){
            const clientes=`<div class="card-cliente">
                                <img class="rounded-circle" src="/assets/serviciosImg/usuario2.png" alt="image-usuario" width="140" height="140">
                                <h3 id="titulo2" class=resaltar>
                                <strong class="d-block">${element.username}</strong>
                                </h3>
                                <p id="titulo2" class=resaltar>${element.nombre} <span>${element.apellido}</span></p>
                            </div>`
            espacioFrecuentes.innerHTML+=clientes;
            console.log(element);
        }
    });
}
mostrarUsuarios(Usuarios);
usuariosFrecuentes(Usuarios);