/* Ejercicio 1 */

// Opcion 1

let distancia = 10


switch (true) {
    case (distancia === 0 || distancia <= 1000): console.log("pie");
    break
    case (distancia < 10000): console.log("bicicleta");
    break
    case (distancia < 30000): console.log("colectivo");
    break
    case (distancia < 100000): console.log("auto");
    break
    case (distancia > 100000): console.log("avion");
    break
    default: console.log("No vayas, es muy lejos");
}

// Opcion 2

let distance = 50000

if (distance === 0 || distance <= 1000){
    console.log("PIE");
    }else if (distance < 10000){
        console.log("BICICLETA");
    }else if (distance < 30000){
        console.log("COLECTIVO");
    }else if (distance < 100000){
        console.log("AUTO");
    }else{
        console.log("AVION");
    }


    /* Ejercicio 2 */

    const primerArray = [1, 5, 2, 6, 9]

    const segundoArray = [5, 20, 46, 8]

    let mayor = primerArray[0]

    function calcularElMayor (array) {
        for(let i = 0; i < array.length; i++){
            if(array[i] > mayor){
                mayor = array[i]
            } 
        }

        return mayor
    }
    
    const mayorDelPrimerArray = calcularElMayor(primerArray)
    console.log(`El numero mas grande del primer array es ${mayorDelPrimerArray}`);
    
    const mayorDelSegundoArray = calcularElMayor(segundoArray)
    console.log(`El numero mas grande del primer array es ${mayorDelSegundoArray}`);