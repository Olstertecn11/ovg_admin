<?php
    include ('./../var.php');
    date_default_timezone_set('America/Guatemala');
    if(!$mysqli){
        die("Error al conectar con OVG!");
        echo 0; 
    }
    else{
        $consulta = "select * from noticia";
        
        if ($result = $mysqli -> query($consulta)) {
                
            $usuarios = [];
            while($row = $result->fetch_assoc()){
                $registro = [
                    "id"=>$row['id'],
                    "titulo"=>$row['titulo'],
                    "contenido"=>$row['contenido'],
                    "email"=>$row['imagen'],
                    "imagen"=>$row['imagen'],
                    "estado"=>$row['estado'],
                    "fecha"=>$row['fecha']
                ];

                array_push($usuarios,$registro); 
            }
            print_r(json_encode($usuarios));
        }
    }
    mysqli_close($mysqli);
?>>
