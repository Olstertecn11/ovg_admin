let all_news = [];
let mytable = document.getElementById("news_table");
const estados = ["Creada", "Edicion", "Revision", "Publicada"]
let per = "";
let nom = "";


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




//Event Listeners
document.getElementById("filter").addEventListener("change", (e) => {
  getNews();
  if (e.target.value == 5 || e.target.value == 0) {
    mytable.innerHTML = '';
    updateTable(all_news);
  }
  else {
    mytable.innerHTML = '';
    var data = all_news.filter((item) => item.estado == e.target.value);
    updateTable(data);
  }
});

// ===============   END Listeners   ===============


function updateTable(data) {
  if (data.length > 0) {
    document.getElementById('alert').style = 'display:none';
    document.getElementById('parent-table').style = 'display:block';
    const mydata = data.map((item, key) => {
      mytable.innerHTML += `
            <tr>
              <th scope="row">${key}</th>
              <td>${item.titulo}</td>
              <td><img class="row-img" src="./img/Noticias/${item.imagen}" alt=""></td>
              <td>${estados[item.estado - 1]}</td>
              <td>${item.fecha}</td>
              <td>
                <button class="btn btn-primary" onclick="editItem(${item.id})" data-micromodal-trigger>Visualizar</button>
              </td>
              <td>
                <button class="btn btn-danger" onclick="deleteItem(${item.id})" >Eliminar</button>
              </td>
            </tr>
        `
    });
  }
  else {
    document.getElementById('parent-table').style = 'display: none;';
    document.getElementById('alert').style = 'display:block;';
  }
}

function editItem(id) {
  const file = "noticia-editar.html"
  window.location.href = `${file}?key=${id}`;
}


function getNews() {
  $.ajax({
    url: 'php/noticias/obtenerNoticias.php',
    type: 'POST',
    async: false,
    success: function(data) {
      data = data.substring(0, data.length - 3);
      all_news = JSON.parse(data);
    },
    error: function(jqXHR, error) {
      console.log(error);
    }
  });
}

function deleteItem(id) {
  var datosDelForm = new FormData();
  datosDelForm.append('id', id);
  $.ajax({
    url: 'php/noticias/eliminarNoticia.php',
    type: 'POST',
    data: datosDelForm,
    contentType: false,
    processData: false,
    success: function(response) {
      Swal.fire({ title: 'Mensaje', text: response, confirmButtonText: 'Cool' });
      getNews();
      updateTable(all_news);
    }
  });
}






//===============================   Modal Functions  =============================== 


function openModal(myid) {
  const item = all_news.filter((el) => el.id == myid ? el : '');


  var modal = createModal();
  modal.open();
  modal.setContent(`<h1>${item[0].titulo}</h1>
<textarea style="width:700px !important;" id="txt_contenido">${item[0].contenido}</textarea>
`);

  // modal.setContent(``);

  modal.addFooterBtn('Guardar cambios', 'tingle-btn tingle-btn--primary', function() {
    var contenido = document.getElementById("txt_contenido").value
    alert(contenido);
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
      return true; // close the modal
    }
  });
}

// Main Methods


getNews();
updateTable(all_news);





