<?php
    //importar las clases
    require "includes/Exception.php";
    require "includes/PHPMailer.php";
    require "includes/SMTP.php";
    //declaramos el uso de las clases
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala
    if(!$mysqli){//comprobamos la conexión
        die("Error al conectar con SMG!");
        echo 0; //usaremos este 1 para indicarle al JS que hubo un error y que le muestre alerta al usuario
        //usar alertify
    }
    else{
        
        //vars
        $usu  = $_POST['nomU'];
        $mail = $_POST['mail'];
        $conteo = 0;
        //consulta para comprobar datos
        $con1 = "SELECT `id_usuario` as c FROM usuario WHERE `nom_usuario` = '$usu' AND `email` ='$mail'";
        if ($result = $mysqli -> query($con1)) {
            while($row = $result->fetch_assoc()){
                $conteo = $row['c'];
            }
        }
        
        if($conteo==0){
            echo 2;//no casan las credenciales
            return;
        }
        //else
        
        
        $consulta = $mysqli->prepare("INSERT INTO `token`(`token`, `id_usuario`, `fecha`, `estado`) VALUES (?,?,?,?)");
        $consulta->bind_param("sisi",$tokenCif,$conteo,$fecha,$est);

        $fecha = date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s');
        $token= uniqid();
        $est = 1;
//echo $token;
        //cifrado de token
        $tokenCif= password_hash($token, PASSWORD_DEFAULT, array("cost"=>12)); // función blowfish

        $resultado = $consulta->execute(); 
        echo $resultado;
        //aca se envia por correo el token
        $correo_1 = new PHPMailer(true);
        
        //configuraciones mailer
        $correo_1->SMTPDebug = SMTP::DEBUG_OFF;
        $correo_1->isSMTP();
        $correo_1->Host = 'admin.smg.gt';
        $correo_1->SMTPAuth = true;
        $correo_1->Username = "noreply@admin.smg.gt";
        $correo_1->Password = "+@TwMI-;f{@J";
        $correo_1->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $correo_1->Port = 465;//smtp
        
        //recipientes
        $correo_1->setFrom("noreply@admin.smg.gt", 'Administración SMG - NO REPLY');
        $correo_1->addAddress($mail, $usu);//correo destino y nombre destinatario
        
        //contenido correo
        $correo_1->CharSet = PHPMailer::CHARSET_UTF8;
        $correo_1->isHTML(true);
        $correo_1->Subject = 'RESTABLECER CONTRASEÑA EN SITIO WEB [SMG]';
        $correo_1->Body    = "Hola $usu,<br> Se ha solicitado restablecer tu contraseña el día ".date('d')
        ."/".date('m')."/".date('Y')." a las ".date('H').":".date('i').":".date('s')."<br>
        Su enlace de recuperación de contraseña es <a href='https://admin.smg.gt/recup.html?rr=$token&uu=$usu'>https://admin.smg.gt/recup.html?rr=$token&uu=$usu</a><br>
        Si usted no solicito el permiso para restablecer la contraseña, no se preocupe, el token se invalidará luego de 24 horas<br><br>
        Por favor no responder a este mensaje<br>~SMG";
        $correo_1->AltBody = "Hola $usu, se ha solicitado restablecer tu contraseña el día ".date('d')
        ."/".date('m')."/".date('Y')." a las ".date('H').":".date('i').":".date('s')."
        Su enlace de recuperación de contraseña es https://admin.smg.gt/recup.html?rr=$token&uu=$usu 
        Si usted no solicito el permiso para restablecer la contraseña, no se preocupe, el token se invalidará luego de 24 horas
        Por favor no responder a este mensaje
        ~SMG";
        //send the message, check for errors
        if (!$correo_1->send()) {
            //echo 'Mailer Error: ' . $correo_1->ErrorInfo;
            //echo 0; hubo problema al enviar pero no debe notificarse
        } else {
            //echo 'Message sent!';
        }
        //bitacora
        $evento = "Token de recuperación de contraseñas";
        $descripcion = "Se ha creado creado un token de recuperación de contraseña para el usuario $usu, enviado a: $mail";
        $bitacora="INSERT INTO `bitacora`(`id_usuario`, `fecha_hora`, `evento`, `descripcion`) 
        VALUES ((SELECT  `id_usuario` FROM usuario where nom_usuario = '$usu'),
        '$fecha',
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