/**==============================================
 * VALIDANDO Y LIMPIANDO FORMULARIO
 ================================================*/
 function validarFormulario(){
    let nomForm = document.forms["formulario"]["nombre"].value;
        if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
	    const $nombre = document.querySelector('#idMNombre')
        $nombre.classList.add('msj-formulario')
        mostrarMensaje($nombre)
        $nombre.innerHTML='El campo es obligatorio y solo texto'
        removeMensaje($nombre)
        document.querySelector("#nombre").focus();
        return false;
    }

    let apeForm = document.forms["formulario"]["apellido"].value;
        if ( apeForm == null || apeForm == "" || apeForm.length == 0  || /^\s+$/.test(apeForm) || !isNaN(apeForm) ) {
	    const $apellido = document.querySelector('#idMApellido')
        $apellido.classList.add('msj-formulario')
        mostrarMensaje($apellido)
        $apellido.innerHTML='El campo es obligatorio y solo texto'
        removeMensaje($apellido)
        document.querySelector("#apellido").focus();
	    return false;
    }

    let emailForm = document.forms["formulario"]["email"].value;
        if( emailForm== null || emailForm == "" || emailForm.length == 0 || (/\w.%+([-+.']\w+)*@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/.test(emailForm)) || !isNaN(emailForm)) {
        const $mail = document.querySelector('#idMEmail')
        $mail.classList.add('msj-formulario')
        mostrarMensaje($mail)
        $mail.innerHTML='El campo es obligatorio y formato establecido'
        removeMensaje($mail)
        document.querySelector("#email").focus();
        return false;
    }

    let celularForm = document.forms["formulario"]["celular"].value;
        if( isNaN(celularForm) || celularForm == null || celularForm == "" || celularForm.length == 0 || /^\s+$/.test(celularForm)){
        const $celular = document.querySelector('#idMCelular')
        $celular.classList.add('msj-formulario')
        mostrarMensaje($celular)
        $celular.innerHTML='El campo es obligatorio y solo número'
        removeMensaje($celular)
        document.querySelector("#celular").focus();
	    return false;
    }
    let mensajeForm = document.forms["formulario"]["mensaje"].value;
        if(mensajeForm == null || mensajeForm == "" || mensajeForm.length == 0 || /^\s+$/.test(mensajeForm)){
        const $mensaje = document.querySelector('#idTextArea')
        $mensaje.classList.add('msj-formulario')
        mostrarMensaje($mensaje)
        $mensaje.innerHTML='El campo es obligatorio'
        removeMensaje($mensaje)
        document.querySelector("#idTextArea").focus();
	    return false;
    }
}

function removeMensaje(mensaje){
    setTimeout(() => {
        mensaje.innerHTML=""
        mensaje.style='display:none'     
    }, 3000);
}
function mostrarMensaje(mensaje){
    mensaje.style='display:block'
}
window.addEventListener('pageshow', function() {
    document.querySelector(".formulario").reset();
});