/* EJERCICIOS JAVASCRIPT - TAREA */

/* EJERCICIO #1: Leer un número entero y determinar si tiene 3 dígitos. */
let entero = 148; /* Ingresamos cantidad de numeros */
let cadena = entero.toString(); 

if(cadena.length == 3){
    console.log("El entero tiene 3 dígitos");
}else{
    console.log("El entero no tiene 3 digitos, tiene "+ cadena.length);   /* En caso de no tener 3 dígitos enteros*/
}