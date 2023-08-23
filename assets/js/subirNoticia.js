const fecha = document.getElementById('fecha');
const btn_crear = document.getElementById('btn_crear');
const estado = document.getElementById('estado');
const contenido = document.getElementById('contenido');
const titulo = document.getElementById('titulo');
var nom = 0;
var per = 0;
let all_news = "";


function saveInfo() {
  var datosDelForm = new FormData();
  var archivos = $("#file")[0].files[0];
  datosDelForm.append('file', archivos);
  datosDelForm.append('titulo', titulo.value);
  datosDelForm.append('contenido', contenido.value);
  datosDelForm.append('estado', estado.value);
  datosDelForm.append('fecha', fecha.value);
  datosDelForm.append('filename', archivos.name);
  $.ajax({
    url: 'php/noticias/guardarNoticia.php',
    type: 'POST',
    data: datosDelForm,
    contentType: false,
    processData: false,
    success: function(response) {
      clearAll();
      Swal.fire({ title: 'Mensaje', text: response, confirmButtonText: 'Cool' });
    }
  });
}

function clearAll() {
  fecha.value = "";
  estado.value = "";
  contenido.value = "";
  titulo.value = "";
}


btn_crear.addEventListener('click', () => {
  saveInfo();
});


$(document).ready(
  function() {
    //datos sesión
    $.ajax({
      url: 'php/sesion.php',
      type: 'POST',
      success: function(data) {
        var vars = data.split(",");
        per = vars[0]
        nom = vars[1];
      }
    });
  }
)

