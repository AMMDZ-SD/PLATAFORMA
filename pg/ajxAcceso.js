function accesar() {
	if ($.trim($("#txtUsuario").val()) == '') {
		swal({
			title: "Error de acceso",
			text: "Introduzca su usuario.",
			type: "warning"
		});
		$("#txtUsuario").focus();
		return;
	}
	else if ($.trim($("#txtContrasenya").val()) == '') {
		swal({
			title: "Error de acceso",
			text: "Introduzca su contrase\u00f1a.",
			type: "warning"
		});
		$("#txtContrasenya").focus();
		return;
	}

	$("#btnEntrar").html("Validando acceso...");
	$("#btnEntrar").attr('disabled', 1);

	var parametros = $("#frmAcceso").serialize();

	$.post("modelo/modAccesoAlumnos.php", parametros, function (data, status) {
		if (status == 'success') {
			$("#btnEntrar").attr('disabled', 0);
			$("#btnEntrar").html("<i class='fa fa-sign-in fa-lg'></i>&nbsp;&nbsp;Entrar");
			var json = JSON.parse(data);
			if (json.error > 0) {
				swal({
					title: "Error de acceso",
					text: json.mensaje,
					type: "error"
				});
				$("#btnEntrar").innerHTML = "Entrar";
			}
			else {
				$("#username").val(json.sUser);
				$("#sIdentificador").val(json.sIdentificador);

				$('#frmAcceso').attr('action', json.sIndex);
				$('#frmAcceso').submit();
			}
		}
	});
}

function cerrarSesionGeneral(){
	 window.location = "../index.php";
}