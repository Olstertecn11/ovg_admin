

document.getElementById("btnVisibility").addEventListener("click", () => {
  var _type = document.querySelector("#pass");
  if (_type.type === "password") {
    _type.type = "text";
    return;
  }
  _type.type = "password";
  return;
});

function verifySession() {

  //verificamos los permisos del usuario según registro en SESSION
  $.ajax({
    url: 'php/sesion.php',
    type: 'POST',
    success: function(data) {
      var vars = data.split(",");

      switch (vars[0]) {
        case '1':
          window.location.href = "admin-usuario.html"
          break;
        case '2':
          //usuario
          //en este segmento no puede estar el usuario
          window.location.href = "index-boletines.html"
          break;
        case '3':
          window.location.href = "admin-usuario.html"
        default:
      }
    }
  });
}


$(document).ready(
  //funcion a ejecutar una vez este cargado el html
  function() {
    alertify.defaults.transition = "slide";
    alertify.defaults.theme.ok = "btn btn-primary";
    alertify.defaults.theme.cancel = "btn btn-danger";
    alertify.defaults.theme.input = "form-control";

    verifySession();
    //seleccionare la clase / id que tendra el botón, y le agregare que ejecute tal codigo al suceder el 
    //evento tipo click
    $('#submitButton').on('click', function() {
      var name = document.getElementById('usuario').value;
      var pass = document.getElementById('pass').value;
      if (name.length < 1 || name == "" || name == null) {
        alertify.alert('Error', "Debe ingresar un nombre de usuario para iniciar sesión");
        return;
      }
      if (pass.length < 1 || pass == "" || pass == null) {
        alertify.alert('Error', "Debe ingresar la contraseña del usuario para iniciar sesión");
        return;
      }
      //ajax valida a donde enviar
      $.ajax({
        url: 'php/login.php',
        type: 'POST',
        data: { nomU: name, pass: pass },
        success: function(response) {
          switch (response) {
            case '1':
              //usuario normal
              window.location.href = "admin-usuario.html"
              break;
            case '2':
              //usuario admin
              window.location.href = "index-boletines.html"
              break;
            case '3':
              window.location.href = "admin-usuario.html"
              // alertify.alert("Error", "El usuario ingresado esta deshabilitado");
              break;
            case '6':
              alertify.alert("Error", "El usuario ingresado esta deshabilitado");
              break;
            default:
              //cualquier otro
              //fallo al inicio o credenciales incorrectas
              alertify.alert("Error", "Credenciales incorrectas")
            //return;
          }
          //console.log(response);
        }
      });
      //window.location.href = "admin-usuario.html";
      //despues de todo el proceso de iniciar sesión
      if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
      }
      //return false;
    })

    if (window.history.replaceState) {
      window.history.replaceState(null, null, window.location.href);
    }
  }
)



