(function() {
    var inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var meta = splitAndConvert(inputs[0], 2);
    solve(inputs.slice(1, 1+meta[0]), inputs.slice(1+meta[0], 1+meta[0]+meta[1]));
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(sampleCases, systemCases) {
    for (var idx = 0, len = sampleCases.length; idx < len; idx++) {
        var io = splitAndConvert(sampleCases[idx], 2);
        if (io[0] !== io[1]) {
            console.log("Wrong Answer");
            return;
        }
    }

    for (var idx = 0, len = systemCases.length; idx < len; idx++) {
        var io = splitAndConvert(systemCases[idx], 2);
        if (io[0] !== io[1]) {
            console.log("Why Wrong!!!");
            return;
        }
    }

    console.log("Accepted");    
}
