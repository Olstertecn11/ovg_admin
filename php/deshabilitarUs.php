<?php
    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala
    if(!$mysqli){//comprobamos la conexión
        die("Error al conectar con SMG!");
        echo 0; //usaremos este 1 para indicarle al JS que hubo un error y que le muestre alerta al usuario
        //usar alertify
    }
    else{
        /*Consulta o acciones a realizar en la BD al tener abierta la conexión*/
        $idU = $_POST['idU'];
        $modo=$_POST['modo'];
        if($modo==1){
            //deshabilitar
            $consulta = "UPDATE `usuario` SET `estado`=0 WHERE `id_usuario`=$idU";
            $evento = "Deshabilitación de usuarios";
            $coso = "deshabilitado";
        }
        else{
            //habilitar
            $consulta = "UPDATE `usuario` SET `estado`=1 WHERE `id_usuario`=$idU";
            $evento = "Habilitación de usuarios";
            $coso = "habilitado";
        }
        //verificamos el resultado de la update
        if(mysqli_query($mysqli, $consulta)){
            echo "0";//se logro actualizar
        } else {
            echo "1";//no se pudo actualizar
        }
        
         //registro en bitacora de lo sucedido
         $usuario = $_POST['usuario'];//el nombre de usuario lo obtenemos de las variables de sesión
         $permiso = $_POST['tipo'];
         $fechaHoraBit = date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s');
         
         $descripcion = "El usuario $usuario de tipo $permiso ha $coso al usuario con id $idU";
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