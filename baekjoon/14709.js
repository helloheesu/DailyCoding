(function() {
    var inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var numOfPairs = parseInt(inputs[0]);
    var pairs = inputs.slice(1, numOfPairs+1).map(function (pairString) {
        return splitAndConvert(pairString, 2);
    });
	var result = solve(pairs);
	console.log(result ? "Wa-pa-pa-pa-pa-pa-pow!" : "Woof-meow-tweet-squeek");
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(pairs) {
    var fingers = [1,3,4];
    var count = 0;
    var wrongCount = pairs.filter(function (pair, index, arr) {
        var a = pair[0], b = pair[1];
        if (fingers.indexOf(a) !== -1 && fingers.indexOf(b) !== -1) {
            count++;
        }
        return (fingers.indexOf(a) !== -1 && fingers.indexOf(b) === -1) ||
        (fingers.indexOf(a) === -1 && fingers.indexOf(b) !== -1);
    }).length;
    return wrongCount === 0 && count === 3;
}
