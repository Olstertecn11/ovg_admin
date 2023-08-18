
const fecha = document.getElementById('fecha');
const btn_crear = document.getElementById('btn_crear');
const estado = document.getElementById('estado');
const contenido = document.getElementById('contenido');
const titulo = document.getElementById('titulo');
var nom = 0;
var per = 0;


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


function changeFormState() {
  var item = document.querySelector("#add_form");
  var button = document.getElementById("btn_show");
  if (item.classList.contains("inactive")) {
    item.classList.remove(("inactive"));
    item.classList.add(("active"));
    button.innerText = "Ocultar Formulario";
  }
  else {
    button.innerText = "Mostrar Formulario";
    item.classList.add(("inactive"));
    item.classList.remove(("active"));
  }
}


function loadNews() {

}


