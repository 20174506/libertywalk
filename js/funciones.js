jQuery(document).ready(function($) {
  $(".boton").click(function() {
    $("header nav").slideToggle("750")
  });

    $("#blackoverlay h1").fadeIn(1500);

});



function Validacion(){

  var nombre=document.formsh.Nombre1.value.length;
  var direccion=document.formsh.Direccion.value.length;
  var pais=document.formsh.Pais.value.length;
  var ocupacion=document.formsh.Ocupacion.value.length;
  var genero=document.formsh.Genero.value;
  var mensaje=document.formsh.Mensaje.value.length;

if (nombre=="0") {
  alert("Debe escribir su nombre")
  document.formsh.Nombre1.focus()
  return false
}

if (direccion=="0") {
  alert("Debe indicar su Dirección")
  document.formsh.Direccion.focus()
  return false
}
if (pais=="0") {
  alert("Debe indicar su Pais")
  document.formsh.Pais.focus()
  return false
}

if (ocupacion=="0") {
  alert("Debe escribir su Ocupación")
  document.formsh.Ocupacion.focus()
  return false
}

if (genero=="nada") {
  alert("Debe seleccionar su Genero")
  document.formsh.Genero.focus()
  return false
}

if (mensaje=="0") {
  alert("Debe escribir su Mensaje")
  document.formsh.Mensaje.focus()
  return false
}
}


function Validacion2(){

  var nombre=document.formsh.Nombre1.value.length;
  var direccion=document.formsh.Direccion.value.length;
  var pais=document.formsh.Pais.value.length;
  var ocupacion=document.formsh.Ocupacion.value.length;
  var genero=document.formsh.Genero.value;
  var tlf=document.formsh.telefono.value.length;

if (nombre=="0") {
  alert("Debe escribir su nombre")
  document.formsh.Nombre1.focus()
  return false
}

if (direccion=="0") {
  alert("Debe indicar su Dirección")
  document.formsh.Direccion.focus()
  return false
}
if (pais=="0") {
  alert("Debe indicar su Pais")
  document.formsh.Pais.focus()
  return false
}

if (ocupacion=="0") {
  alert("Debe escribir su Ocupación")
  document.formsh.Ocupacion.focus()
  return false
}

if (genero=="nada") {
  alert("Debe seleccionar su Genero")
  document.formsh.Genero.focus()
  return false
}

if (tlf=="0") {
  alert("Debe escribir su Numero Telefonico")
  document.formsh.telefono.focus()
  return false
}
}
