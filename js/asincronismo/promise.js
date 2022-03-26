console.log('Promises');

const promesa = new Promise( (resolve, reject) => {

    // reject('fallo la promesa!!!')

    setTimeout( () => {
        resolve('la promesa se resolvio');
    }, 5000)

})

// res es de result

promesa.then( res => {
    console.log(res);
}).catch ( err => {
    console.error(err);
})

console.log('termino mi script');