<?php
    //unset para colocar en valores nulos la sesion
    session_start();
    session_unset();
    session_destroy();
    session_write_close();
    session_regenerate_id(true);
    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala
    //registro en bitacora de lo sucedido
    $usuario = $_POST['usuario'];//el nombre de usuario lo obtenemos de las variables de sesión
    $permiso = $_POST['tipo'];
    $fechaHoraBit = date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s');
    $evento = "Fin de sesión";
    $descripcion = "El usuario $usuario de tipo $permiso ha cerrado sesión";
    $bitacora="INSERT INTO `bitacora`(`id_usuario`, `fecha_hora`, `evento`, `descripcion`) 
    VALUES ((SELECT  `id_usuario` FROM usuario where nom_usuario = '$usuario'),
    '$fechaHoraBit',
    '$evento',
    '$descripcion')";
    if(mysqli_query($mysqli, $bitacora)){
        //echo "7";//se logro actualizar
    } else {
        //echo "8";//no se pudo actualizar
    }
?>