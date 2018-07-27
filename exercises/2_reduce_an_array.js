const assert = require('assert')

const oneToFive = [1, 2, 3, 4, 5]
const sumOfOddNumbers = (array) => array.reduce((accumulator, currentValue) => currentValue % 2 === 1 ? accumulator + currentValue : accumulator, 0)
var totalOfOddDigits = sumOfOddNumbers(oneToFive);

console.log('The total is %d', totalOfOddDigits)

assert.equal(9, sumOfOddNumbers([1, 2, 3, 4, 5]), 'Sum of Odd numbers are not 9') || console.log('Success')
assert.equal(0, sumOfOddNumbers([]), 'Sum of Odd numbers are not 0') || console.log('Success')
assert.equal(1269, sumOfOddNumbers([100, 300, 151, 353,765,468]), 'Sum of Odd numbers are not 1269') || console.log('Success')

/*
When run with "node 2_reduce_an_array.js" you should see the
the following on the console:

The total is 9
*/