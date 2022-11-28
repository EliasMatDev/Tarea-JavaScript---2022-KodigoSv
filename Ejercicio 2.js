/* EJERCICIOS JAVASCRIPT - TAREA */

/* EJERCICIO #2: En un cierto país el impuesto que se debe pagar por artículos importados se calcula mediante las siguientes reglas:​
Precio: ---------------  Impuesto
$ 0.00 - $ 20.00 ------ No genera impuesto.​
$ 20.01 - $ 40.00 ------ 30 %​
$ 40.01 - $ 500.00​ ------ 40 %​
$ 500.01 en adelante ​------ 50 %​           */

let precio;
let calculo = 0;
precio = 40;  /* Aqui ingresamos el precio a calcular */

if(precio > 20 && precio <= 40){
    calculo = precio * 0.30;   /* Impuesto del 30% */
    console.log("Precio del articulo " + precio + "\n" + 
                "Impuesto a pagar " + calculo + "\n" +
                "El impuesto es del 30%");
}else if(precio > 40 && precio <= 500){
    calculo = precio * 0.40;    /* Impuesto del 40% */
    console.log("Precio del articulo " + precio + "\n" + 
                "Impuesto a pagar " + calculo + "\n" +
                "El impuesto es del 40%");
}else if(precio > 500){
    calculo = precio * 0.50; /* Impuesto del 50% */
    console.log("Precio del articulo " + precio + "\n" + 
                "Impuesto a pagar " + calculo + "\n" +
                "El impuesto es del 50%");
}else{
    console.log("El precio del articulo no genera impuestos");
}