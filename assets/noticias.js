
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
  var mytable = document.getElementById("news_table");
  $.ajax({
    url: 'php/noticias/obtenerNoticias.php',
    type: 'POST',
    async: false,
    success: function(data) {
      all_news = JSON.parse(data);
      $.each(JSON.parse(data), (key, item) => {
        mytable.innerHTML += `
            <tr>
              <th scope="row">${key}</th>
              <td>${item.titulo}</td>
              <td><img class="row-img" src="./img/Noticias/${item.imagen}" alt=""></td>
              <td>${item.estado}</td>
              <td>${item.fecha}</td>
              <td>
                <button class="btn btn-primary" onclick="openModal(${item.id})" data-micromodal-trigger>Visualizar</button>
              </td>
            </tr>
        `
      })
    },
    error: function(jqXHR, error) {
      console.log(error);
    }
  });
}


loadNews();

function openModal(myid) {
  const item = all_news.filter((el) => el.id == myid ? el : '');


  var modal = createModal();
  modal.open();
  modal.setContent(`<h1>${item[0].titulo}</h1>
  <textarea>${item[0].contenido}</textarea>
`);

  // modal.setContent(``);

  modal.addFooterBtn('Guardar cambios', 'tingle-btn tingle-btn--primary', function() {
    modal.close();
  });

  modal.addFooterBtn('Salir sin guardar', 'tingle-btn tingle-btn--danger', function() {
    modal.close();
  });
}

function createModal() {
  return new tingle.modal({
    footer: true,
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






