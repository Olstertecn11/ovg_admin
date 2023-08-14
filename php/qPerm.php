<?php
    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala
    if(!$mysqli){//comprobamos la conexión
        die("Error al conectar con SMG!");
        echo 0; //usaremos este 1 para indicarle al JS que hubo un error y que le muestre alerta al usuario
        //usar alertify
    }
    else{
        $idP = $_POST['id'];
        $usuarioP = 0;
        $uid = 0;
        $permisoP = 0;
        $pid = 0;
        $datos = "SELECT pu.`id_usuario` as a, usuario.nom_usuario as b, pu.`id_perm` as c, permiso.descripcion as d 
        FROM `perm_users` pu
        INNER JOIN usuario on pu.`id_usuario` = usuario.id_usuario
        INNER JOIN permiso on pu.`id_perm` = permiso.id_perm
        WHERE pu.`id` = $idP";

        if ($result = $mysqli -> query($datos)) {
            while($row = $result->fetch_assoc()){
                $usuarioP = $row['b'];
                $uid = $row['a'];
                $permisoP = $row['d'];
                $pid = $row['c'];
            }
        }

        
        $consulta = "DELETE FROM `perm_users` WHERE `id`=$idP";
        
        if(mysqli_query($mysqli, $consulta)){
            echo "1";//se logro eliminar
        } else {
            echo "0";//no se pudo eliminar
        }

        //bitacora, se hace consulta antes de eliminiar
        $usuario = $_POST['usuario'];//el nombre de usuario lo obtenemos de las variables de sesión
        $permiso = $_POST['tipo'];
        $fechaHoraBit = date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s');
        $evento = "Eliminación de permiso";
        $descripcion = "El usuario $usuario de tipo $permiso ha eliminado el permiso $pid - $permisoP del usuario: $uid - $usuarioP";
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
    }
    //cierre
    mysqli_close($mysqli);//cierra la conexión
?>