
var readLine = (function() {
	var i = 0;

	var testCase = [
	'2',
	'7 5',
	'B?D?D',
	'????C',
	'B?CC?',
	'??C??',
	'??E??',
	'?F??E',
	'?F???',
	'6 4',
	'B?D?',
	'?A?D',
	'???C',
	'BCC?',
	'????',
	'???C',
	'E?E?'
	];

	return function() {
		return testCase[i++];
	}
})();

//////////////////////////

var sqaure = {};

function makeSquareInfo(line, lineIdx, colNum) {
	for (var i = 0; i < colNum; i++) {
		var char = line[i];
		if (char === "?") {
			continue;
		}
	}
}

function processInput() {
	var reaminedTestNum = readLine();

	while(reaminedTestNum--) {
		var testInfo = readLine().split(' ');
		var rowNum = testInfo[0];
		var colNum = testInfo[1];

		for (var i = 0; i < rowNum; i++) {
			makeSquareInfo(readLine(), i, colNum);
		}
	}
}

