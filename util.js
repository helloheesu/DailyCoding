var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function countDecimalPlace(n) {
	var count = 0;
	while(n=Math.floor(n/10)) {
		count++;
	}
	return count;
}
