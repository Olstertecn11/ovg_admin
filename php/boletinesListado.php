<?php
    // $directorioRaiz="/home/smggt/public_html/boletines/files";
    $directorioRaiz="./../../boletines/files";
    $directorioRaiz.="/".$_POST['anio']."/".$_POST['tipo'];
    if($_POST['mesCheck']=="1"){
        $directorioRaiz.="/".$_POST['mes'];
    }
    //File system iterator:
    
    $archivos=[];
    $iterator = new FilesystemIterator($directorioRaiz);
    foreach($iterator as $entry) {
        $registro=[
            "nombre"=>$entry->getFilename(),
            //"fecha"=>$subdir,
            "ruta"=>$entry->getPath(),
            "peso"=>$entry->getSize(),
            //"tipo"=>$entrada->getType()
            //"tipo"=>mime_content_type($entrada->getPathname())
        ];
        array_push($archivos,$registro);
    }
    print_r(json_encode($archivos));
?>
