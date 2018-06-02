/* 금민수
 * 9999 (bubbleUp)에서 carry 처리 제대로 x
 * 숫자 overflow 문제인줄 알았지만 젠젠 쟈나이
 */

function bubbleUp(numberSplitted, i) {
	var raised = false;

	numberSplitted[i] = '4';
	for (var j = i-1; j >= -1; j--) {
		var digit = numberSplitted[j];
		if (digit === undefined) {
			numberSplitted.unshift('4');
			return raised = true;
		} else if (digit === '4') {
			numberSplitted[j] = '7';
			return raised = false;
		} else if (digit === '7') {
			numberSplitted[j] = '4';
		}
	}
	return raised = false;
}


function getCloseNumber(numberSplitted) {
	var len = numberSplitted.length;
	var nextNumber = new Array(len);
	var over = false;
	var i;


	for (i = 0; i < len; i++) {
		var digit = parseInt(numberSplitted[i]);

		if (over) {
			nextNumber[i] = '4';
			continue;
		}

		if (digit === 4 || digit === 7) {
			nextNumber[i] =  String(digit);
		} else if (digit < 4) {
			over = true;
			nextNumber[i] =  '4';
		} else if (digit < 7) {
			over = true;
			nextNumber[i] =  '7';
		} else {
			var raised = bubbleUp(nextNumber, i);
			i += raised;
			len += raised;
			over = true;
		}
	}

	return nextNumber;
}

function solve(A, B) {
	var count = 0;
	for (var num = A; ; num++, count++) {
		num = parseInt(getCloseNumber(String(num).split('')).join(''));
		if (num > B) {
		    return count;
		}
	}
}

var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(solve(parseInt(input[0]), parseInt(input[1])));