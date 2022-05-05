function opcionMenuPlataformas(piOpcion){

    if(piOpcion == 0){
        $("#divPrincipal").hide();
        $("#divAccesoPlataformas").show();
    }else if(piOpcion == 1){
        $("#divPrincipal").show();
        $("#divAccesoPlataformas").hide();
    }else if (piOpcion == 2) {
        if ($("ul[id='ulBachillerato']").is(':hidden')) {
            $("#ulBachillerato").show();
        } else {
            $("#ulBachillerato").hide();
        }
    } else if (piOpcion == 3) {
        if ($("ul[id='ulLicenciatura']").is(':hidden')) {
            $("#ulLicenciatura").show();
        } else {
            $("#ulLicenciatura").hide();
        }
    }
}

function opcionMenu(piSistema) {
    var sistemaUrl = "";

    switch(piSistema){
        case 0:
            sistemaUrl = "http://lms.uaeh.edu.mx/lms/presencial/login/index.php";
            $("#password").val($("#username").val());
            break;
        case 9:
            sistemaUrl = "http://200.57.51.148/dai/login/index.php";
            $("#password").val($("#username").val());
            break;
        case 11:
            sistemaUrl = "http://colpos.uaeh.edu.mx/lms/suv/login/index.php";
            $("#password").val($("#username").val());
            break;
		case 12:
            sistemaUrl = "http://lms.uaeh.edu.mx/lms/demsyt/login/index.php";
            $("#password").val($("#username").val());
            break;
        case 131:
            //sistemaUrl = "http://lms3.uaeh.edu.mx/lms/EJ3622/licenciatura/login/index.php";
            sistemaUrl = "../lmsAlumnoL/vtaVarificarAlumnoL.php";
            $("#password").val($("#username").val());
            break;
        case 13:
            sistemaUrl = "http://lms3.uaeh.edu.mx/lms/JD3621/licenciatura/login/index.php";
            $("#password").val($("#username").val());
            break;
        case 142:
            //sistemaUrl = "http://lms3.uaeh.edu.mx/lms/EJ3622/bachillerato/login/index.php";
            sistemaUrl = "http://docencia.uaeh.edu.mx/moodle/moodleserviciocomunitario/login/index.php";
            $("#password").val($("#username").val());
            break;
        case 141:
            //sistemaUrl = "http://lms3.uaeh.edu.mx/lms/EJ3622/bachillerato/login/index.php";
            sistemaUrl = "../lmsAlumnoB/vtaVarificarAlumnoB.php";
            $("#password").val($("#username").val());
            break;
        case 14:
            sistemaUrl = "http://lms3.uaeh.edu.mx/lms/JD3621/bachillerato/login/index.php";
            $("#password").val($("#username").val());
            break;
        case 15:
            sistemaUrl = "http://colpos.uaeh.edu.mx/colpos/login/index.php";
            $("#password").val($("#username").val());
            break;
        case 1:
            sistemaUrl = "/dce/serv_alum/serv_alum.php";
            break;
        case 2:
            accesoSyllabusAlumnoValidar();
            break;
        case 25:
            accesoRegresoPlataforma($("#username").val());
            break;
    }

    if(piSistema == 0 || piSistema == 11 || piSistema == 12 || piSistema == 1 || piSistema == 9 || piSistema == 13 || piSistema == 131 || piSistema == 14 || piSistema == 141 || piSistema == 142 || piSistema == 15 ){
        $("#frmSistemas").attr('action', sistemaUrl);
        $("#frmSistemas").submit();
    }
}

function accesoSyllabusAlumnoValidar() {
    var sModelo = '../modelo/modAccesoSyllabus.php',
        parametros = {};

    $.post(sModelo, parametros).done(function (respuesta) {
        if (respuesta.noError > 0)
            swal('Error', respuesta.mensaje, 'error');
        else
            window.location.href = "/sape/sapeMovil/vista/index.php";
    });
}

function accesoRegresoPlataforma(pNoCuenta) {
    var sModelo = '/accesoGeneralAlumnos/modelo/modVerificaIdentificadorID.php',
        parametros = {'noCuenta': pNoCuenta};

    $.post(sModelo, parametros).done(function (respuesta) {
        
        if (respuesta.noError > 0)
            swal('Error', respuesta.mensaje, 'error');
        else{
            $("#sIdentificador").val(respuesta.sIdentificador);
            var principal = "/accesoGeneralAlumnos/vista/vtaPrincipal.php";
            $("#frmRegresa").attr('action', principal);
            $("#frmRegresa").submit();
        }
    });
}
