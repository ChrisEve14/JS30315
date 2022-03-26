console.log('Funciones flecha');

// (() => {
//     console.log('Hola');
// })()
// truco para forzar a que la funcion anonima aparezca en la consola
// colocar un parentesis al inicio y uno al final del corchete y luego un juego de parentesis al lado

const saludar = () => {
    console.log('Hola');
}

saludar()

// const alCuadrado = (numero) => {
//     resultado = numero * numero
//     return resultado
// }

// const alCuadrado = (numero) => {
//        return numero * numero 
//      }

// const alCuadrado = n => {
//     return n * n
// }

const alCuadrado = n =>  n * n

let res = alCuadrado(9)
console.log(res);

alert (alCuadrado(7));