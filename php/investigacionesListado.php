<?php
    $directorioRaiz="/home/smggt/public_html/investigaciones/files";


    //File system iterator:
    $datos=[];
    $archivos=[];
    $iterator = new FilesystemIterator($directorioRaiz);
    foreach($iterator as $entry) {
        /*$registro=[
            "nombre"=>$entry->getFilename(),
            //"ruta"  =>$entry->getPath(),
        ];*/
        array_push($datos,$entry->getFilename());
        //$arrFiles[] = $entry->getFilename();
    }
    //print_r(json_encode($datos));
    foreach($datos as $subdir){
        $iteradorSub = new FilesystemIterator($directorioRaiz."/".$subdir."/ee");
        foreach($iteradorSub as $entrada){
            $registro=[
                "nombre"=>$entrada->getFilename(),
                "fecha"=>$subdir,
                "ruta"=>$entrada->getPath(),
                "peso"=>$entrada->getSize(),
                //"tipo"=>$entrada->getType()
                //"tipo"=>mime_content_type($entrada->getPathname())
            ];
            array_push($archivos,$registro);
        }
    }
    print_r(json_encode($archivos));
?>