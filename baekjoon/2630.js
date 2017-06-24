/* 색종이 만들기
 * '쿼드트리'스러움
 */

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var len = input.shift();
var map = input.map(function(str) { return str.split(' '); });

// ['0', '1']
function cut(len, top, left) {
	var scanResult = [0, 0];
	for (var row = top; row < top+len; row++) {
		for (var col = left; col < left+len; col++) {
			scanResult[ parseInt(map[row][col]) ]++;
		}
	}

	if (scanResult[0] === 0 || scanResult[1] === 0) {
		return scanResult.map(function(count) {
			return count/(len*len);
		});
	}

	var halfLen = len/2; // 무조건 떨어지므로 내림 필요없음
	var subResult = [ cut(halfLen, top, left), // topLeft
	cut(halfLen, top, left+halfLen), // topRight
	cut(halfLen, top+halfLen, left), // bottomLeft
	cut(halfLen, top+halfLen, left+halfLen) ]; // bottomRight

	return subResult.reduce(function(pv, cv) {
		return [pv[0]+cv[0], pv[1]+cv[1]];
	}, [0, 0]);
}

var result = cut(len, 0, 0);
console.log(result[0]+'\n'+result[1]);
