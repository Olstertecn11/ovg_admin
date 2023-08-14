<?php
    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala
    if(!$mysqli){//comprobamos la conexión
        die("Error al conectar con SMG!");
        echo 0; //usaremos este 1 para indicarle al JS que hubo un error y que le muestre alerta al usuario
        //usar alertify
    }
    else{
        $consulta = $mysqli->prepare("INSERT INTO `usuario`(`nom_completo`, `nom_usuario`, `password`, `email`, `estado`) VALUES (?,?,?,?,?)");
        $consulta->bind_param("ssssi",$nom,$usu,$pass_cifrado,$mail,$est);

        $nom = $_POST['nom'];
        $usu = $_POST['user'];
        $pass= $_POST['ps'];
        $mail= $_POST['email'];
        $est = 1;

        //cifrado de contraseña
        $pass_cifrado= password_hash($pass, PASSWORD_DEFAULT, array("cost"=>12)); // función blowfish

        $resultado = $consulta->execute(); 
        echo $resultado;

        //bitacora
        $usuario = $_POST['usuario'];//el nombre de usuario lo obtenemos de las variables de sesión
        $permiso = $_POST['tipo'];
        $fechaHoraBit = date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s');
        $evento = "Creación de usuario";
        $descripcion = "El usuario $usuario de tipo $permiso ha creado al usuario: $usu - $nom - $mail";
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

        $consulta->close();
    }
    mysqli_close($mysqli);
?>