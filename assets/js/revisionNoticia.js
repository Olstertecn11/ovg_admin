let per = "";
let nom = "";
let all_news = [];


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


fillNews();

function fillNews() {
  getNews();
  all_news.map((item) => {
    const url = `./img/Noticias/${item.imagen}`;
    document.getElementById('container').innerHTML += `
    <div class="col-md-12" style="margin-top: 10%;">
        <div class="row" style="background:#000000;padding: 20px">
          <div class="col-md-7">
            <img style="width: 100%;" src="${url}" alt="">
          </div>
          <div class="col-md-4 " style="margin-left: 3.5%">
            <h1 class="card-title text-center" id="title-preview" style="color:#E35816;">${item.titulo}</h1>
            <p class=" mt-4 text-white " style="text-align: justify;" id="contenido-preview">
            ${item.contenido}
            </p>
            <p class="mt-4  text-center" style="color:#E35816" id="date-preview">${item.fecha}</p>
          </div>

          <div class="form-group">
            <input class="form-control mt-4" type="text" value="correcciones" id="comment">
          </div>
        </div>
      </div>
    `;
  });

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




