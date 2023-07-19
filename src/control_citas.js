const Citas=[
    {'id':1, 'nombre':'Rebeca','fecha':'01/08/2023', 'horario':'9:00-12:00', 'estatus':'Pendiente'},
    {'id':2, 'nombre':'Laura','fecha':'12/08/2023', 'horario':'16:00-19:00', 'estatus':'Pendiente'},
    {'id':3, 'nombre':'Saul','fecha':'21/08/2023', 'horario':'19:00-22:00', 'estatus':'Pendiente'}
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
                                    <div class="col"> Cliente: ${element.nombre} </div>
                                    <div class="col"> Fecha agendada: ${element.fecha} </div>
                                    <div class="col"> Horario agendado: ${element.horario} </div>
                                    <span>Estatus: <span id="${i}"> ${element.estatus} </span> </span>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" onclick="cambiar(1, ${i})" href="#">Finalizar</a></li>
                                <li><a class="dropdown-item" onclick="cambiar(2, ${i})" href="#">Cancelar</a></li>
                            </ul>
                        </div>
                    </li>`
        lista.innerHTML+=cita;
        i++;
    });
}
mostrarCitas(Citas);
function cambiar(selection,i){
    const valorEstatus= document.getElementById(`${i}`);
    if(selection==1){
        Citas[i].estatus='Finalizada';
        valorEstatus.textContent=Citas[i].estatus;
    }
    if(selection==2){
        Citas[i].estatus='Cancelada';
        valorEstatus.textContent=Citas[i].estatus;
    } 
}