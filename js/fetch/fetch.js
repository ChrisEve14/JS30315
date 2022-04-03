console.log('Fetch');

const URL = 'https://swapi.dev/api/planets/'

fetch(URL)
    .then( respuesta =>  respuesta.json() )
    .then( datos => {
        // console.log(datos);
        agregarNamesAlDOM(datos.results)
        });

function agregarNamesAlDOM(planets) {
    let root = document.getElementById('root')
    root.innerHTML = null
    planets.forEach(p => {
        // console.log(p.name);
        let li = document.createElement('li')
        li.innerText = p.name
        root.appendChild(li)
    });
}



