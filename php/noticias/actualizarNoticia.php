<?php
    include ('./../var.php');
    date_default_timezone_set('America/Guatemala');
    if(!$mysqli){
        die("Error al conectar con OVG!");
        echo "error";
    }
    else{
      $ID = $_POST['id'];
      $titulo = $_POST['titulo'];
      $contenido = $_POST['contenido'];
      $estado = $_POST['estado'];
      $fecha = $_POST['fecha'];
      $filename = $_POST['filename'];
      $imagen = $_FILES["file"]["name"];
      $sql = "update noticia set titulo=$titulo, contenido=$contenido, estado=$estado, fecha=$fecha, imagen=$imagen
        where id=$key
      ";
      $ruta = "./../../img/Noticias/" .$filename."";
      if (move_uploaded_file($_FILES["file"]["tmp_name"], $ruta) && $resultado = $mysqli -> query($sql)) {
        echo "Actualizado Correctamente";
      }
    }
    mysqli_close($mysqli);
?>
