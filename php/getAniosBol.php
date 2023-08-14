<?php
    $directorioRaiz="/home/smggt/public_html/boletines/files";
    //File system iterator:
    
    $archivos=[];
    $iterator = new FilesystemIterator($directorioRaiz);
    foreach($iterator as $entry) {
        //if(!$entry->getFilename()=="folders"){
            $registro=[
                "anio"=>$entry->getFilename(),
            ];
            array_push($archivos,$registro);
        //}
    }
    
    print_r(json_encode($archivos));
?>