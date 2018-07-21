(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var inputs = splitAndConvert(rawInputs[0], 3);
	var result = solve(inputs);
	console.log(result);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(nums) {
    var a = nums[0], b = nums[1], c = nums[2];
    var determinant = b*b - 4*a*c;
    if (isSquare(determinant) === false) {
        return "둘다틀렸근";
    }
    
    var rooted = Math.sqrt(determinant);
    var answers = [ (-b+rooted)/(2*a), (-b-rooted)/(2*a) ];

    if (answers.some(function (value) {
        return value % 1 !== 0;
    })) {
        return "둘다틀렸근";
    }

    return answers.every(function(value, index, array) {
        // [NOTE] 이 케이스 빼먹어서 처음에 틀림
        return value > 0 && (Math.log(value) / Math.LN2) % 1 === 0;
    })? "이수근": "정수근";
}

function isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}


// 비트셋 .카운트