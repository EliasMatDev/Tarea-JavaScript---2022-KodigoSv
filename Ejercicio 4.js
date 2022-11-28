/* EJERCICIOS JAVASCRIPT - TAREA */

/* Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario. */

let tabla = 7;  /* Tabla */
let result = 0; /* Resultado */

for(let i=1; i <= 10; i++){ /* El primer ciclo i=1 despues sumara 1 mas es decir ya lo condiciona */
    result = tabla * i;
    console.log(tabla + "*" + i + "=" + result);
}