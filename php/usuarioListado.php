<?php
    include ('var.php');
    date_default_timezone_set('America/Guatemala');
    if(!$mysqli){
        die("Error al conectar con SMG!");
        echo 0; 
    }
    else{
        $consulta="SELECT `id_usuario`, `nom_completo`, `nom_usuario`, `email`, `estado` FROM `usuario`";
        
        if ($result = $mysqli -> query($consulta)) {
                
            $usuarios = [];
            while($row = $result->fetch_assoc()){
                $registro = [
                    "id"=>$row['id_usuario'],
                    "nombre"=>$row['nom_completo'],
                    "usuario"=>$row['nom_usuario'],
                    "email"=>$row['email'],
                    "estado"=>$row['estado']
                ];

                array_push($usuarios,$registro); 
            }
            print_r(json_encode($usuarios));
        }
    }
    mysqli_close($mysqli);
?>