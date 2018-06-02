(function() {
    var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, 6).map(function(num) {
        return parseInt(num);
    });
	var result = solve(input);
	console.log(result);
})();

function solve(scores) {
    return accumulateExceptLowest(scores.slice(0, 4)) + accumulateExceptLowest(scores.slice(4, 6));
}

function accumulateExceptLowest(scores, num) {
    var accumultaed = scores.reduce(function(pv, cv) {
        return pv + cv;
    }, 0);

    var lowest = pickLowest(scores);
    return accumultaed - lowest;
}

function pickLowest(arr) {
    return Math.min.apply( Math, arr);
}