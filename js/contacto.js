document.addEventListener("DOMContentLoaded", function() {
let miFormulario = document.getElementById("formulario");
const mainContact = document.getElementById('mainContact');
const divContact = document.createElement('div');
const textContact = document.createElement('h4');


    mainContact.appendChild(divContact);

    miFormulario.addEventListener("submit", validarFormulario);

    function validarFormulario(e) {
        e.preventDefault();
        let formulario = e.target;

        // Guardar localStorage
        localStorage.setItem('nombre', formulario.children[1].value);
        localStorage.setItem('telefono', formulario.children[3].value);
        localStorage.setItem('horario', formulario.children[5].value);

        divContact.appendChild(textContact);
//sweet alert
        swal({
                    title: "Formulario enviado",
                    text: `Muchas gracias ${formulario.children[1].value}. Nos contactaremos a través del número ${formulario.children[3].value} en el horario ${formulario.children[5].value}.`,
                    icon: "success"
                }).then(() => {
                    // Limpia el formulario desp alert
                    miFormulario.reset();
                });
            }
    
});



