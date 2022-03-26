console.log('Empezando con Condicionales');

// 1.- Pedir la edad
// 2.- Comparar la edad con diferentes limites
// 3.- Imprimir un mensaje respecto a cada condicion

let age = prompt('Ingresa tu edad')

if (age == '') {
    alert('No ingresaste tu edad')
    
}

if (age < 20) {
    console.log('Todavia no tienes 20');
    
}
else if (age < 30) {
    console.log('Estas en los 20s');
    
}
else {
    console.log('Ya tienes 30 o mas');
}
