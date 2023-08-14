<?php
    include ('var.php');
    date_default_timezone_set('America/Guatemala');
    if(!$mysqli){
        die("Error al conectar con SMG!");
        echo 0; 
    }
    else{
        $idUsuario = $_POST['idU'];
        $consulta="SELECT perm_users.id as id, permiso.descripcion as nomPerm 
        FROM `perm_users` 
        INNER JOIN permiso on perm_users.id_perm = permiso.id_perm
        where permiso.estado=1 AND perm_users.id_usuario=$idUsuario";
        
        if ($result = $mysqli -> query($consulta)) {
                
            $usuarios = [];
            while($row = $result->fetch_assoc()){
                $registro = [
                    "id"=>$row['id'],
                    "nombrePerm"=>$row['nomPerm']
                ];

                array_push($usuarios,$registro); 
            }
            print_r(json_encode($usuarios));
        }
    }
    mysqli_close($mysqli);
?>