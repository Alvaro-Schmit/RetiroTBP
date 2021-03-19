function ir(){
let c=108;
if(document.form.password.value==c){

window.location="OnePage.html";}
else{
alert('Contrasena incorreta');
}
}

/*//////////////////////////////////////////*/


function desplazarMe(titulo) {
  $('html, body').animate({
      scrollTop: $('#' + titulo).offset().top
  }, 1600)
}



$('#llenarPlantilla').click(function() {
  desplazarMe("plantilla")
})


$('#btnVolverACotizar').click(function() {
  desplazarMe("plantilla")
})