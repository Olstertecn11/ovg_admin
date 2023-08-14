$(document).ready(
    //funcion a ejecutar una vez este cargado el html
    function() {
        alertify.defaults.transition = "slide";
        alertify.defaults.theme.ok = "btn btn-primary";
        alertify.defaults.theme.cancel = "btn btn-danger";
        alertify.defaults.theme.input = "form-control";
        //seleccionare la clase / id que tendra el botón, y le agregare que ejecute tal codigo al suceder el 
        //evento tipo click
        $('#submitButton').on('click', function(){            
            var name = document.getElementById('usuario').value;
            var mail = document.getElementById('correo').value;
            if(name.length<1||name==""||name==null){
                alertify.alert('Error',"Debe ingresar el nombre del usuario");
                return;
            }
            if(mail.length<1||mail==""||mail==null){
                alertify.alert('Error',"Debe ingresar el correo electrónico del usuario");
                return;
            }
            //ajax valida a donde enviar
            $.ajax({
                url: 'php/token.php',
                type: 'POST',
                data: {nomU:name, mail:mail},
                success: function(response){
                    switch(response){
                        case '1':
                            //exito en creacion
                            alertify.alert("Correcto","El token se ha creado con éxito y ha sido enviado a su correo electrónico para que pueda proceder con la recuperación de contraseña")
                            alertify.success("Token enviado y creado con éxito")
                            document.getElementById('correo').value="";
                            break;
                        case '0':
                            //fallo
                            alertify.error("Ha ocurrido un error, intente de nuevo")
                            console.log(response)
                            break;
                        default:
                            //no coincide
                            alertify.alert("Error","Credenciales incorrectas")
                            //return;
                    }
                    //console.log(response);
                }
            });
            //alertify.alert('Alerta','En este momento esta función esta en mantenimiento, por favor pruebe en otro momento')
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
