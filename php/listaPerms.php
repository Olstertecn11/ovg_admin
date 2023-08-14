<?php
    include ('var.php');
    date_default_timezone_set('America/Guatemala');
    if(!$mysqli){
        die("Error al conectar con SMG!");
        echo 0; 
    }
    else{
        
        $consulta="SELECT `id_perm`, `descripcion` FROM `permiso` WHERE `estado`=1";
        
        if ($result = $mysqli -> query($consulta)) {
                
            $usuarios = [];
            while($row = $result->fetch_assoc()){
                $registro = [
                    "id"=>$row['id_perm'],
                    "nombre"=>$row['descripcion']
                ];

                array_push($usuarios,$registro); 
            }
            print_r(json_encode($usuarios));
        }
    }
    mysqli_close($mysqli);
?>