console.log('Eventos');

// const btn = document.getElementById('boton')
const btn = document.querySelector('#boton')

// btn.addEventListener('click', onClickHandler )

// function onClickHandler() {
//     console.log('hiciste click en el boton');
// }

// btn.addEventListener('click', ()=>{console.log('hiciste click en el boton');})

const inp = document.getElementById('entrada')
inp.oninput = () => {console.log('hubo cambio');}

btn.onclick = ()=>{
    console.log('hiciste click en el boton')
    console.log( inp.value );
}





