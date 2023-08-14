<?php
    include ('var.php');//vars
    date_default_timezone_set('America/Guatemala');//colocamos la zona horario de Guatemala

        $nom =$_FILES["file"]["name"];
        
        $anio =$_POST['anio'];
        $mes  =$_POST['mes'];
        $tipo =$_POST['tipoB'];
        $nomN =$_POST['nomN'];
        $nom  =$_FILES["file"]["name"];
        $ruta1='/home/smggt/public_html/boletines/files/'.$anio.'/'.$tipo."/";
        if($tipo=="s"){
            $ruta1.=$mes."/";
        }
        clearstatcache();//limpiar cache antes de validar
    if(strlen($nomN)>1){
        //si hay un nuevo nombre a testear
        if(file_exists($ruta1.$nomN)){
            //si no existe lo indico, y regreso
            echo '3';//." si existe ".$nomN;
        }
        else{
            echo '0';//." no existe ".$nomN;
        }
    }else{
        //no hay nuevo nombre
        if(file_exists($ruta1.$nom)){
            //si no existe lo indico
            echo '2';//." si existe nom pdf".$nom;
        }
        else{
            echo '-1';//. "no existe nom pdf".$nom;
        }
    }
    //echo " busca: nuevo nombre ".$nomN." file [".!file_exists($ruta1.$nomN)."/".!file_exists($ruta1.$nomN)."] dir ".$ruta1;
?>