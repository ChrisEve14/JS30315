console.log('Retornar Funciones');

function regresaFuncion() {
    return () => {
        console.log('Hola mundo');
    }
}

regresaFuncion()()

// regresaFuncion ()() es igual a const nuevaFuncion = regresaFuncion ()

const nuevaFuncion = regresaFuncion()

nuevaFuncion()


function multiplicarPor(multiplicador) {
    // return numero => { return numero * multiplicador}
    return numero => numero * multiplicador
}

const multiplicarPor10 = multiplicarPor(10)
// numero => numero * 10

console.log(multiplicarPor10 (5));

function saludador(nombre) {
    return () => { console.log('Hola ' + nombre) }
}

const saludarJuan = saludador('Juan')

saludarJuan()

const saludarAna = saludador('Ana')
saludarAna()