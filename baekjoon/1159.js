// [PASS] 농구 경기
// 선발할 수 없는 경우 빼먹지 말기

var readCount;
var countMap = {};

var rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
}).on('line', function (inputLine) {
	if (!readCount) {
		readCount = parseInt(inputLine);
		return;
	}

	readCount--;

	var firstC = inputLine[0];
	countMap[firstC] = (countMap[firstC] || 0) + 1;

	if (readCount === 0) {
		var result = Object.keys(countMap)
			.sort()
			.filter(function (key) {
				return countMap[key] >= 5;
			});

		console.log((result.length)? result.join(''): "PREDAJA");
	}
});