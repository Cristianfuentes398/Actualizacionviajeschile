const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const mensaje="correo enviado correctamente";

document.getElementById("enviar").onclick = function(){
    alert(mensaje);
}
    


