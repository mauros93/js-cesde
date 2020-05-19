//codigo 1
let nombre = prompt('ingresa tu nombre');
let telefono = prompt('ingresa tu telefono');
let nAbonos = prompt('ingresa el numero de abonos que deseas');
let tribuna = prompt('ingresa la tribuna \n ingresa 1 si deseas elegir Sur-Norte \n ingresa 2 si deseas elegir Oriental \n ingresa 3 si deseas elegir Occidental ');

let sur_norte = 144.000;
let oriental = 215000;
let occidental = 444000;

//Aca definire la variable totalAbono con var ya que con let toma la variable como local y no permite usarla fuera de los condicionales
if (tribuna == '1'){
    var totalAbono = nAbonos * sur_norte;
}
else if (tribuna == '2'){
    var totalAbono = nAbonos * oriental;
}
else if (tribuna = '3'){
    var totalAbono = nAbonos * occidental;
}
alert(totalAbono);


//Codigo 2
let cedula = prompt('Ingresa tu numero de cedula')
let estrato = prompt('Escribe Un numero entre 1 y 6 dependiendo de tu estrato socio economico')

if (estrato == 1){
    alert ("El usuario con cedula " + cedula + " tiene un descuento del 40%")
}        
else if (estrato == 2){
    alert ("El usuario con cedula " + cedula + " tiene un descuento del 20%")
}        
else if (estrato == 3){
    alert ("El usuario con cedula " + cedula + " tiene un descuento del 10%")
}
else{
    alert ("El usuario con cedula " + cedula + " No tiene ningun descuento")
}



//Codigo 3
let descuento = 10000;
let precioTorta = 30000;
let domicilio = 7800;
let precioTotal = domicilio + precioTorta - descuento;
alert ("Haz comprado una torta mediana y el precio total con el domicilio es " + precioTotal);

alert("ve al final de la pagina para saber que es jQuery y en que se diferencia con JavaScript")