
const fecha = document.getElementById('fecha');
const btn_crear = document.getElementById('btn_crear');
const estado = document.getElementById('estado');
const contenido = document.getElementById('contenido');
const titulo = document.getElementById('titulo');


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


