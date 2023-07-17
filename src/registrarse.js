//==========Declarando el array de usuarios============ 
const usuariosRegistrados=[];

const formulario=document.getElementById('registro');
const emailInput=document.getElementById('email');
const nombreInput=document.getElementById('nombre');
const apellidoInput=document.getElementById('apellidos');
const telInput=document.getElementById('telefono');
const usuarioInput=document.getElementById('usuario');
const contasenaInput=document.getElementById('contraseña');
const submitBtn=document.getElementById('submit-btn');


const emailREGEX=new RegExp (/^([\w\.\_])*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{3,})$/);
const nombreREGEX=new RegExp (/^[a-zA-z\s]{2,}$/);
const usuarioREGEX=new RegExp (/^[a-zA-z]{4,}$/);
const telREGEX=new RegExp (/\d{10}/);



formulario.addEventListener('submit',(evento)=>{
    if(!nombreREGEX.test(nombreInput.value)||!nombreREGEX.test(apellidoInput.value)||!emailREGEX.test(emailInput.value)||!telREGEX.test(telInput.value)||!usuarioREGEX.test(usuarioInput.value)||!(contasenaInput.value.length>=6)){
       evento.preventDefault();
        window.alert("Formato de entrada incorrecto, revise los campos proporcionados"); 
    } else{
        
        console.log("Se ha enviado información");
    }
})