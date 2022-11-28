/* EJERCICIOS JAVASCRIPT - TAREA */

/* Elaborar un algoritmo para leer la edad de 10 personas y mostrar cuantos son mayores de edad. */

const array = [4,8,15,19,30,45,32,8,18,45,50,70,76,85,];
let contador = 0;

array.forEach(value => {
    if(value >= 18){
        contador++;
        console.log(value);  /* me leera la edad y mostrara en consola */
    }
})

console.log("Total de personas mayores de edad: " + contador);    /* Mostrara el total de cuantos son mayores de edad*/