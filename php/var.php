<?php
//variables de conexión
    //para local:
    $mysqli = new mysqli("localhost","root","","smggt_smg");
    // para produccion:
    //$mysqli = new mysqli("localhost","svggt_userImg","pss","svggt_svg");


    // Check connection
    if ($mysqli -> connect_errno) {
        echo "Falló la conexión a MySQL: " . $mysqli -> connect_error;
        exit();
    }
    if (!$mysqli->set_charset("utf8")) {//si da error usar utf8
        printf("Error cargando el conjunto de caracteres utf8 : %s\n", $mysqli->error);
        exit();
    } else {
        // printf("Conjunto de caracteres actual: %s\n", $mysqli->character_set_name());
    }
    $localIP = getHostByName(getHostName());
    // print_r($localIP);
    //echo 'conexion exitosa';
?>
