const taskFive = 5
console.log('Task ' + taskFive)

let a = 5
let b = 5
console.log(a + b)

let c = 141
let d = 75
console.log(c - d)

let e = 9
let f = 8
console.log(e*f)

let g = 81
let h = 9
console.log(g / h)
//-------------------------

const taskSix = 6
console.log('Task ' + taskSix)

for(let i = 1; i <= 5; i++) {
    console.log(i)
}

const taskSeven = 7
console.log('Task ' + taskSeven)

for(let i = 5; i>= 1; i--) {
    console.log(i)
}

const taskEight = 8
console.log('Task ' + taskEight)

function getMarkInfo(condition) {
    if(condition === 10){
        console.log('У вас максимальный балл')
    } else {
        console.log('У вас средний балл')
    }
}

getMarkInfo(10)
getMarkInfo(5)