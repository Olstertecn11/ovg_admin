<?php
    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala
    if(!$mysqli){//comprobamos la conexión
        die("Error al conectar con SVG!");
        echo 0; //usaremos este 1 para indicarle al JS que hubo un error y que le muestre alerta al usuario
        //usar alertify
    }
    else{

        $password= $_POST['pass'];
        $usuario = $_POST['usu'];
        //cifrado de contraseña
        $pass_cifrado= password_hash($password, PASSWORD_DEFAULT, array("cost"=>12)); // función blowfish

        $con1="UPDATE `usuario` SET `password`='$pass_cifrado' WHERE `nom_usuario` = '$usuario'";
        //actu de contra
        if(mysqli_query($mysqli, $con1)){
            echo "1";//se logro actualizar
        } else {
            echo "0";//no se pudo actualizar
            return;
        }
        //actu de tokens
        $con2="UPDATE `token` SET `estado`=0 WHERE `id_usuario` = (select usuario.id_usuario from usuario where usuario.nom_usuario = '$usuario')";
        mysqli_query($mysqli,$con2);

        //bitacora
        $fechaHoraBit = date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s');
        $evento = "Actualización de contraseña";
        $descripcion = "El usuario $usuario ha actualizado su contraseña";
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
    mysqli_close($mysqli);
?>