// 마지막에 내림차순인지 for 문돌다가 하나다로 오름차순이면 바로 값 return,
// 끝가지 살아남으면 -1 return
function solve(n, numbers) {
	var numbersWithZero = numbers.map(function(v) {
		return v-1;
	});

	var isFirst = numbersWithZero.reduce(function isFirst(pvResult, value, idx) {
		return value
	}, false)

	do {
		decrease(n, numbersWithZero);
	} while(!isValid(n, numbersWithZero));

	numbers = numbersWithZero.map(function(v) {
		return v+1;
	});

	for (var i = 1; i < numbers.length; i++) {
		if (numbers[i] <= numbers[i-1]) {
			return numbers.join(' ');
		}
	}
	return -1;
}

function decrease(n, numbersWithZero) {
	for (var i = numbersWithZero.length - 1; i >= 0; i--) {
		var v = (numbersWithZero[i] + n - 1) % n;
		numbersWithZero[i] = v;

		if (v < n-1) {
			break;
		}
	}
}

function isValid(n, numbersWithZero) {
	var exists = new Array(n);

	for (var i = 0; i < numbersWithZero.length; i++) {
		var v = numbersWithZero[i]
		if (exists[v]) {
			return false;
		}

		exists[v] = true;
	}
	return true;
}

(function() {
	var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var n = input[0];
	var numbers = input[1].split(' ');
	var result = solve(n, numbers);
	console.log(result);
})();