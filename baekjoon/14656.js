(function() {
    var inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var numOfStudents = parseInt(inputs[0]);
    var result = solve(splitAndConvert(inputs[1], numOfStudents));
	console.log(result);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(numbers) {
    return numbers.filter(function (number, index) {
        return number !== index+1;
    }).length;
}
