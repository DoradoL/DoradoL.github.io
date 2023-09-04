document.getElementById('salir').onclick = function(){
    alert("Esta saliendo de la pagina!");
}
// if (distancia==si){
//     alert("El costo del servicio es $2500")
// } 
// else {
//     alert("El costo del servicio es $3500")
// }
document.getElementById('contrato').onclick= function comprar(){
    var distancia= prompt("¿Es residente de la ciudad de San Nicolas de los Arroyos?");
    if (distancia==("si")){
        alert("El costo del servicio es $2500")
    } 
    else {
        alert("El costo del servicio es $3500")
    }
    }
comprar()
// function contr(){
//     if (distancia="si"){
//         alert("El costo del servicio es $2500")
//     } 
//     else {
//         alert("El costo del servicio es $3500")
//     }
// }
// contr()


