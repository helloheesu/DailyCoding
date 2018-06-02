var input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(function(val) {
	return parseInt(val);
});
var N = input[0], P = input[1], Q = input[2];

var resultMap = [1];

function get(n) {
	if (resultMap[n]!==undefined) {
		return resultMap[n];
	}

	return resultMap[n] = get(Math.floor(n/P)) + get(Math.floor(n/Q));
}

console.log(get(N));