var nom = 0;
var per = 0;
$(document).ready(
  //funcion a ejecutar una vez este cargado el html
  function() {
    alertify.defaults.transition = "slide";
    alertify.defaults.theme.ok = "btn btn-primary";
    alertify.defaults.theme.cancel = "btn btn-danger";
    alertify.defaults.theme.input = "form-control";
    $('#onad').css('display', 'none');
    //verificamos los permisos del usuario según registro en SESSION
    $.ajax({
      url: 'php/sesion.php',
      type: 'POST',
      success: function(data) {
        var vars = data.split(",");

        switch (vars[0]) {
          case '1':
            //admin, puede estar en todos lados
            //se le habilita el modulo de acceder a admin de usuarios
            $('#onad').css('display', 'block');
            break;
          case '3':
            $('#onad').css('display', 'block');
            break;
          case '2':
            // window.location.href = "admin-contenido.html"
            //usuario
            //en este segmento si puede estar el usuario
            break;
          case '4':
            window.location.href = "revisor-contenido.html"
            break;
          default:
            //not set, reset
            window.location.href = "index.html"
        }

        document.getElementById('bv').innerHTML = "Bienvenido, " + vars[1];
        per = vars[0];
        nom = vars[1];
      }
    });

  }
)

function cerrarSesion() {
  $.ajax({
    url: 'php/cerrarSesion.php',
    type: 'POST',
    async: false,
    data: { usuario: nom, tipo: per },
    success: (respuesta) => {
      window.location.href = "index.html";
    }
  })
}
