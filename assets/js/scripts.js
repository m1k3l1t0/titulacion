
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        Form validation
    */
    $('.register form').submit(function(){
        $(this).find("label[for='firstname']").html('Nombre');
        $(this).find("label[for='lastname']").html('Apellido Paterno');
        $(this).find("label[for='username']").html('Usuario');
        $(this).find("label[for='email']").html('Correo electronico');
        $(this).find("label[for='password']").html('Contraseña');
        ////
        var firstname = $(this).find('input#firstname').val();
        var lastname = $(this).find('input#lastname').val();
        var username = $(this).find('input#username').val();
        var email = $(this).find('input#email').val();
        var password = $(this).find('input#password').val();
        if(firstname == '') {
            $(this).find("label[for='firstname']").append("<span style='display:none' class='red'> - Ingresa tu nombre.</span>");
            $(this).find("label[for='firstname'] span").fadeIn('medium');
            return false;
        }
        if(lastname == '') {
            $(this).find("label[for='lastname']").append("<span style='display:none' class='red'> - Ingresa tu apellido.</span>");
            $(this).find("label[for='lastname'] span").fadeIn('medium');
            return false;
        }
        if(username == '') {
            $(this).find("label[for='username']").append("<span style='display:none' class='red'> - Ingresa un nombre de usuario válido.</span>");
            $(this).find("label[for='username'] span").fadeIn('medium');
            return false;
        }
        if(email == '') {
            $(this).find("label[for='email']").append("<span style='display:none' class='red'> - Ingresa tu correo electronico.</span>");
            $(this).find("label[for='email'] span").fadeIn('medium');
            return false;
        }
        else{
            if($(this).val().indexOf('@', 0) == -1 || $(this).val().indexOf('.', 0) == -1) {
                $(this).find("label[for='email']").append("<span style='display:none' class='red'> - Ingresa un correo electronico válido.</span>");
                $(this).find("label[for='email'] span").fadeIn('medium');
                return false;
            }
        }
        if(password == '') {
            $(this).find("label[for='password']").append("<span style='display:none' class='red'> - Ingresa tu contraseña.</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            return false;
        }
    });


});


