const emailInput=document.getElementById('email');
const nombreInput=document.getElementById('nombre');
const apellidoInput=document.getElementById('apellidos');
const telInput=document.getElementById('telefono');
const usuarioInput=document.getElementById('usuario');
const contaseñaInput=document.getElementById('contraseña');
const submitBtn=document.getElementById('submit-btn');
console.log("imprimiendo");

const emailREGEX=new RegExp (/^([\w\.\_])*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{3,})$/);
const nombreREGEX=new RegExp (/^[a-zA-z\s]{2,}$/);
const telREGEX=new RegExp (/d{10}/);

nombreInput.addEventListener('input',e=>{
    if(nombreInput.value==/^[a-zA-z\s]{2,}$/){
        console.log("si")
    }else{console.log("false")}
})

