console.log('Operadores');

// Version uno
// const date = localStorage.getItem('date') || false
// date ? console.log('ya hay fecha', date) : localStorage.setItem('date', new Date())

//Version dos
// const date = localStorage.getItem('date') || new Date()
// localStorage.getItem('date') ? null : localStorage.setItem('date', date)

// Version dos hecho con IF
let date = localStorage.getItem('date')
if (!date){
    date = new Date ()
    localStorage.setItem('date', date)
}

const root = document.getElementById('root')

const dateElement = document.createElement('h3')

dateElement.innerText = date

root.appendChild(dateElement)


