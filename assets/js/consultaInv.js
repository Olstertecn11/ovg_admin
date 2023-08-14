var nom=0;
var per=0;
$(document).ready(
    function() {
        //inicializar alertify
        alertify.defaults.transition = "slide";
        alertify.defaults.theme.ok = "btn btn-primary";
        alertify.defaults.theme.cancel = "btn btn-danger";
        alertify.defaults.theme.input = "form-control";

        //datos sesión
        $.ajax({
            url: 'php/sesion.php',
            type: 'POST',
            success: function(data){
                var vars = data.split(",");
                
                switch(vars[0]){
                    case '1':
                        //admin, puede estar en todos lados
                        //se le habilita el modulo de acceder a admin de usuarios
                        break;
                    case '2':
                        //usuario
                        //en este segmento si puede estar el usuario
                        break;
                    default:
                        //not set, reset
                        window.location.href = "index.html"
                }

                document.getElementById('bv').innerHTML="Bienvenido, "+vars[1];
                per=vars[0];
                nom=vars[1];
            }
        });

        //actu tabla
        actuTabla();
        
        //y de ultimo ordenar
        tableSort();
    }
)

function tableSort(){
    $(function() {
        $("#tabla").tablesorter({ 
            sortList: [[0,0], [1,0]], 
            theme : 'ice',
            widgets: ['zebra', 'filter','stickyHeaders'],
            widgetOptions: {
                filter_reset: '.reset'
            },
            sortReset: true,
            sortMultiSortKey: "shiftKey",
            sortResetKey: 'ctrlKey',
            sortInitialOrder: "asc",
            columns_tfoot: true
            //stickyHeaders: "tablesorter-stickyHeader"
        });
    });
}

function actuTabla(){
    var htmlTabla="";
    $.ajax({
        url:'php/investigacionesListado.php',
        type: 'POST',
        async: false,
        success: function(data){
            var linea;
            //console.log(data);
            $.each(JSON.parse(data), (key,  imagen)=>{
                linea = "";
                linea ='<tr>\
                    <td class="primary">\
                    <a href="https://smg.gt/investigaciones/files/'+imagen.fecha+'/ee/'+imagen.nombre+'" target="_blank">\
                    Descargar archivo</a></td>';
                
                linea+='<td class="secondary">20'+imagen.fecha+'</td>';
                linea+='<td class="tertiary">'+imagen.ruta+'</td>';
                linea+='<td>'+imagen.nombre+'</td>\
                <td>'+parseFloat((imagen.peso/1024)/1024).toFixed(2)+' MBs</td>\
                <td style="text-align:center"><button class="btn btn-info" onclick="nombre(\''+imagen.ruta+'\',\''+imagen.nombre+'\');">Cambiar nombre</button></td>\
                <td style="text-align:center"><button class="btn btn-danger" onclick="borrar(\''+imagen.ruta+'/'+imagen.nombre+'\');">Borrar archivo</button></td>\
                </tr>' ;
                //<td>'+imagen.tipo+'</td>\
                 

                htmlTabla += linea;
            })
            document.getElementById("cuerpoTabla").innerHTML = htmlTabla;
        },
        error: function(jqXHR,error){
    
            //alert("Error:" + jqXHR);
    
        }
    });
}

function recargar(){
    alertify.confirm("Actualizar tabla","¿Desea actualizar la tabla?",
    function(){
        //alertify.success('Actualizando...');
        //location.reload();
        actuTabla();
        $("#tabla").trigger("destroy");
        tableSort();
        alertify.success('El contenido de la tabla se ha actualizado')
    },
    function(){
        alertify.error('Cancelado');
    });
}

function cerrarSesion(){
    $.ajax({
        url: 'php/cerrarSesion.php',
        type: 'POST',
        async: false,
        data: {usuario:nom,tipo:per},
        success: (respuesta)=>{
            window.location.href = "index.html";
        }
    })
}

function borrar(ruta){
    alertify.confirm("Confirmación","¿Desea BORRAR el archivo ubicado en: "+ruta+"?<br><b>ESTA ACCION ES PERMAMENTE, NO PODRA DESHACERLA</b>",
    function(){
        alertify.success('Borrando...');
        //AJAX DE ACTUALIZACION
        $.ajax({
            url:'php/borrarArchivo.php',
            type: 'POST',
            async: false,
            data: {ruta:ruta, usuario:nom, tipo:per},//modo 0 habilitar
            success: function(data){
                if(data==0){
                    alertify.success('El archivo fue eliminado')
                    //location.reload();
                    actuTabla();
                    $("#tabla").trigger("destroy");
                    tableSort();
                    alertify.success('El contenido de la tabla se ha actualizado')
                }
                else{
                    alertify.error('¡Eliminación fallida!')
                }
            }
        });
        //Y POR ULTIMO RECARGAMOS TABLA
    },
    function(){
        alertify.error('La operación se ha cancelado');
    });
}

function nombre(ruta, nombre){
    alertify.confirm("Cambio de nombre","<h4>¿Desea cambiar el nombre del archivo: "+nombre+"?</h4>"
    +'Ingrese el nuevo nombre:<br>'
    +'<input type="text" id="nuevoName" placeholder="Nombre.."><br><br>Si no desea cambio puede cancelar la operación',
    function(){
        
        var nomNue = document.getElementById("nuevoName").value;
        if(nomNue==""){
            alertify.error("No ingreso un nuevo nombre");
            return;
        }
        else{
            //anallizamos si trae el .pdf
            var ext = nomNue.substr(-4,4)
            //console.log(ext);
            if(ext===".pdf"||ext===".PDF"){
                //nada
            }
            else{
                nomNue+=".pdf";//le agrega pdf automáticamente
                //console.log(nomNue);
            }
        }
        alertify.success('Cambiando...');
        //AJAX DE ACTUALIZACION
        $.ajax({
            url:'php/cambiarArchivo.php',
            type: 'POST',
            async: false,
            data: {ruta:ruta, usuario:nom, tipo:per, nomAnt:nombre, nuevo:nomNue},
            success: function(data){
                if(data==0){
                    alertify.success('El nombre fue cambiado')
                    //location.reload();
                    actuTabla();
                    $("#tabla").trigger("destroy");
                    tableSort();
                    alertify.success('El contenido de la tabla se ha actualizado')
                }
                else{
                    if(data==1){
                        alertify.error('¡Cambio fallido!')
                    }
                    else{
                        console.log(data);
                        alertify.error('El nuevo nombre ingresado ya esta ocupado');
                    }
                }
            }
        });
        //Y POR ULTIMO RECARGAMOS TABLA
    },
    function(){
        alertify.error('La operación se ha cancelado');
    });

}