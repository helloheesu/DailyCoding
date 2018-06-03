(function() {
    var inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var meta = splitAndConvert(inputs[0], 2);
    var needle = inputs[1].slice(0, meta[0]);
    var hays = inputs.slice(2, 2+meta[1]);
    for (var idx = 0, len = hays.length; idx < len; idx++) {
        var findable = solve(needle, hays[idx]);
        console.log(findable);        
    }
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(needle, hay) {
    if (needle.length <= 0) {
        return true;
    }

    var startIndex = hay.indexOf(needle[0]);
    if (startIndex === -1) {
        return false;
    } else {
        return solve(needle.slice(1), hay.slice(startIndex+1));
    }
}
