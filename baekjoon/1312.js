/* 소수
* '세로셈' 원칙대로 생각하면 되는데
* 순환소수에 빠져서 꼬이네.. 생각함
*/

function solve(dividend, divisor, power) {
	for (var i = 0; i < power; i++) {
		dividend = (dividend % divisor) * 10;
	}
	return Math.floor(dividend / divisor);;
}

(function() {
	var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
	var result = solve(input[0], input[1], input[2]); // apply 안되는듯
	console.log(result);
})();