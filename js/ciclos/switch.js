console.log('Switch');

let number = prompt('Dame un numero del 1 al 10 que sea divisible entre 3')

switch (parseInt (number)) {
    case 3:
        alert('Si, el 3 es divisible entre 3')
        break;
    case 6:
        alert('Si, el 6 tambien es divisible entre 3')
        break;
    case 9:
        alert('Si, el 9 tambien es divisible entre 3')
        break;
    default:
        alert('El numero no es divisible entre 3')
        break;
}