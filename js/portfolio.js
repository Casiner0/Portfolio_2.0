$(function () {

    //Actualizar el año automaticamente
    let fecha = new Date();
    let anno = fecha.getFullYear();
    $("#anno").text(anno);

    //Actualizar edad
    $("#edad").text(anno - 1988);

    //Enviar mensaje con EmailJS
    $("#alerta_enviado").hide();
    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        if (!validarTexto($("#Name"))) {
            $("#Name").addClass("no-valid");
            
            dangerAlert();
            return false;
        } else {
            $("#Name").removeClass("no-valid");
            successAlert();
        }

        if (!validarCorreo($("#Email"))) {
            $("#Email").addClass("no-valid");
            
            dangerAlert();
            return false;
        } else {
            $("#Email").removeClass("no-valid");
            successAlert();
        }

        if ($("#Message").val() == "") {
            $("#Message").addClass("no-valid");
            dangerAlert();
            return false;
        } else {
            $("#Message").removeClass("no-valid");
            successAlert();
        }

        btn.value = 'Enviando ...';
        const serviceID = 'default_service';
        const templateID = 'template_svkpfgn';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                MostrarMensaje($("#alerta_enviado"));
                $("#form").trigger('reset');
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });

        
});
