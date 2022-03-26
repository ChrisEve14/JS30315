console.log('Eventos 2');

const boton = document.getElementById('boton')

boton.addEventListener('click', () => {
    const input = document.getElementById('entrada')
    const nombreProducto = input.value

    const root = document.getElementById('root')
    const nuevoProducto = document.createElement('li')
    nuevoProducto.innerText = nombreProducto
    root.appendChild(nuevoProducto)
})