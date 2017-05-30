/* [PASS] Combination
 * 파스칼의 삼각형 점화식으로는 stackoverflow
 * 100P9 > Number.MAX_SAFE_INTEGER
 * StringSum 으로 DEALING WITH BIG NUMBER
 */

var fs = require('fs');
var inputLine = fs.readFileSync('/dev/stdin').toString().split(' ');
var n = parseInt(inputLine[0]);
var m = parseInt(inputLine[1]);

console.log(Solution(n, m));

function stringSum(a, b) {
	a = String(a).split('').reverse();
	b = String(b).split('').reverse();

	var result = [], len = Math.max(a.length, b.length);
	for (var i = 0, pv = 0; i < len; i++) {
		var digit = parseInt(a[i] || 0) + parseInt(b[i] || 0) + pv;
		result[i] = digit % 10;
		pv = Number(digit >= 10);
	}

	if (pv) {
		result.push(pv);
	}
	return result.reverse().join('');
}

function Solution(n, m) {
	if (m > n/2) {
		m = n-m;
	}

	if (m === 0) {
		return 1;
	}

	var Combination = new Array(100 * 100);
	function getComb(n, m) {
		if (m > n/2) {
			m = n-m;
		}
		return Combination[100*(n-2) + (m-1)];
	}
	function setComb(n, m, v) {
		// console.log('setComb', n, m, v);
		Combination[100*(n-2) + (m-1)] = v;
	}

	for (var i = 2; i <= n; i++) {
		setComb(i, i, 1);
		setComb(i, 1, i);
		for (var j = (i > n - m + 2)? (i - n + m): 2; (j <= m) && (j <= i/2); j++) {
			// console.log('for', i, j);
			var excluded = getComb(i-1, j-1);
			var included = getComb(i-1, j);
			var value = stringSum(excluded, included);
			
			setComb(i, j, value);
		}
	}

	return getComb(n, m);
}