document.addEventListener('DOMContentLoaded', (e) => {
    const form_contacto = document.getElementById('form-contacto');
    if (form_contacto) {
        form_contacto.addEventListener('submit', (e) => {
            e.preventDefault();
            let fullname_contact = document.getElementById('fullname_contact');
            let subject_contact = document.getElementById('subject_contact');
            let message_contact = document.getElementById('message_contact');

            if (fullname_contact.value.trim() === "") {
                Swal.fire({
                    title: "Aviso",
                    text: "Para continuar ingresa tu nombre completo.",
                    icon: "warning"
                });
                return;
            }
            if (subject_contact.value.trim() === "") {
                Swal.fire({
                    title: "Aviso",
                    text: "Para continuar ingresa el asunto del mensaje.",
                    icon: "warning"
                });
                return;
            }
            if (message_contact.value.trim() === "") {
                Swal.fire({
                    title: "Aviso",
                    text: "El mensaje es obligatorio.",
                    icon: "warning"
                });
                return;
            }
            Swal.fire({
                title: "Éxito",
                text: "Se ha enviado un mensaje a José Deodanes",
                icon: "success"
            });
            form_contacto.reset();
        })
    }
});