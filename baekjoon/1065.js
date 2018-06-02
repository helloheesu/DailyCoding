(function() {
	var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var result = solve(parseInt(input[0]));
	console.log(result);
})();

function solve(maxNumber) {
    var GUARANTEED = 99;

    if (maxNumber <= GUARANTEED) {
        return maxNumber;
    }

    var count = GUARANTEED;
	for(var i = GUARANTEED + 1; i <= maxNumber; i++) {
        var ciphers = i.toString();
        var expectedDifference = ciphers[1] - ciphers[0];
        var passed = true;
        for (var j = 2, len = ciphers.length; j < len; j ++) {
            var currentDifference = ciphers[j] - ciphers[j-1];
            if (currentDifference !== expectedDifference) {
                passed = false;
                break;
            }
        }

        if (passed === true) {
            count += 1;
        }
    }

    return count;
}
