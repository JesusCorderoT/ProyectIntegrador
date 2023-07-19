//Ejemplos de array con pedidos
const pedidos=[
    {'Orden':'001','Usuario':'Casme','Monto':'$500','Fecha':'20/06/2023','Estatus':'Por confirmar'},
    {'Orden':'002','Usuario':'MariC','Monto':'$350','Fecha':'23/06/2023','Estatus':'Confirmada'},
    {'Orden':'003','Usuario':'Ronny','Monto':'$980','Fecha':'24/06/2023','Estatus':'Enviada'},
    {'Orden':'004','Usuario':'Cris','Monto':'$150','Fecha':'24/06/2023','Estatus':'En camino'},
    {'Orden':'005','Usuario':'Josue','Monto':'$720','Fecha':'28/06/2023','Estatus':'Entregada'}
]

function mostrarPedidos(datos){
    let i=0;
    const listado=document.getElementById('lista');
    datos.forEach(element => {
        let seccion=`<li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="titulos">Orden <span>${element.Orden}</span></div>
                            <div class="container text-center">
                                <div class="row row-cols-auto">
                                    <div class="col"> Usuario: <span>${element.Usuario}</span></div>
                                    <div class="col"> Monto: <span>${element.Monto}</span> </div>
                                    <div class="col"> Fecha: <span>${element.Fecha}</span> </div>
                                    <div class="col"> Estatus: <span id="${i}">${element.Estatus}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-dark" type="button" data-bs-toggle="dropdown" id="estatus" aria-expanded="false">
                            <i class="bi bi-chevron-down"></i>
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item"  onclick="cambiar(1, ${i})" href="#">Confirmada</a></li>
                            <li><a class="dropdown-item" data-target="Enviada" onclick="cambiar(2,${i})" href="#">Enviada</a></li>
                            <li><a class="dropdown-item" data-target="En camino" onclick="cambiar(3,${i})" href="#">En camino</a></li>                              
                            <li><a class="dropdown-item" data-target="Entregada" onclick="cambiar(4,${i})" href="#">Entregada</a></li>
                            </ul>
                        </div>
                    </li>`
        listado.innerHTML+=seccion
        i++;
    });
}
mostrarPedidos(pedidos);

function cambiar(selection,i){
    const valorEstatus= document.getElementById(`${i}`);
    if(selection==1){
        pedidos[i].Estatus='Confirmada';
        valorEstatus.textContent=pedidos[i].Estatus;
    }
    if(selection==2){
        pedidos[i].Estatus='Enviada';
        valorEstatus.textContent=pedidos[i].Estatus;
    }
    if(selection==3){
        pedidos[i].Estatus='En camino';
        valorEstatus.textContent=pedidos[i].Estatus;
    }
    if(selection==4){
        pedidos[i].Estatus='Entregada';
        valorEstatus.textContent=pedidos[i].Estatus;
    }
    
}

