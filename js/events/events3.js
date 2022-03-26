console.log('Eventos 3');

const link = document.getElementById('send')

link.addEventListener('click', clickEnEnviar)
// link.onclick = clickEnEnviar (otra forma de hacerlo)

function validarFormulario() {
    const user = document.getElementById('user')
    const password = document.getElementById('password')

    console.log(user.value);
    console.log(password.value);
    
}

function clickEnEnviar (evento) {
    evento.preventDefault()
    console.log('Click en el enlace');
    console.log(evento.target);
    validarFormulario()
    
}


