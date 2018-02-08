function comprovaDia(){ // Amb aquesta funcio comprovam que l'usuari introdueixi el dia 1, 
                        // si no l'introdueix el tendra que tornar a introduir
    var C= new Date (document.getElementById("data").value);
    var dia= C.getDate();

    if (dia>1){
        alert("Has d'introduir el dia 1 del mes que vulguis, torna a introduir el teu mes!");
        
    } else{
        calculo(); 
    }
}
function calculo (){// asi calculamos la cuota mensual de la hipoteca
var preu = parseFloat(document.getElementById("capital").value);
var interesos= parseFloat( document.getElementById("interes").value/12);
var plaços= parseInt(document.getElementById("plaç").value*12);
var cuota;
var A= preu*interesos;
var B= (100*(1- Math.pow(1+ (interesos/100), -plaços)));

cuota= A/B ;
alert("El plaç de la teva hipoteca mensual es de: "+ cuota.toFixed(2)+"€");

}