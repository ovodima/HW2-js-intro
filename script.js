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
//---------------------------------------
const taskSeven = 7
console.log('Task ' + taskSeven)

for(let i = 5; i>= 1; i--) {
    console.log(i)
}
//--------------------------------------
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
// -------------------------
const taskNine = 9
console.log('Task ' + taskNine)

function getDayInfo(position) {
    switch(position) {
        case 0:
        console.log('Sunday')
        break
        
        case 1:
        console.log('Monday')
        break
        
        case 2:
        console.log('Tuesday')
        break
        
        case 3:
        console.log('Wednesday')
        break
        
        case 4:
        console.log('Thursday')
        break
        
        case 5:
        console.log('Friday')
        break
        
        case 6:
        console.log('Saturday')
        break

        default:
            console.log('Wrong data')
    }
}

getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(7)
//-------------------------------------------------

const taskTen = 10
console.log('Task ' + taskTen)
let arr = ['a', 'b', 'c']
let firstPush = arr.push(1,2,3) 
console.log(arr)
//----------------------------------------------------
const taskEleven = 11
console.log('Task ' + taskEleven)
let arrFirst = [1, 2, 3]
let arrSecond = [4, 5, 6]
console.log(arrFirst.concat(arrSecond))
