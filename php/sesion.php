<?php
    //iniciamos la sesión
    session_start();
    if (isset($_SESSION['tipo'])) {
        //datos sesion
        echo $_SESSION['tipo'].','.$_SESSION['usuario'].','.$_SESSION['nPerm'];
        
    }
    else{
        echo '0';
    }

?>