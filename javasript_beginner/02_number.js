// const num = 42
// const float = 42.42
// const pow = 10e3

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// // console.log('Math.pow 53',Math.pow(x:2, y:53) - 1)
// console.log('MIN_SAFE_INTEGER',Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE',Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log(Number.NaN)
// console.log(typeof NaN)
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(+stringInt +2)

// console.log(parseFloat(stringFloat) +2)

// console.log(0.4 + 0.2)
// console.log((0.4 + 0.2).toFixed(1))

// console.log(9007199254740991999999n - 900719925474099199999n)

// console.log(10n - 4)
// console.log(parseInt(10n) - 4)

// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(42))
// console.log(Math.max(42, 12, 23, 11, 422))
// console.log(Math.min(42, 12, 23, 11, 422))

function getRandomBetween(min, max) {
    return Math.floor( Math.random() * (max - min +1) + min)
}

console.log(getRandomBetween(10, 42))