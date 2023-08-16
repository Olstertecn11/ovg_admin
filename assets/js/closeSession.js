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
