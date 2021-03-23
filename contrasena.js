function ir(){
let c=108;
if(document.form.password.value==c){

window.location="OnePage.html";}
else{
alert('Contrasena incorreta');
}
}
window.addEventListener('DOMContentLoaded', function(event){
  const clave = document.getElementById('clave')
  const entrada = document.getElementById('btn')
  entrada.addEventListener('click', ir)
})
/*//////////////////////////////////////////*/

// nombredelcampo.addEventListener("keyup", miFuncion(event))
// function miFuncion(e) {
//     if (e.key == "Enter") {
//         console.log("Presionó ENTER")
//         }
// }

// function capturarEnter(event) {
//   let c=108;
//     if (clave.value==c && event.keyCode == 13) { // 13 es el código asociado a la tecla enter
//        window.location="OnePage.html"; 
     
//      }
//  }
