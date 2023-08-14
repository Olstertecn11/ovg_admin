var nom=0;
var per=0;
var id_u=0;
$(document).ready(
    function() {
        //inicializar alertify
        alertify.defaults.transition = "slide";
        alertify.defaults.theme.ok = "btn btn-primary";
        alertify.defaults.theme.cancel = "btn btn-danger";
        alertify.defaults.theme.input = "form-control";

        //verif sesion
        //verificamos los permisos del usuario según registro en SESSION
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
                        //en este segmento no puede estar el usuario
                        window.location.href = "index-boletines.html"
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
            theme : 'metro-dark',
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
        url:'php/usuarioListado.php',
        type: 'POST',
        async: false,
        success: function(data){
            var linea;
            $.each(JSON.parse(data), (key,  usuario)=>{
                linea = "";
                linea ='<tr>\
                    <td class="primary">'+usuario.id+'</td>\
                    <td class="secondary">'+usuario.nombre+'</td>\
                    <td class="tertiary">'+usuario.usuario+'</td>\
                    <td>'+usuario.email+'</td>';
                

                if(usuario.estado==='1'){
                    linea+='<td style="text-align:center;">Habilitado</td>';
                }
                else{
                    linea+='<td style="text-align:center;">Deshabilitado</td>';
                }

                linea+='\
                <td style="text-align:center;">\
                <div class="btn-group" role="group" aria-label="Acciones">';
                
                if(usuario.estado==='1'){
                    linea+='<button class="btn btn-danger" onclick="deshabilitar('+usuario.id+',\''+usuario.usuario+'\');">Deshabilitar</button>'; 
                }
                else{
                    linea+='<button class="btn btn-success" onclick="habilitar('+usuario.id+',\''+usuario.usuario+'\');">Habilitar</button>';
                }

                linea+='<button class="btn btn-secondary" onclick="perms('+usuario.id+',\''+usuario.usuario+'\');">Gestionar permisos</button>\
                </div>\
                </td>\
                </tr>' ;

                htmlTabla += linea;
            })
            document.getElementById("cuerpoTabla").innerHTML = htmlTabla;
        },
        error: function(jqXHR,error){
    
            //alert("Error:" + jqXHR);
    
        }
    });
}

function deshabilitar(id, name){
    alertify.confirm("Confirmación","¿Desea DESHABILITAR el usuario "+name+" con Id: "+id+"?",
    function(){
        alertify.success('Actualizando...');
        //AJAX DE ACTUALIZACION
        $.ajax({
            url:'php/deshabilitarUs.php',
            type: 'POST',
            async: false,
            data: {idU:id, modo:1, usuario:nom,tipo:per},//modo 1 deshabilitar
            success: function(data){
                if(data==0){
                    alertify.success('¡Actualizado!')
                    //location.reload();
                    actuTabla();
                    $("#tabla").trigger("destroy");
                    tableSort();
                    alertify.success('El contenido de la tabla se ha actualizado')
                }
                else{
                    alertify.error('¡Actualización fallida!')
                }
            }
        });
        //Y POR ULTIMO RECARGAMOS TABLA
    },
    function(){
        alertify.error('La operación se ha cancelado');
    });
}

