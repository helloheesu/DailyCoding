var input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(function(val) {
	return parseInt(val);
});

var numOfPerson = input[0];
var maxReceived = input[1];
var nextIndex = input[2];

var received = new Array(numOfPerson);
for (var i = received.length - 1; i >= 0; i--) {
	received[i] = 0;
}

var currentPersonIndex = 0;
var throwCount = 0;
while (true) {
	received[currentPersonIndex]++;
	var n = received[currentPersonIndex];
	if (n === maxReceived) {
		break;
	}

	throwCount++;
	if (n%2 === 1) {
		currentPersonIndex = (currentPersonIndex+nextIndex)%(numOfPerson);
	} else {
		currentPersonIndex = (currentPersonIndex+nextIndex+numOfPerson)%(numOfPerson);
	}
}

console.log(throwCount);
