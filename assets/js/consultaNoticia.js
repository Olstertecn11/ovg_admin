

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
              <td>
                <button class="btn btn-danger" onclick="deleteItem(${item.id})" >Eliminar</button>
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
      clearAll();
      Swal.fire({ title: 'Mensaje', text: response, confirmButtonText: 'Cool' });
    }
  });
  loadNews();
}


loadNews();

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
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
      return false; // nothing happens
    }
  });
}






