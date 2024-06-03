$(function () {

    //Actualizar el año automaticamente
    let fecha = new Date();
    let anno = fecha.getFullYear();
    $("#anno").text(anno);

    //Actualizar edad
    $("#edad").text(anno - 1988);

    
    $('#dark-mode').click(function() {
        swichtMode();
    })

    // Animación de las skills
    let skillsSection = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsEffect();
            }
        });
    });
    
    const skills = document.getElementById("skills");
    observer.observe(skills);
    
    const skillsEffect = () => {
        if (!skillsSection) {
            skillsSection = true;
            setTimeout(() => {
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
            }, 500);
        }
    };

    const swichtMode = () => {
        if($('#dark-mode').is(':checked')) {
            $('.cont-banner, .container-header, #navLink, .net-circle, .section-dark').addClass('ligth'); 
            $('.cont-banner, .container-header, #navLink, .net-circle, .section-dark').removeClass('dark');
            $('.section-less-dark, .interesting').addClass('more-ligth'); 
            $('.net-circle').css('border', '1px solid #252a2e')
            $('.home, .cv').css('background', 'linear-gradient(to top, rgb(222, 221, 221, .8), rgb(195, 195, 195, 1))')
            $('.contacts').css({
                'background': ['linear-gradient(to top, rgba(255, 255, 255, .8), rgba(195, 195, 195, 1))','url("./img/cube-dark-texture.jpg")'],
                'background-size': 'cover',
                'background-position': 'center',
                'background-repeat': 'no-repeat',
                'width': '100%',                
                'padding': '50px 20px'}).addClass('ligth');

            $('.cv').addClass('ligth')
            $('.cv-cont-section').css('background-color', '#d0d0d0')
            $('.item').css('background-color', '#dedddd')
            $('.anim-button').css({'border': '2px solid #1e2326','color':'#1e2326'})
            $('.form-input').css({'background-color':'#dedddd'})
        } else {
            $('.cont-banner, .container-header, #navLink, .net-circle, .section-dark').addClass('dark');
            $('.cont-banner, .container-header, #navLink, .net-circle, .section-dark').removeClass('ligth');
            $('.net-circle').css('border', '1px solid #d9d9d9')
            $('.section-less-dark, .interesting').removeClass('more-ligth');
            $('.home, .cv').css('background', 'linear-gradient(to top, rgba(30,35,38,.8), rgba(30,35,38,1))')
            $('.contacts').css({
                'background': ['linear-gradient(to top, rgba(30,35,38,.8), rgba(30,35,38,1))','url("./img/cube-dark-texture.jpg")'],
                'background-size': 'cover',
                'background-position': 'center',
                'background-repeat': 'no-repeat',
                'width': '100%',                
                'padding': '50px 20px'}).removeClass('ligth');

            $('.cv').removeClass('ligth')
            $('.cv-cont-section').css('background-color', '#1e2326')
            $('.item').css('background-color', '#252a2e')
            $('.anim-button').css({'border':'2px solid white','color':'white'})
            $('.form-input').css({'background-color':'#252a2e'})
        }
    };
    
    
});
