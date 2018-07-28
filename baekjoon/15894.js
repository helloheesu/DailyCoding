(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var inputNum = parseInt(rawInputs[0]);
	var result = solve(inputNum);
	console.log(result);
})();

function solve(inputNum) {
    return inputNum*4;
}
