/* fun run fun
 * 런타임 에러 났었음 - 아무래도 삼항연산자 때문이었던 것 같다.
 * result=(aa)?w()+w():w()+w();
 */

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var wResult = {};

function solveW(a, b, c) {
	var abcStr = [a,b,c].join(', ');

	if(a<=0 || b<=0 || c<=0) return 1;
	if(a>20 || c>20 || c>20 ||
		a===20 && b===20 && c===20) return 1048576;
	if (wResult[abcStr]) return wResult[abcStr];

	var result;
	if (a<b && b<c) {
		result = solveW(a, b, c-1) + solveW(a, b-1, c-1) - solveW(a, b-1, c);
	} else {
		result = solveW(a-1, b, c) + solveW(a-1, b-1, c) + solveW(a-1, b, c-1) - solveW(a-1, b-1, c-1);
	}

	wResult[abcStr] = result;
	return result;
}

for (var i = 0; i < input.length - 1; i++) {
	if (input[i] === '-1 -1 -1') { break; }
	var arr = input[i].split(' ').map(function(num) { return parseInt(num); });;
	var result = solveW(arr[0],arr[1],arr[2]);
	console.log('w('+arr.join(', ')+') = '+result);
}
