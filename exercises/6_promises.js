const assert = require('assert')
// The wait function returns a promise that will resolve after
// the specified number of seconds has passed
const wait = function(seconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000 * seconds)
  })
}

/*
Your task is to write a promise chain using the function
above that waits 1 second before writing "I waited 1 second"
to the console, waits 2 more seconds and then writes
"I waited 2 more seconds"
*/


const message = (number) => {
	return `I waited ${number} ${number === 1 ? 'second' : 'seconds'}`
}

/* Both solution down if run independently will going to give same output */


/*------------------------------------------------------*/
wait(1)
	.then(() => console.log(message(1)))
	.then(() => wait(2))
	.then(() => console.log(message(2)))

/*------------------------------------------------------*/


/*------------------------------------------------------*/
let secondsToWait = [1, 2];
for(let seconds of secondsToWait){
	if(seconds > 0) {
		wait(seconds).then(() => console.log(message(seconds)));
	}
}
/*------------------------------------------------------*/



assert.equal('I waited 1 second', message(1), 'Message is incorrect') || console.log('Success')
assert.equal('I waited 2 seconds', message(2), 'Message is incorrect') || console.log('Success')

/*
You console output should look like the following AND wait the
appropriate number of seconds before writing each line
when run with "node 6_promises.js":

I waited 1 second
I waited 2 more seconds
*/