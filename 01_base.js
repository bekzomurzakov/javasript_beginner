// const firstName = 'Bekzat'
// const age = 25 //
// const isProgrammer = true

// const _ = 'private'
// const $ = 'some value'

// const withNum5 = '5'

// let currenrYear = 2021
// const birthYear = 1995

// const age = currenrYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /=a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currenrYear)
// console.log(--currenrYear)
// console.log(c)

// const isProgrammer = true
// const name = 'Bekzat'
// const age = 25
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
// for (let car of cars) {
//     console.log(car)
// }

const person = {
    firstName: 'Bekzat',
    lastName: 'Omurzakov',
    year: 1995,
    languages: ['Ru', 'En', 'De'],
    nasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
console.log(person)
person.greet()
