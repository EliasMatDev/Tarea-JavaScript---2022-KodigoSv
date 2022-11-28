/* EJERCICIOS JAVASCRIPT - TAREA */

/* El costo de las llamadas telefónicas internacionales depende de la zona geográfica en la que se encuentre el país destino y del número de minutos hablados. En la siguiente tabla se presenta el costo del minuto por zona. A cada zona se le ha asociado una clave.​
Nota: Para llamadas con duración menor a 30 minutos se hace descuento del 10%.​

Clave​	        Zona​	    Precio​
12  ​	América del Norte​	$ 2.00​
15  ​	América Central​	$ 2.20​
18​ 	América del Sur​	$ 4.50​
19  ​	Europa  ​	        $ 3.50​
23  ​	Asia​	            $ 6.00​
25  ​	África  ​	        $ 6.00​
29  ​	Oceanía​	        $ 5.00​
*/

let clave;
let minutos;
let tarifa = 0;
clave = 19; /* Indicamos la clave */
minutos = 35; /* Los minutos hablados */

switch(clave){
    case 12:
        tarifa = minutos * 2.00;  /* Clave con su respectivo precio */
        if(minutos < 30){  /* Nota: duración menor a 30 minutos se hace descuento del 10 */
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: América del Norte" + "\n" +
                        "Número de minutos hablados: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: América del Norte" + "\n" +
            "Número de minutos hablados: " + minutos + "\n" +
            "Tarifa: " + tarifa);
        }
        break;
    case 15:
        tarifa = minutos * 2.20;  /* Clave con su respectivo precio */
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: América Central" + "\n" +
                        "Número de minutos hablados: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: América Central" + "\n" +
            "Número de minutos hablados: " + minutos + "\n" +
            "Tarifa: " + tarifa);
        }
        break;
    case 18:
        tarifa = minutos * 4.50;  /* Clave con su respectivo precio */
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: América del Sur​" + "\n" +
                        "Número de minutos hablados: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: América del Sur​" + "\n" +
            "Número de minutos hablados: " + minutos + "\n" +
            "Tarifa: " + tarifa);
        }
        break;
    case 19:
        tarifa = minutos * 3.50;  /* Clave con su respectivo precio */
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Europa​" + "\n" +
                        "Número de minutos hablados: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Europa​" + "\n" +
            "Número de minutos hablados: " + minutos + "\n" +
            "Tarifa: " + tarifa);
        }
        break;
    case 23:
        tarifa = minutos * 6.00;  /* Clave con su respectivo precio */
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Asia" + "\n" +
                        "Número de minutos hablados: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Asia" + "\n" +
            "Número de minutos hablados: " + minutos + "\n" +
            "Tarifa: " + tarifa);
        }
        break;
    case 25:
        tarifa = minutos * 6.00;  /* Clave con su respectivo precio */
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: África​" + "\n" +
                        "Número de minutos hablados: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona África​" + "\n" +
            "Número de minutos hablados: " + minutos + "\n" +
            "Tarifa: " + tarifa);
        }
        break;
    case 29:
        tarifa = minutos * 5.00;  /* Clave con su respectivo precio */
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Oceanía​" + "\n" +
                        "Número de minutos hablados: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Oceanía​" + "\n" +
            "Número de minutos hablados: " + minutos + "\n" +
            "Tarifa: " + tarifa);
        }
        break;
}