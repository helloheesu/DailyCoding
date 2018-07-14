// [FAIL]

(function() {
	var inputs = require('fs').readFileSync('/dev/stdin').toString().split(/\s/);
	var result = solve(parseInt(inputs[0]), parseInt(inputs[1]));
	console.log(result ? "O" : "X");
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(hour, minute) {
    return ((hour % 30) * 6)%360 === minute;
}