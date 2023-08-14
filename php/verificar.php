<?php
    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala
    if(!$mysqli){//comprobamos la conexión
        die("Error al conectar con SVG!");
        echo 0; //usaremos este 1 para indicarle al JS que hubo un error y que le muestre alerta al usuario
        //usar alertify
    }
    else{

        $usuario = $_POST['user'];
        $consulta = "SELECT nom_completo as nc, count(*) as tot from usuario
        where nom_usuario='$usuario' ORDER BY nom_usuario asc";
        
        if ($result = $mysqli -> query($consulta)) {
           $dato=0;
            while($row = $result->fetch_assoc()){
                $dato = $row['tot'] . "," . $row['nc'];
            }
            echo $dato;
        }
    }
    //cierre
    mysqli_close($mysqli);//cierra la conexión
?>