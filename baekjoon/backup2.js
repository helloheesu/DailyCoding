var inputLines = [];
var readCount = 0;

var rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
}).on('line', function (inputLine) {
	readCount++;
	if (inputLine == '' || inputLine == require("os").EOL) {
		console.log('ha');
		printResult();
		rl.close();
	}

	console.log('hi', inputLine);
	inputLines.push(inputLine.split());
});


function printResult() {
	console.log('ho');
	var x = inputLines.shift();
	var n = inputLines.shift();
	for (var i = 0; i < x; i++) {
		console.log(i);
		var current = inputLines[i];
		if (current < n) {
			console.log(current);
		}
	}
}