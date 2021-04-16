const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('Reno')

// cars.unshift('Volga')
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(lastCar)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('BMW')
// cars[index] = 'Porsche'
// console.log(cars)

// cars.includes('Mazda')
// console.log(cars.includes('Mazda'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// const pow2fib = fib.map(num => num ** 2)
// const filteredNumbers = pow2fib.filter(num => {
//     return num > 20
// })
// console.log(pow2fib)
// console.log(filteredNumbers)

// console.log(cars)

// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    {name: 'Bekzat', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

const allBudget = people.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

console.log(allBudget)