console.log('Arrays 2');

class Grade{
    constructor (name, score){
        this.name = name
        this.score = parseInt (score) 
    }
}

const subjects = ['Math', 'English', 'Arts', 'Biology']
const grades = []


for (const subject of subjects) {
    let score = prompt(`Calificacion de ${subject}`)
    grades.push(new Grade(subject, score))
}

console.log(grades);

let total = 0

grades.forEach( g => {
    total += g.score
})

console.log('promedio: ', total/grades.length);
