const assert = require('assert')
/*
	Implement this function so that it returns a function that will add
	the value of numberToAdd to whatever number parameter is passed to the
	returned function
*/
const add = (a, b) => (a + b);
const createAddFunction = (number) => (x) => add(x, number);

// this should set addFive to a function that will add 5 to whatever
// value is passed to it.
var addFive = createAddFunction(5)

// total should end up as 12, the sum of 7 and 5
var total = addFive(7)

console.log('The total is %d', total)

assert.equal(5, add(2,3), 'Addtion is incorrect') || console.log('Success');
assert.equal(-5, add(-2,-3), 'Addtion is incorrect') || console.log('Success');
assert.equal(0, add(0,0), 'Addtion is incorrect') || console.log('Success');

assert.equal(15, createAddFunction(10)(5), 'Currying is incorrect') || console.log('Success');
assert.equal(-5, createAddFunction(-10)(5), 'Currying is incorrect') || console.log('Success');
assert.equal(0, createAddFunction(0)(0), 'Currying is incorrect') || console.log('Success');

/*
You should see the following on the console
when you run "node 5_functions_returning_functions.js":

The total is 12
*/

