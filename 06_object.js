const person = {
    name: 'Bekzat',
    age: 25,
    isProgrammer: true,
    languages: ['ru','en','de'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed Key',
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log('this:', this)
        console.info('Информация про человека по имени:', this.name)
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person['ageKey'])
// console.log(person['complex key'])

// console.log(person)
// person.greet()

// person.age++
// person.languages.push('by')
// console.log(person)
// // person['key_4'] = undefined
// delete person['key_4']

// console.log(person)
// console.log(person['key_4'])

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge = 10, languages} = person

// console.log(name, personAge, languages)

// console.log(person)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//     console.log('key:', key)
//     console.log('value:', person[key])
//     }
// }

// const keys = Object.keys(person)

// person.info()

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this))
    }
}

logger.keys(person)