var nom = 0;
var per = 0;
$(document).ready(
  //funcion a ejecutar una vez este cargado el html
  function() {
    alertify.defaults.transition = "slide";
    alertify.defaults.theme.ok = "btn btn-primary";
    alertify.defaults.theme.cancel = "btn btn-danger";
    alertify.defaults.theme.input = "form-control";

    //validar sesión
    $.ajax({
      url: 'php/sesion.php',
      type: 'POST',
      success: function(data) {
        var vars = data.split(",");

        switch (vars[0]) {
          case '1':
            //admin, puede estar en todos lados
            //se le habilita el modulo de acceder a admin de usuarios
            break;
          case '2':
            //usuario
            //en este segmento si puede estar el usuario
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

    //seleccionare la clase / id que tendra el botón, y le agregare que ejecute tal codigo al suceder el 
    //evento tipo click
    $('#submitButton').on('click', function() {

      if (document.getElementById("pdf_subido").files.length == 0) {
        alertify.alert('Error', 'No ha seleccionado ningún archivo para cargar');
        return;
      }


      //otros datos a jalar, estos no pueden ser nulos, pero no lo serán porque hay elección x defecto
      //estos si se deben verificar
      var fecha = document.getElementById("fecha").value;
      var anio = "0";
      var mes = "22";
      var typeName = 0;
      if (fecha == "") {
        alertify.alert('Error', 'No ingreso una fecha válida');
        return;
      }
      var tipo = document.getElementById("tipo").value;
      /*alert(tipo)
      return;*/
      var nomN = document.getElementById("nombreNuevo").value;
      if (nomN == "") {
        nomN = "0";
      }
      else {
        //anallizamos si trae el .pdf
        var ext = nomN.substr(-4, 4)
        console.log(ext);
        if (ext === ".pdf" || ext === ".PDF") {
          //nada
        }
        else {
          nomN += ".pdf";//le agrega pdf automáticamente
          console.log('agregado')
        }
      }
      //solo agarremos los caracteres 23 y para el año
      anio = fecha.substr(2, 2);
      if (tipo == "s" || tipo == "pp") {
        mes = fecha.substr(5, 2);//agarremos 2022-01-21 caracs, 5 y 6
        typeName = "semanal";
      }
      else {
        if (tipo == "ee") {
          typeName = "evento especial";
        }
        else {
          typeName = "mensual";
        }
      }
      //función p' jalar los datos y mandar por ajax a php
      var datosDelForm = new FormData();//esta es la forma de guardar el archivo y jalarlo
      var archivos = $("#pdf_subido")[0].files[0];//selecciono el elemento que tiene el archivo, 
      //y jalo el archivo (el 0 es para indicar que jalo el 1er arch)
      datosDelForm.append('file', archivos);//a los datos que esta transmitiendo el firm
      //le agrego la imagen/archivo que jale del elemento que lo contiene

      //agregar variables al form data
      datosDelForm.append('mes', mes);
      datosDelForm.append('anio', anio);
      datosDelForm.append('tipoB', tipo);
      datosDelForm.append('nomN', nomN);
      datosDelForm.append('usuario', nom);
      datosDelForm.append('tipo', per);
      //validar si ya existe un archivo con el nombre ingresado y preguntarle al usuario si desea
      //actualizarlo
      var nombreAlertify = nomN;
      if (nombreAlertify == "0") {
        nombreAlertify = "del fichero subido";
      }
      $.ajax({
        url: 'php/buscarBol.php',
        type: 'POST',
        data: datosDelForm,
        contentType: false,
        processData: false,
        success: function(data) {
          console.log(data)
          if (data > 0) {
            //si existe, toca preguntar
            alertify.confirm("ALERTA", "Para la fecha seccionada (" + fecha + ")" + " ya existe un archivo de tipo " + typeName + ", con el nombre " + nombreAlertify + " <br> ¿Desea actualizarlo?",
              function() {
                alertify.warning("Se actualizará el archivo");
                //codigo de actualizacion
                $("#subiendo").css("display", "block");
                $.ajax({
                  url: 'php/actualizarBol.php',
                  type: 'POST',
                  data: datosDelForm,
                  contentType: false,
                  processData: false,
                  success: function(response) {
                    if (response != 0 && response != 2) {
                      $("#subiendo").css("display", "none");
                      alertify.success('¡Actualizado con éxito!');
                      //alert(response)
                    }
                    else {
                      $("#subiendo").css("display", "none");
                      alertify.error('Carga fallida');
                      if (response == 2) {
                        alertify.alert('Error', 'Ha seleccionado un tipo de archivo no válido');
                      }
                    }
                    console.log(response);
                  }
                })
                document.getElementById("pdf_subido").value = null;
                document.getElementById("nombreNuevo").value = "";
                if (window.history.replaceState) {
                  window.history.replaceState(null, null, window.location.href);
                }
              },
              function() {
                alertify.error("Se cancelo la actualización");
                //return;
              }
            )
          }
          else {
            //no existe, vamos normal
            //mostrar gif de que esta cargando:
            $("#subiendo").css("display", "block");
            $.ajax({
              url: 'php/subirBol.php',//archivo de php que recibira lso datos
              type: 'POST',
              data: datosDelForm,
              contentType: false,
              processData: false,
              success: function(response) {//en caso se logre contactar con el php
                if (response != 0 && response != 2) {//analizamos el valor de respuesta
                  //actualizo el loading gif:
                  $("#subiendo").css("display", "none");
                  //alertify exito
                  alertify.success('¡Cargado con éxito!');

                  //$("#resultado").attr("src", response);//modificamos el srfc del elemento img para probar si funciono
                } else {
                  $("#subiendo").css("display", "none");
                  //alert('Error al subir');//si no funciono mostramos error
                  //alertify error
                  alertify.error('Carga fallida');
                  if (response == 2) {
                    alertify.alert('Error', 'Ha seleccionado un tipo de archivo no válido');
                  }
                }
                console.log(response)
              }
            })

            //limpiamos el componente de imagen
            document.getElementById("pdf_subido").value = null;
            document.getElementById("nombreNuevo").value = "";
            //para evitar el cuadro de dialogo y valores repetidos
            if (window.history.replaceState) { // verificamos disponibilidad
              window.history.replaceState(null, null, window.location.href);
            }
            //return false;
          }
        },
        error: function(jqXHR, error) {

          alert("Error:" + jqXHR);
        }
      });
      return false;
    })
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
