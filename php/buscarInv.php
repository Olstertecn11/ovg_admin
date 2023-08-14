<?php
    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala

        $fecha=$_POST['fec'];
        $nomN =$_POST['nomN'];
        $nom  =$_FILES["file"]["name"];
        $ruta1='/home/smggt/public_html/investigaciones/files/'.$fecha.'/ee/';
        clearstatcache();
    if(strlen($nomN)>1){
        if(!file_exists($ruta1.$nomN)){
            //si no existe lo indico, y regreso
            echo 0;
        }
        else{
            echo 1;
        }
    }else{
        if(!file_exists($ruta1.$nom)){
            //si no existe lo indico
            echo 0;
        }
        else{
            echo 1;
        }
    }
?>