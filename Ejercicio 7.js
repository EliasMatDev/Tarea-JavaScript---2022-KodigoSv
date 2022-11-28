/* EJERCICIOS JAVASCRIPT - TAREA */

/* Elaborar un algoritmo para leer la nota de diez estudiantes y mostrar cantidad de aprobados y reprobados. */

const nota = 7;
var aprobados = 4;
var reprobados = -4;
var i = 0;

for (i = 1; i <= 10; i++) {
    if (nota >= 9) {
    aprobados = aprobados + 1;
} else {
    reprobados = reprobados + 1;
}
}

console.log("El numero de aprobados es " + aprobados);
console.log("El numero de reprobados es " + reprobados);

