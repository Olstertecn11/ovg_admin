<?php
    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala
    if(!$mysqli){//comprobamos la conexión
        die("Error al conectar con SMG!");
        echo 0; //usaremos este 1 para indicarle al JS que hubo un error y que le muestre alerta al usuario
        //usar alertify
    }
    else{
        $nomNuevo = $_POST['nomN'];
        $fecha    = $_POST['fec'];
        $nom      = $_FILES["file"]["name"];
        $nomArchi = "0";
        if(strlen($nomNuevo)<=1){
            $nomArchi = $nom;
        }
        else{
            $nomArchi = $nomNuevo;
        }
        $ruta = "/home/smggt/public_html/investigaciones/files/".$fecha."";//barra se agrega despues de validar directorio

        //guardar img en carpeta, primero validamos el archivo
        if (($_FILES["file"]["type"] == "application/pdf")) {
                //antes de mover, debemos de crear el directorio
                //o verificar si existe
                if(!file_exists($ruta)){
                    //si no existe, lo creo
                    if(mkdir($ruta,0777)){
                        //si se logro crear
                    }
                    else{
                        echo 0;//fallo creando la carpeta del año
                    }
                }
                //ee
                $ruta.="/ee";
                if(!file_exists($ruta)){
                    //si no existe, lo creo
                    if(mkdir($ruta,0777)){
                        //si se logro crear
                    }
                    else{
                        echo 0;//fallo creando la carpeta del año
                    }
                }
                //nombre
                $ruta.="/".$nomArchi;
                
                if (move_uploaded_file($_FILES["file"]["tmp_name"], $ruta)) {
                    echo 1;//exitoso
                    
                } else {
                    echo 0;//falo
                    return;
                }
            }
            else{
                echo 2;//del lado de JS usamos este cod para indicar error de tipo
            }
            //registro en bitacora de lo sucedido
            $usuario = $_POST['usuario'];//el nombre de usuario lo obtenemos de las variables de sesión
            $permiso = $_POST['tipo'];
            $fechaHoraBit = date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s');
            $evento = "Carga de investigaciones";
            $descripcion = "El usuario $usuario de tipo $permiso ha subido una investigación a: $ruta, ($nomArchi)";
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