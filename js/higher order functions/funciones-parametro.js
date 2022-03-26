console.log('Funciones por Parametro');

const nombresClaseJS = ['Rodrigo', 'Agustin', 'Esmeralda', 'Diego', 'Christian', 'Elena', 'Marcos']


function transformarNombres(nombres, transformador ) {
    let nuevosNombres = []
    for (const nombre of nombres) {
        nuevosNombres.push( transformador(nombre) )
    }
    return nuevosNombres
}

const convertirMayus = texto => texto.toUpperCase()

console.log( convertirMayus('Hola mundo') )

const nombres = transformarNombres (nombresClaseJS, convertirMayus)

console.log(nombres.join ('-'));

const nombresMinus = transformarNombres( nombresClaseJS, t => t.toLowerCase() )
console.log( nombresMinus.join('*'));

