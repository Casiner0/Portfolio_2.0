$(function () {

    //Alerta
    const MostrarMensaje = (div) => {
        div.slideDown(1000);
        setTimeout(function () {
            div.slideUp(500);
        }, 3000);
    }

    const dangerAlert = () => {
        MostrarMensaje($("#alerta_enviado"));
        $("#alerta_enviado").text("Campo vacío o incorrecto").addClass("dangerAlert").removeClass("alert");
    }

    const successAlert = () => {
        MostrarMensaje($("#alerta_enviado"));
        $("#alerta_enviado").text("Mensaje Enviado").removeClass("dangerAlert").addClass("alert");
    }

    //Enviar mensaje con EmailJS
    $("#alerta_enviado").hide();
    const btn = $('#button');

    $('#form').on('submit', function(event) {
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
