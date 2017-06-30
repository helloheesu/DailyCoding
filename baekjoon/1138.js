/*
 * 경계 범위때문에 잠깐 삽질.
*/
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = parseInt(input[0]);
var people = input[1].split(' ').map(function(n) {
	return parseInt(n)
});

var ranged = new Array(n);

for (var personIdx = 0; personIdx < n; personIdx++) {
	var nth = people[personIdx];
	
	for (var count = 0, rangeIdx = 0; count <= nth; rangeIdx++) {
		if (ranged[rangeIdx] === undefined) {
			count++;
		}
	}
	ranged[rangeIdx - 1] = personIdx + 1;
}

console.log(ranged.join(' '));