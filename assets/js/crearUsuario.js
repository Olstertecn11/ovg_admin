var nom=0;
var per=0;
$(document).ready(
    function() {
        alertify.defaults.transition = "slide";
        alertify.defaults.theme.ok = "btn btn-primary";
        alertify.defaults.theme.cancel = "btn btn-danger";
        alertify.defaults.theme.input = "form-control";

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

        $('#submitButton').on('click', function(){
            var nombre = document.getElementById("NC").value;
            var usuario = document.getElementById("NU").value;
            var pass = document.getElementById("PW").value;
            var vpass = document.getElementById("VPW").value;
            var mail = document.getElementById("EM").value;
            //verificar que ninguno este vacío
            if(nombre==""||nombre.length==0){
                alertify.alert("Alerta","Debe ingresar el nombre del encargado del usuario");
                return;
            }
            if(usuario==""||usuario.length==0){
                alertify.alert("Alerta","Debe ingresar un nombre de usuario");
                return;
            }
            if(pass==""||pass.length==0){
                alertify.alert("Alerta","Debe ingresar una contraseña");
                return;
            }
            if(vpass==""||vpass.length==0){
                alertify.alert("Alerta","Debe confirmar la contraseña");
                return;
            }
            if(mail==""||mail.length==0){
                alertify.alert("Alerta","Debe ingresar el correo electrónico del encargado del usuario");
                return;
            }
            if(vpass!=pass){
                alertify.alert("Error","¡Las contraseñas ingresadas no coinciden!")
            }
            //ahora si ya dejará ingresar
            $.ajax({
                data: {nom:nombre, user:usuario,ps:pass,email:mail, usuario:nom,tipo:per},
                type: 'POST',
                url: "php/crearUsuario.php",
                success: function(data){
                    console.log(data);//o respuesta...
                    if(data==1){
                        //usuario registrado con éxito
                        alertify.success("Usuario ingresado con éxito");
                        alertify.alert("Aviso","El usuario "+usuario+" ha sido creado con éxito")
                        
                    }else{
                        //fallo al registrar
                        alertify.alert("ERROR","No se ha podido crear al usuario, intente de nuevo")
                        alertify.error("ERROR: No se pudo crear al usuario");
                    }
                    document.getElementById("PW").value="";
                    document.getElementById("VPW").value="";
                },
                error: function(jqXHR,error){
            
                    console.log("Error:" + jqXHR);
                }
            });

            //por defecto permiso 2 que es gestor de contenido
            return false;
        })

        //al actualizar el nombre de usuario
        $('#NU').on('input',function(e){
            verificar();
        });
    }
)

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

//verificar si ya existe el nombre de usuario
function verificar(){
    var usuario = document.getElementById('NU').value;
    $.ajax({
        url: "../php/verificar.php",
        type: 'POST',
        data: {user: usuario},
        async: true,
        success: (respuesta)=>{
            var res = respuesta.split(",");
            //console.log(respuesta+" / "+res+" / "+res[0]+" / "+res[1]+" / "+res[2])
            if(res[0]==1){
                //respuesta 1 es que si lo encontro
                $("#aviso").css("display","block");
                document.getElementById('NC').value=res[1];
                //document.getElementById('submitButton').disabled=true;
                $("#submitButton").removeClass("btn-primary").addClass("btn-warning");

            }
            else{
                $("#aviso").css("display","none");
                document.getElementById('NC').value=""
                //document.getElementById('submitButton').disabled=false;
                $("#submitButton").removeClass("btn-warning").addClass("btn-primary");
            }
        }
    });
}