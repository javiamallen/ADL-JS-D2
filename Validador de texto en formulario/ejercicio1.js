/* a validar un formulario de contacto utilizando el evento
submit y las expresiones regulares que permitan el ingreso de caracteres desde la
“A-a” hasta la “Z-z” mediante el método test() de JavaScript, mostrando un mensaje
de error y/o éxito cuando corresponda. */
let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarErrores();

     //clases desde html 
    let nombre = document.querySelector(".nombre").value;
    let asunto = document.querySelector(".asunto").value;
    let mensaje = document.querySelector(".mensaje").value;

    let resultado =validar(nombre, asunto, mensaje);

    if(resultado = true) {
        exito();
    }
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

function exito() {
    document.querySelector(".resultado").innerHTML = "! Formulario enviado con exito !";
}

function validar(nombre, asunto, mensaje){
    let pasalavalidacion = true;

    // Validar campo nombre // 

    let validacionNombre = /[a-zA-Z]/gim;

    if(validacionNombre.test(nombre) == false) {
       document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
       pasalavalidacion = false;
    }

    // Validar campo Asunto //

    let validacionAsunto = /[a-zA-Z]/gim;

    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
        pasalavalidacion = false;


    }

    // Validad campo Mensaje //
    let validacionMensaje = /[a-zA-Z]/gim;

    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido";
        pasalavalidacion = false;
    }    

    return pasalavalidacion;

}