function habilitar(id, name){
    alertify.confirm("Confirmación","¿Desea HABILITAR el usuario "+name+" con Id: "+id+"?",
    function(){
        alertify.success('Actualizando...');
        //AJAX DE ACTUALIZACION
        $.ajax({
            url:'php/deshabilitarUs.php',
            type: 'POST',
            async: false,
            data: {idU:id, modo:0, usuario:nom,tipo:per},//modo 0 habilitar
            success: function(data){
                if(data==0){
                    alertify.success('¡Actualizado!')
                    //location.reload();
                    actuTabla();
                    $("#tabla").trigger("destroy");
                    tableSort();
                    alertify.success('El contenido de la tabla se ha actualizado')
                }
                else{
                    alertify.error('¡Actualización fallida!')
                }
            }
        });
        //Y POR ULTIMO RECARGAMOS TABLA
    },
    function(){
        alertify.error('La operación se ha cancelado');
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

function perms(id,name){
    var html="<h4>"+id+" - "+name+"</h4>";
    html+='<table class="table table-striped table-hover table-bordered">';
    html+="<thead>\
        <tr>\
            <th>Id</th>\
            <th>Permiso</th>\
            <th>Acciones</th>\
        </tr>\
    </thead>\
    <tbody id='tablaPermisos'>";
    id_u=id;//lo guardamos como global
    //ajax para procesar los permisos / traerlos y mostrarlos
    $.ajax({
        url:'php/permisos.php',
        type: 'POST',
        data: {idU:id},
        async: false,
        success: function(data){
            var linea;
            $.each(JSON.parse(data), (key,  usuario)=>{
                linea = "";
                linea ='<tr>\
                    <td>'+usuario.id+'</td>\
                    <td>'+usuario.nombrePerm+'</td>';
                    
                linea+='<td><button class="btn btn-secondary" onclick="qPerm('+usuario.id+');">Quitar</button>\
                </td>\
                </tr>' ;

                html+=linea;
            })
            //luego de agregar todo el listado de permisos, se sigue desde dentro para no afectar las variables
            //debido a la asincronia que hay
            html+="</tbody>\
            </table><br><h4>Agregar permisos</h4>\
            <select id='permisoCombo'>";
            //permisos para el combo
            $.ajax({
                url: 'php/listaPerms.php',
                type: 'POST',
                success: function(data){
                    var linea2;
                    $.each(JSON.parse(data), (key, perm)=>{
                        linea2="";
                        linea2="<option value="+perm.id+">"+perm.nombre+"</option>";
                        html+=linea2;
                    })
                    //cierre del mensaje
                    html+='</select>\
                    <button class="btn btn-success" onclick="addPerm('+id+',\''+name+'\');">Agregar permiso</button>';
                    //imprime el cuadro formado
                    alertify.alert("<h3>Gestión de permisos</h3>",html);
                }
            });
            
        },
        error: function(jqXHR,error){
    
            //alert("Error:" + jqXHR);
    
        }
    });
}

function qPerm(idPerm){
    //quitar permiso con id de idPerm
    alertify.confirm('Confirmar acción','¿Desea quitar el permiso?',
    function(){
        $.ajax({
            url: "php/qPerm.php",
            data: {id:idPerm, usuario:nom, tipo:per},//permiso en bitacora por trigger y php
            type: 'POST',
            success: function(data){
                if(data==1){
                    //eliminacion exitosa
                    alertify.success("El permiso se ha removido con éxito");
                    recargaPermisos(id_u);//idusuario
                }
                else{
                    alertify.error("No se ha podido quitar el permiso")
                }
                //console.log(data);
            }
        });

    },
    function(){
        alertify.error("Operación cancelada");
    }
    )
}

function addPerm(id,name){
    var permiso=document.getElementById('permisoCombo').value;
    alertify.confirm('Confirmar acción','¿Desea agregar el permiso al usuario '+name+'?',
    function(){
        $.ajax({
            url: "php/addPerm.php",
            data: {perm:permiso,us:id, usuario:nom, tipo:per}, //el bitacora por trigger y php
            type: 'POST',
            success: function(data){
                if(data==1){
                    //eliminacion exitosa
                    alertify.success("El permiso se ha agregado con éxito");
                    recargaPermisos(id_u);//de usuario
                }
                else{
                    alertify.error("No se ha podido agregar el permiso")
                }
                //console.log(data);
            }
        });

    },
    function(){
        alertify.error("Operación cancelada");
    }
    )
}

function recargaPermisos(id){
    var tablaNueva="";
    $.ajax({
        url:'php/permisos.php',
        type: 'POST',
        data: {idU:id},
        async: false,
        success: function(data){
            var linea = "";
            $.each(JSON.parse(data), (key,  usuario)=>{
                linea = "";
                linea ='<tr>\
                    <td>'+usuario.id+'</td>\
                    <td>'+usuario.nombrePerm+'</td>';
                    
                linea+='<td><button class="btn btn-secondary" onclick="qPerm('+usuario.id+');">Quitar</button>\
                </td>\
                </tr>' ;

                tablaNueva+=linea;
            })
            document.getElementById("tablaPermisos").innerHTML=tablaNueva;
        },
        error: function(jqXHR,error){
    
            //alert("Error:" + jqXHR);
    
        }
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