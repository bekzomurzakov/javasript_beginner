// const name = 'Бекзат'
// const age = 25

// // function getAge() {
// //     return age
// }

// // cot output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет'
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет`
// console.log(output)

// const output = `
// <div>This is div</div>
// <p>this is 0</p>
// `
// console.log(output)

function logPerson(s, name, age) {
    console.log(s, name, age)
    return 'Info about person'
}

const personName = 'Бекзат'
const personAge = 25

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`

console.log(output)