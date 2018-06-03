(function() {
    var inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var meta = splitAndConvert(inputs[0], 2);
    var numOfStudents = meta[0];
    var multitaps = splitAndConvert(inputs[1], meta[1]);
    var available = validate(numOfStudents, multitaps);
    if (available) {
        console.log("YES");
    } else {
        console.log("NO");
    }
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function validate(numOfStudents, multitaps) {
    var availableNum = multitaps.map(function (num) {
        return Math.ceil(num/2);
    }).reduce(function (pv, cv) {
        return pv + cv;
    }, 0);

    return numOfStudents <= availableNum;
}
