var readCount;

var rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
}).on('line', function (inputLine) {
	if (!readCount) {
		readCount = Number(inputLine);
		return;
	}

	readCount--;

	var words = inputLine.split(' ');
	console.log(words.map(function(currentWord) {
		return currentWord.split('').reverse().join('');
	}).join(' '));
});
