var fs = require('fs');
var rl = require('readline');

var lineReader = rl.createInterface(process.stdin, process.stdout, null);
var inputLines = [];

lineReader.on('line', function (inputLine) {
	console.log('hi', inputLine);
	inputLines.push(inputLine.split());
});

lineReader.on('close', function (argument) {
	var x = inputLines.shift();
	var n = inputLines.shift();
	for (var i = 0; i < x; i++) {
		console.log(i);
		var current = inputLines[i];
		if (current < n) {
			console.log(current);
		}
	}

	lineReader.close();
});


process.stdin.pipe(require('split')()).on('data', processLine)

function processLine(line) {
	console.log('hi', inputLine);
	inputLines.push(inputLine.split());
}


var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);