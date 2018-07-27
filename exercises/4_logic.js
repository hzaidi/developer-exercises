const assert = require('assert')
function paintMixer(color1, color2) {
  /*
  Add code here that will take the two string params and
  return a value as to what those two colors would create when mixed:

  * blue and red should mix to return 'purple'
  * green and red should mix to return 'brown'
  * blue and yellow should mix to return 'green'
  * anything with unknown colors should return a result of 'unknown'.

  The order of the params should not matter.
  */
	if(color1 === color2) { return color1; }
	const paintMixer = [{
		colors: ['blue', 'red'],
		outcome: 'purple'
	},{
		colors: ['green', 'red'],
		outcome: 'brown'
	},{
		colors: ['blue', 'yellow'],
		outcome: 'green'
	}];
	let mix = paintMixer.find(mix => mix.colors.includes(color1) && mix.colors.includes(color2))
	return mix && mix.outcome || 'unknown';
}

paintMixer('blue', 'red') === 'purple' && console.log('First mix worked')
paintMixer('red', 'blue') === 'purple' && console.log('Second mix worked')
paintMixer('green', 'red')=== 'brown' && console.log('Third mix worked')
paintMixer('blue', 'yellow') === 'green' && console.log('Fourth mix worked')
paintMixer('apple', 'frog') === 'unknown' && console.log('Apples and frogs don\'t mix, as expected')

assert.equal('purple', paintMixer('blue', 'red'), 'Value of mixer is incorrect') || console.log('Success');
assert.equal('purple', paintMixer('red', 'blue'), 'Value of mixer is incorrect') || console.log('Success');
assert.equal('brown', paintMixer('green', 'red'), 'Value of mixer is incorrect') || console.log('Success');
assert.equal('green', paintMixer('blue', 'yellow'), 'Value of mixer is incorrect') || console.log('Success');
assert.equal('brown', paintMixer('red', 'green'), 'Value of mixer is incorrect') || console.log('Success');
assert.equal('green', paintMixer('yellow', 'blue'), 'Value of mixer is incorrect') || console.log('Success');
assert.equal('yellow', paintMixer('yellow', 'yellow'), 'Value of mixer is incorrect') || console.log('Success');
assert.equal('unknown', paintMixer('apple', 'frog'), 'Value of mixer is incorrect') || console.log('Success');

/*
If everything works, you should see the following on the console
when run with "node 4_logic.js":

First mix worked
Second mix worked
Third mix worked
Fourth mix worked
Apples and frogs don't mix, as expected
*/