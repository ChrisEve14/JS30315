console.log('Objetos');

// objeto literal

const producto1 = {
    id: 1,
    titulo: 'iPhone',
    precio: 1000,
    stock: 5
}

// console.log(producto1.titulo);
// console.log(producto1['stock']);

console.log(producto1);

for (const key in producto1) {
    console.log(key, producto1 [key]);

}
