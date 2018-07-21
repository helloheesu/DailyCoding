(function() {
	var inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var result = solve(splitAndConvert(inputs[0], 3));
	console.log(result);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(inputs) {
    var rising = inputs[0], falling = inputs[1], goal = inputs[2];
    return Math.ceil((goal - rising) / (rising - falling)) + 1;
}
