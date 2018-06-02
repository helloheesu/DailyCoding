function isRearBigger(start, endA, endB) {
	if (start < endA && start < endB ||
		start > endA && start > endB) {
		// console.log('big :', start, endA, endB, endA <= endB);
		return endA < endB;
	} else {
		// console.log('big :', start, endA, endB, endA >= endB);
		return endA > endB;
	}

}

var inputLines = require('fs').readFileSync('/dev/stdin').toString().split('\n');
(function(inputLines) {
	var stopNum = parseInt(inputLines[0]); // N:10억
	var lineNum = parseInt(inputLines[1]); // M:50만

	var aliveLineInfos = []; // {lineIndex, endStop}

	inputLines.slice(2, 2+lineNum).forEach(function(line, lineIndex) {
		var lineInfo = line.split(' ');
		var startStop = parseInt(lineInfo[0]);
		var endStop = parseInt(lineInfo[1]);
		var prevInfo = aliveLineInfos[startStop];
		if (!prevInfo || isRearBigger(startStop, prevInfo.endStop, endStop)) {
			aliveLineInfos[startStop] = {
				"lineIndex": lineIndex + 1,
				"endStop": endStop
			};
		}
	});


	var mostBigEnd;
	var isAlive = [];
	for (var i = 0, len = aliveLineInfos.length; i < len; i++) {
		var lineInfo = aliveLineInfos[i];

		if (lineInfo === undefined) { continue; }
		if (mostBigEnd === undefined || isRearBigger(i, mostBigEnd.endStop, lineInfo.endStop)) {
			mostBigEnd = lineInfo;
			isAlive[i] = i+1;
		} else {
			isAlive[mostBigEnd.lineIndex - 1] = undefined;
		}
	}

	console.log(isAlive);

	var filteredIndex = isAlive.filter(function(alive) {
		return !!alive;
	});

	console.log(filteredIndex.join(' '));
})(inputLines);