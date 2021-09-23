  function mail (valor){
      re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  if(!re.exec(valor)){
      alert('email no valido');
  }
    else 
      alert('email valido');
  }

  function valida_envia(){
    if (document.fvalida.nombre.value.length==0){
         alert("Tiene que escribir su nombre")
         document.fvalida.nombre.focus()
         return 0;
    }

    if (document.fvalida.apellidos.value.length==0){
        alert("Tiene que escribir su apellido")
        document.fvalida.apellidos.focus()
        return 0;
    }

    if (document.fvalida.correo.value.length==0){
        alert("Tiene que ingresar un correo")
        document.fvalida.correo.focus()
        return 0;
    }

    if (document.fvalida.comentario.value.length==0){
        alert("Tiene que escribir un comentario")
        document.fvalida.comentario.focus()
        return 0;
    }

    if (document.fvalida.termino.selectedIndex==0){
      alert("Tiene que aceptar los Términos y condiciones")
      document.fvalida.termino.focus()
      return 0;
  }
    //el formulario se envia
    alert("Muchas gracias, nos contactaremos.");
    document.fvalida.submit();
}