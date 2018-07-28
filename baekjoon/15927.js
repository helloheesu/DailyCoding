(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var input = rawInputs[0].split('');
	var result = solve(input);
	console.log(result);
})();

function solve(inputArr) {
    var base = inputArr[0];
    if (inputArr.every(function(char) {
        return char === base;
    })) {
        return -1;
    }

    var lastIdx = inputArr.length-1;
    var halfIdx = Math.floor(lastIdx/2);

    for (var i = 0; i <= halfIdx; i++) {
        var symmetricIdx = lastIdx-i;
        if (inputArr[i] !== inputArr[symmetricIdx]) {
            return inputArr.length;
        }
    }

    return inputArr.length-1;
}