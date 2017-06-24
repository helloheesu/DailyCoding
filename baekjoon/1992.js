/* 쿼드트리
 */

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var length = input.shift();

var result = "";

function conquer(data, left, top, length) {
	var sum = 0;
	for (var row = 0; row < length; row++) {
		for (var column = 0; column < length; column++) {
			sum += parseInt(data[top+row][left+column]);
		}		
	}

	if (sum === 0) {
		result += "0";
		return;
	} else if (sum === length*length) {
		result += "1";
		return;
	}

	var halfLen = length/2;
	result += "(";
	conquer(data, left, top, halfLen);
	conquer(data, left+halfLen, top, halfLen);
	conquer(data, left, top+halfLen, halfLen);
	conquer(data, left+halfLen, top+halfLen, halfLen);
	result += ")";
}

conquer(input, 0, 0, length);
console.log(result);
