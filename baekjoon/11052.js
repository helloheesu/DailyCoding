(function() {
	var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var result = solve(parseInt(rawInputs[0]), splitAndConvert(rawInputs[1]), splitAndConvert(rawInputs[2]));
	console.log(result);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}
