(function() {
    var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var needle = input[0];
    var numOfRing = parseInt(input[1]);
    var hays = input.slice(2, 2+numOfRing);
	var result = solve(needle, hays);
	console.log(result);
})();

function solve(needle, hays) {
    var doubledHays = hays.map(function (hay) {
        return hay.concat(hay);
    });
    var haysWithNeedle = doubledHays.filter(function (hays) {
        return hays.indexOf(needle) !== -1;
    });
    return haysWithNeedle.length;
}

