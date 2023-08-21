<?php
    include ('./../var.php');
    date_default_timezone_set('America/Guatemala');
    if(!$mysqli){
        die("Error al conectar con OVG!");
        echo "error";
    }
    else{

      $_id = $_POST['id'];

      $sql = "delete from noticia where id='$_id'";
      if ( $resultado = $mysqli -> query($sql)) {
        echo "Eliminado Correctamente";
      } else {
        echo "Error";
      }
    }
    mysqli_close($mysqli);
?>
