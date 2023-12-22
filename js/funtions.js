
//Alert
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

// Muestra y oculta el menu en modo responsive
let showMenu = false;

const showHideMenu = () => {
    if (showMenu) {
        $("#nav").removeClass("responsive");
        showMenu = false;
    } else {
        $("#nav").addClass("responsive");
        showMenu = true;
    }
}

const select = () => {
    $("#nav").removeClass("responsive");
    showMenu = false;
}

// Animación de las skills
window.onscroll = function(){   // Detecta el scrolling para hacer la animación.
    
    skillsEffect();
}

const skillsEffect = () => {
    let skills = document.getElementById("skills");
    let skillsDist = window.innerHeight - skills.getBoundingClientRect().top;
    if (skillsDist >= 300) {
        console.log("Te veo");
        let hability = document.getElementsByClassName("progress");
        hability[0].classList.add("javascript");
        hability[1].classList.add("php");
        hability[2].classList.add("htmlcss");
        hability[3].classList.add("java");
        hability[4].classList.add("sql");
        hability[5].classList.add("odoo15");
        hability[6].classList.add("react");
        hability[7].classList.add("photoshop");
        hability[8].classList.add("max-studio");
        hability[9].classList.add("c-logos");
        hability[10].classList.add("e-video");
        
    }
}