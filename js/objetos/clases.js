console.log('Clases');

class Personaje {

    constructor(name, lives, power){
        this.name = name
        this.lives = lives
        this.power = power

    }

    atacar(valor){
        this.power = this.power + valor

    }


    recibirAtaque(valor){
        const newLive = this.lives - valor
        if (newLive <= 0) {
            console.log(this.name + ' ya esta muerto');
            this.lives = 0
        } else {
            this.lives = this.lives - valor
        }

    }
    mmostrarDatos (){
        console.log(`${this.name} tiene ${this.lives} vidas y ${this.power} poder`);
    }
}

const hobbit1 = new Personaje ('Frodo', 10, 50)
const elfo = new Personaje ('Sam', 8, 60)
const elfo2 = new Personaje ('Dobby', 9, 70)

elfo.mmostrarDatos()
elfo.atacar(10)
elfo.recibirAtaque(3)
elfo.mmostrarDatos()

hobbit1.mmostrarDatos()

elfo2.recibirAtaque(9)
elfo2.mmostrarDatos()