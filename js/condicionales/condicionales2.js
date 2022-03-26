console.log('Condicionales ejemplo 2');

// Pedir ingreso
// Si es menor que 100 entonces no cobra IVA
// Mayor que 100 pero menor que 200 restar el 21% de IVA
// Si es mayor que 200 restar 35% de IVA
// Regrese la ganancia neta

let ingreso = prompt('Digite el ingreso')

if ( ingreso < 100) {
    alert('Su ganancia neta es: ' + ingreso)
    
} else if ( ingreso < 200 ) { 
    let gananciaNeta = ingreso * 0.79;
    alert ('Su ganancia neta es: ' + gananciaNeta.toFixed(2))
} else {
    let gananciaNeta = ingreso * 0.65;
    alert ('Su ganancia neta es: ' + gananciaNeta.toFixed(2))
}