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



//Animation Events

let _new_title = document.getElementById("title-preview").innerText;
let _new_content = document.getElementById("contenido-preview").innerText;
let _new_date = document.getElementById("date-preview").innerText;
let url_image = document.getElementById("img-preview").src;

document.getElementById("titulo").addEventListener('input', (e) => {
  _new_title = e.target.value;
  document.getElementById("title-preview").innerText = e.target.value;
});

document.getElementById("contenido").addEventListener('input', (e) => {
  _new_content = e.target.value;
  if (_new_content.length > 500) {
    Swal.fire({ title: '¡ERROR!', text: 'Ha superado el maximo de caracteres', confirmButtonText: 'Cool' });
    return;
  }
  document.getElementById("contenido-preview").innerText = _new_content;
});


document.getElementById("fecha").addEventListener('input', (e) => {
  _new_date = e.target.value;
  document.getElementById("date-preview").innerText = e.target.value;
});

document.getElementById("file").addEventListener('input', (e) => {
  const [file] = document.getElementById("file").files;
  if (file) {
    url_image = URL.createObjectURL(file);
    document.getElementById("img-preview").src = url_image;
  }
});




function openModal() {
  var modal = createModal();
  modal.open();
  modal.setContent(`
      <div class="col-md-12">
        <div class="row" style="background:#000000;padding: 20px">
          <div class="col-md-7">
            <img style="width: 100%;" src="${url_image}" alt="">
          </div>
          <div class="col-md-4 " style="margin-left: 3.5%">
            <h1 class="card-title text-center" id="title-preview" style="color:#E35816;">${_new_title}</h1>
            <p class=" mt-4 text-white " style="text-align: justify;" id="contenido-preview">
            ${_new_content}
            </p>
            <p class="mt-4  text-center" style="color:#E35816" id="date-preview">${_new_date}</p>
          </div>
        </div>
  `);


}

function createModal() {
  return new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
      console.log('modal open');
    },
    onClose: function() {
      console.log('modal closed');
    },
    beforeClose: function() {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
      return false; // nothing happens
    }
  });
}


