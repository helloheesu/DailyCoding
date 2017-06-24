/* [PASS] Z
 * Z 진행 방향을 잘못 생각해서 틀림
 */

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var N = parseInt(input[0]);
var r = parseInt(input[1]);
var c = parseInt(input[2]);

var len = Math.pow(2, N);

function getResult(N, row, col) {
	var half = Math.pow(2, N-1);
	var nthSquare = (row >= half)*2 + (col >= half);
	if (N <= 1) {
		return nthSquare;
	}

	row = (row >= half)? (row - half): row;
	col = (col >= half)? (col - half): col;
	var fullSquareCount = half*half * nthSquare;
	var lastSquareCount = getResult(N-1, row, col);
	return fullSquareCount + lastSquareCount;
}

console.log(getResult(N, r, c));
