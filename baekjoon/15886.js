(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var inputNum = parseInt(rawInputs[0]);
    var inputs = rawInputs[1].split('').slice(0, inputNum);
	var result = solve(inputs);
	console.log(result);
})();

function solve(inputs) {
    return inputs.reduce(function(acc, value, index, array) {
        return acc + (value === 'W' && array[index-1] !== 'W')
    }, 0)
}