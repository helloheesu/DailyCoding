/* 숫자 게임
 * 숫자가 같은 경우 번호가 '큰 사람'
 * 부등호 '<' -> '<='
 */

function getSingleMax(candidates) {
	var len = candidates.length;
	var maxNum = 0;

	for (var i = 0; i < len - 2; i++) {
		for (var j = i+1; j < len - 1; j++) {
			for (var k = j+1; k < len; k++) {
				var n = candidates[i] + candidates[j] + candidates[k];
				n %= 10;
				maxNum = (n > maxNum)? n: maxNum;
			}
		}
	}

	return maxNum;
}

var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var personNum = parseInt(input[0]);
var highest = {
	idx: undefined,
	value: 0
};

for (var personIdx = 1; personIdx <= personNum; personIdx++) {
	var singleMax = getSingleMax(input[personIdx].split(' ').map(function(val) {
		return parseInt(val);
	}));
	if (highest.value <= singleMax) {
		highest = {
			idx: personIdx,
			value: singleMax
		}
	}
}

console.log(highest.idx);
