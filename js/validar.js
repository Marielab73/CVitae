  
  //capturo informacion desde inputs

  area=document.getElementById("idTextarea");
  apellido=document.getElementById("idApellido");
  nombre=document.getElementById("idNombre");

  botonEnviar=document.getElementById("idBoton");
  botonEnviar.addEventListener("click",funcionEnviar);

  
  email=document.getElementById("mail");
  valmail=document.getElementById("mail");
  valmail.addEventListener("click",funcionvalEmail);

  function funcionvalEmail()
       {
           if(email.value==="")
            {
               alert("Debe ingresar Correo valido");
               email.focus();
               return;
            }
            var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
            if ( !validEmail.test(email.value) )
             {
             alert('Debe ingresar un Correo valido');
             email.focus();
             return;
              }
                     
       }



  
  function funcionEnviar()
  
  {

         if(nombre.value==="")
             {
                     alert("Debe ingresar Nombre");
                     nombre.focus();
                     return;
             }

         if(apellido.value==="")
             {
                     alert("Debe ingresar Apellido");
                     apellido.focus();
                     return;
             }


         if(area.value==="")

         {
            alert("Debe ingresar un Mensaje");
            area.focus();
            return;
         }

        else
        
        {
               alert("Se envio su mensaje correctamente. Gracias por contactarme.");
               return;
            
                    
       }

  }