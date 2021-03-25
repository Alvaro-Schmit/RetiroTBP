function ir(){
let c=108;
if(document.form.password.value==c){

window.location="OnePage.html";}
else{
alert('Contrasena incorreta');
}
}
const entrada = document.getElementById('btn')

window.addEventListener('DOMContentLoaded', function(event){

  entrada.addEventListener('click', ir)
})


/*//////////////////////////////////////////*/

// function entrarConEnter ()
// {
//   window.addEventListener('keyup', entrarConEnter)
//   if (e.key == "Enter"){ 
//     window.location="OnePage.html";}
//     else{
//     alert('Contrasena incorreta');
//     }
//     }

  
