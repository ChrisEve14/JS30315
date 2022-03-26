console.log('Promises 2');

const randPromise = () => {
    return new Promise((resolver, rechazar) =>{
        const rand = Math.random()
        console.log(rand);
        if (Math.round(rand) == 1) {
            resolver('Se resolvio')
        } else {
            rechazar('Error se rechazo!')
        }

    })
}

// randPromise()
//     .then( console.log )
//     .catch( console.log )

randPromise()
    .then( (response) => {
        console.log(response);
    })
    .catch( console.log )
