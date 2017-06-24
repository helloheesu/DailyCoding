function NumbersToString(a, b) {
	// var numberToOrder = [9, 4, 8, 7, 2, 1, 6, 5, 0, 3];
	var toStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	// var mapped = [];
	var mapped = {};

	for (var num = a; num <= b; num++) {
		var numStrArr = String(num).split('');
		var keyname = numStrArr.reduce(function(pvStr, value) {
			return pvStr+toStr[value]+' ';
		}, '');
		// mapped.push(mappedStr);
		mapped[keyname] = num
	}

	return mapped;
}

(function() {
	var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
	var a = parseInt(input[0]);
	var b = parseInt(input[1]);
	var mapped = NumbersToString(a, b);
	var sortedKeys = Object.keys(mapped).sort();
	var solution = sortedKeys.reduce(function(pvStr, key, idx) {
		var num = mapped[key];
		return pvStr+num+((idx%10 !== 9)?' ':'\n');
	}, '');

	console.log(solution);
})();

