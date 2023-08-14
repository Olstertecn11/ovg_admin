var usuario = 0;
var token = 0;

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$(document).ready(
    //funcion a ejecutar una vez este cargado el html
    function() {
        alertify.defaults.transition = "slide";
        alertify.defaults.theme.ok = "btn btn-primary";
        alertify.defaults.theme.cancel = "btn btn-danger";
        alertify.defaults.theme.input = "form-control";
        
        //obtencion de variables
        usuario=getParameterByName('uu');
        token=getParameterByName('rr');
        nomU = document.getElementById('usuario')
        if(token=='' || token==0 || usuario=='' || usuario==0){
            alertify.alert('Error','Ha ingresado incorrectamente');
            $("#nonvalid").css('display','block');
            return;
        }
        //alertify.alert('datos',token+'-'+usuario)
        
        //validar token
         $.ajax({
            url: 'php/validarToken.php',
            type: 'POST',
            data: {user:usuario, token:token},
            success: function(response){
                if(response==1){
                    //token valido
                    //habilitar mostrar formulario
                    $('#formulario').css('display','block')
                    nomU.innerHTML=usuario;
                }
                else{
                    //token invalido o error al validar
                    //mostrar mensaje de token invalido
                    $('#nonvalid').css('display','block')
                }
                //console.log(response);
            }
         });


        $('#submitButton').on('click', function(){            
            var pass1 = document.getElementById('cc1').value;
            var pass2 = document.getElementById('cc2').value;
            if(pass1.length<1||pass1==""||pass1==null){
                alertify.alert('Error',"Debe ingresar una contraseña");
                return;
            }
            if(pass2.length<1||pass2==""||pass2==null){
                alertify.alert('Error',"Debe ingresar la verificación de contraseña");
                return;
            }
            if(pass1!=pass2){
                alertify.alert('Error','Las contraseñas no coinciden')
                return;
            }

            //ajax cambiar la contraseña
            $.ajax({
                url: 'php/actuContra.php',
                type: 'POST',
                data: {pass:pass1, usu:usuario},
                success: function(response){
                    if(response==1){
                        alertify.confirm('Actualizado','Su contraseña se ha actualizado con éxito',
                            function(){
                                window.location.href = "index.html"
                            },
                            function(){
                                window.location.href = "index.html"
                            }
                        )
                    }
                    else{
                        alertify.alert('Alerta','No se pudo actualizar la contraseña, intente de nuevo')
                    }
                    //console.log(response);
                }
            });
            //window.location.href = "admin-usuario.html";
            //despues de todo el proceso de iniciar sesión
            if (window.history.replaceState) {
                window.history.replaceState(null, null, window.location.href);
            }         
            //return false;
        })
        
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    }
)
