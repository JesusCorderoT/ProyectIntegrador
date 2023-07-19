const citasUsuario=[
    {'id':1,'fecha':'01/08/2023', 'horario':'9:00-12:00', 'estatus':'Finalizada'},
    {'id':2, 'fecha':'12/08/2023', 'horario':'16:00-19:00', 'estatus':'Pendiente'},
    {'id':3,'fecha':'21/08/2023', 'horario':'19:00-22:00', 'estatus':'Pendiente'}
]

function mostrarCitas(datos){
    const lista=document.getElementById('lista');
    let i=0;
    datos.forEach(element => {
        const cita=`<li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">No. cita: ${element.id}</div>
                                 <div class="container text-center">
                                        <div class="row row-cols-auto">
                                            <div class="col"> Fecha agendada: ${element.fecha} </div>
                                            <div class="col"> Hora agendada: ${element.horario} </div>                            
                                            <span>Estatus: <span id="${i}">${element.estatus}</span></span>
                                                
                                         </div>
                                    </div>
                            </div>
                                <div class="dropdown">
                                    <button class="btn btn-dark" type="button" onclick="cancelar(${i})">
                                        Cancelar
                                    </button>     
                                </div>
                        </li>`
        lista.innerHTML+=cita;
        i++;
    });
}
mostrarCitas(citasUsuario);
function cancelar(elemento){
    const valorEstatus=document.getElementById(`${elemento}`);
    if(citasUsuario[elemento].estatus='Finalizada'){ citasUsuario[elemento].estatus='Finalizada';}
    else{citasUsuario[elemento].estatus='Cancelada';} 
    valorEstatus.textContent=citasUsuario[elemento].estatus;
}
