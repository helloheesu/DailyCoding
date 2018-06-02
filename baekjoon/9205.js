(function() {
	var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var inputCursor = 0;
	var caseNum = parseInt(input[inputCursor++]);
	for (var caseIdx = 0; caseIdx < caseNum; caseIdx++) {
		for (var i = 0; i < input.length; i++) {
			var stopNum = parseInt(input[inputCursor++]);
			var departure = parseInt(input[inputCursor++]);
			var stops = input.slice(inputCursor, inputCursor+stopNum);
			inputCursor += stopNum;
			var arrival = parseInt(input[inputCursor++]);
			var result = solve(departure, stopNum, stops, arrival);
			console.log(result);
		}
	}
})();

function solve(departure, stopNum, stops, arrival) {
	// body...
}

function splitAndConvert(stringOfNumbers) {
	return stringOfNumbers.split(' ').map(function(num) {
		return parseInt(num);
	});
}
