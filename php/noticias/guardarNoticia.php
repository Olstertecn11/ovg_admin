<?php
    include ('./../var.php');
    date_default_timezone_set('America/Guatemala');
    if(!$mysqli){
        die("Error al conectar con OVG!");
        echo "error";
    }
    else{

      $titulo = $_POST['titulo'];
      $contenido = $_POST['contenido'];
      $estado = $_POST['estado'];
      $fecha = $_POST['fecha'];
      $filename = $_POST['filename'];
      $imagen = $_FILES["file"]["name"];
      $sql = "insert into noticia (titulo, contenido, estado, imagen ,fecha) values('$titulo', '$contenido', '$estado',
        '$filename','$fecha')";
      $ruta = "./../../img/Noticias/" .$filename."";
      if (move_uploaded_file($_FILES["file"]["tmp_name"], $ruta) && $resultado = $mysqli -> query($sql)) {
        echo "Agregado Correctamente";
      } else {
        echo "Error";
      }
    }
    mysqli_close($mysqli);
?>
