// function greet(name) {
//     console.log('Привет - ', name)
// }

// const greet2 = function hreet2(name) {
//     console.log('Привет 2 - ', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// let counter = 0
// setInterval(function() {
//     console.log(++counter)
// }, 1000

function greet(name) {
    // console.log('Привет - ', name)
}

const arrow = () => {
    ('Привет - ', name)
}

const arrow2 = name => console.log('Привет - ', name)

// arrow2('Бекзат')

const pow2 = num => num ** 2

// console.log(pow2(5))

const sum = (a, b=1) => a + b

// console.log(sum(41))

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Бекзат')
console.log(logWithLastName('Омурзаков'))
console.log(logWithLastName('Кузнецов'))