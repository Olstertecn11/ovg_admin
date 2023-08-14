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
        $ruta = $_POST['ruta'];
        $anti = $_POST['nomAnt'];
        $nuev = $_POST['nuevo'];
        
        //verificar que no exista
        if(!file_exists($ruta."/".$nuev)){
            //cambiar con php
            if (!rename($ruta."/".$anti,$ruta."/".$nuev)) {
                
                echo 1;
            }
            else {
                
                echo 0;
            }    
        }
        else{
            echo 2;
            return;
        }
        
         //registro en bitacora de lo sucedido
         $usuario = $_POST['usuario'];//el nombre de usuario lo obtenemos de las variables de sesión
         $permiso = $_POST['tipo'];
         $fechaHoraBit = date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s');
         $evento = "Cambio de nombre de archivos";
         $descripcion = "El usuario $usuario de tipo $permiso ha cambiado el nombre del archivo ubicado en: $ruta/$anti a $nuev";
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