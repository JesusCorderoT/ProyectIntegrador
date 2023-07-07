const formulario=document.getElementById('registro');

const emailInput=document.getElementById('email');
const nombreInput=document.getElementById('nombre');
const apellidoInput=document.getElementById('apellidos');
const telInput=document.getElementById('telefono');
const usuarioInput=document.getElementById('usuario');
const contaseñaInput=document.getElementById('contraseña');
const submitBtn=document.getElementById('submit-btn');


const emailREGEX=new RegExp (/^([\w\.\_])*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{3,})$/);
const nombreREGEX=new RegExp (/^[a-zA-z\s]{2,}$/);
const usuarioREGEX=new RegExp (/^[a-zA-z0-9]{4,}$/);
const telREGEX=new RegExp (/\d{10}/);

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    console.log(nombreInput.value);
    console.log(apellidoInput.value);
    console.log(emailInput.value);
    console.log(telInput.value);
    console.log(usuarioInput.value);
    if(!nombreREGEX.test(nombreInput.value)||!nombreREGEX.test(apellidoInput.value)||!emailREGEX.test(emailInput.value)||!telREGEX.test(telInput.value)||!usuarioREGEX.test(usuarioInput.value)){
        window.alert("Formato de entrada incorrecto, revise los campos proporcionados"); 
    } 
})