<?php
    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala
    if(!$mysqli){//comprobamos la conexión
        die("Error al conectar con SVG!");
        echo 0; //usaremos este 1 para indicarle al JS que hubo un error y que le muestre alerta al usuario
        //usar alertify
    }
    else{
        $user  = $_POST['user'];
        $token = $_POST['token'];
        $conteo = 0;
        //consulta para comprobar datos
        $con1 = "SELECT token.token as tok, usuario.nom_usuario 
        FROM `token`
        INNER JOIN usuario on token.id_usuario = usuario.id_usuario
        where usuario.nom_usuario = '$user' AND token.estado=1 AND
        timediff(now(), token.fecha) < '24:00:00'";
        
        if ($result = $mysqli -> query($con1)) {
            while($row = $result->fetch_assoc()){
                if(password_verify($token, $row['tok'])){
                    //devuelve TRUE si son iguales
                    $conteo++; 
                    //encontro usuario, jalamos sus datos
                }
            }
        }
        
        if($conteo==0){
            echo 2;//no casa el token
            //echo $conteo;
            return;
        }

        echo 1;//si llego hasta aca es porque encontro un token valido
        //ahora actualizamos a 0 todos los demás tokens, donde sean mayores a 24 hrs
        $con2="UPDATE `token` SET `estado`=0 WHERE timediff(now(), token.fecha) > '24:00:00'";
        if(mysqli_query($mysqli, $con2)){
            //echo "1";//se logro actualizar
        } else {
            //echo "0";//no se pudo actualizar
            //return;
        }
    }
    mysqli_close($mysqli);
?>