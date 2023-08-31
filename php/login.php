<?php
    include ('var.php');
    date_default_timezone_set('America/Guatemala');
    if(!$mysqli){
        die("Error al conectar con SMG!");
        echo "error";
    }
    else{
        $usuario = $_POST['nomU'];
        $pass_In = $_POST['pass'];
        $permiso = 0;
        $id_P = 0;
        $contador=0;
        $estado=0;
        $consulta="SELECT `perm_users`.`id_perm` as idP, permiso.descripcion as permiso, 
        usuario.password as pass, usuario.estado as estado 
        FROM `perm_users` 
        INNER JOIN usuario on usuario.id_usuario = perm_users.id_usuario
        INNER JOIN permiso on permiso.id_perm = perm_users.id_perm
        WHERE usuario.nom_usuario = '$usuario' ORDER BY `perm_users`.`id_perm` ASC";

        if ($result = $mysqli -> query($consulta)) {
                
            while($row = $result->fetch_assoc()){
                //verif de password
                if(password_verify($pass_In, $row['pass'])){
                    //devuelve TRUE si son iguales
                    $contador++; 
                    //encontro usuario, jalamos sus datos
                    if(!$id_P==1){//1 - admin, si no es 1, que jale el permiso que tiene, si ya es 1, es el admin y no se le debe pedir mas
                        $id_P = $row['idP'];
                        $permiso = $row['permiso'];
                        $estado = $row['estado'];
                    }
                }
            }

            if($contador>0){
                
                if($estado==0){
                    echo 6;//no se dar�� acceso
                }
                else{
                    //inicializamos la sesión
                    echo $id_P;//el id de permiso, 0 si es incorrecto, 1 admin y 2 normal
                    session_start();
                    $_SESSION['usuario']=$usuario;
                    $_SESSION['tipo']=$id_P;
                    $_SESSION['nPerm']=$permiso;
                    $_SESSION['UID']=uniqid();
                    $_SESSION['fecha']=time();
                }
            }
            else{
                echo 0;
            }

            //registro en bitacora
            //id_usuario se obtiene con select enla BD, se envia desde la sesión en los ajax ahora
            //fecha y hora:
            $fechaHoraBit = date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s');
            $evento = "Inicio de sesión";
            $descripcion = "El usuario $usuario de tipo $permiso ha iniciado sesión en el sistema a las $fechaHoraBit";
            $bitacora="INSERT INTO `bitacora`(`id_usuario`, `fecha_hora`, `evento`, `descripcion`) 
            VALUES ((SELECT  `id_usuario` FROM usuario where nom_usuario = '$usuario'),
            '$fechaHoraBit',
            '$evento',
            '$descripcion')";
            if($resultado = $mysqli -> query($bitacora)){
                //no trono
            }
            else{
                //trono
            }
        }
    }
    mysqli_close($mysqli);
?>
