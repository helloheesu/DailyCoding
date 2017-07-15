/* 이런 반전이
 * 채점 환경 - Math.log10(ES6) 지원 ㄴㄴ
 * 여전히 통과 못 했는데, 일일이 tc 비교해보면 답은 맞게 나옴 ㅜㅜ
 * 알고리즘도 맞음
 */

function countDecimalPlace(numberInt) {
	var count = 0;
	while(numberInt=Math.floor(numberInt/10)) {
		count++;
	}
	return count;
}

function getMaxLoveliness(given) {
	var cap = Math.pow(10, countDecimalPlace(given) + 1) - 1;
	var half = cap / 2;
	given = (given < half)? given: Math.floor(half);

	// var gap = half - given;
	// return Math.pow(half, 2) - Math.pow(gap, 2);
	var inverted = cap - given;
	return given * inverted;
}

var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var testCaseNum = parseInt(input[0]);
for (var i = 1; i <= testCaseNum; i++) {
	var n = parseInt(input[i]);
	console.log(getMaxLoveliness(n));
}

