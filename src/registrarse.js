//==========Declarando el objeto usuario============ 
class usuarioObjeto{
    nombre="";
    apellidos='';
    email='';
    telefono=0;
    username='';
    contrasena='';

    constructor (nombre,apellidos,email,telefono,username,contrasena){
        nombre=this.nombre;
        apellidos=this.apellidos;
        email=this.email;
        telefono=this.telefono;
        username=this.username;
        contrasena=this.contrasena;
    }
    comprar(){
        console.log("Pagando pedido");
    }
    agendar(){
        console.log("Agendando citas");
    }
    comentar(){
        console.log("hacer comentario");
    }
}
const usuariosRegistrados=[];

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
const usuarioREGEX=new RegExp (/^[a-zA-z]{4,}$/);
const telREGEX=new RegExp (/\d{10}/);



formulario.addEventListener('submit',(evento)=>{
    
    console.log(typeof nombreInput.value);
   
    if(!nombreREGEX.test(nombreInput.value)||!nombreREGEX.test(apellidoInput.value)||!emailREGEX.test(emailInput.value)||!telREGEX.test(telInput.value)||!usuarioREGEX.test(usuarioInput.value)){
       evento.preventDefault();
        window.alert("Formato de entrada incorrecto, revise los campos proporcionados"); 
    } else{
        
        console.log("Se ha enviado información");
    }
})