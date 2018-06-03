(function() {
    var inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, 3);
    var isInSameLine = wrongSolution(inputs.map(function (position) {
        return splitAndConvert(position, 2);
    }));
    if (isInSameLine) {
        console.log("WHERE IS MY CHICKEN?");
    } else {
        console.log("WINNER WINNER CHICKEN DINNER!");
    }
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

// 분모가 0이 될 거 같으면 양변을 곱해라
function solve(positions) {
    var dx1 = positions[1][0] - positions[0][0];
    var dx2 = positions[2][0] - positions[1][0];
    var dy1 = positions[1][1] - positions[0][1];
    var dy2 = positions[2][1] - positions[1][1];
    return dx1 * dy2 == dx2 * dy1;
}

function wrongSolution(positions) {
    var g1 = getGradient(positions[0], positions[1]);
    var g2 = getGradient(positions[1], positions[2]);

    return g1 === g2;
}

function getGradient(position1, position2) {
    var dx = position2[0] - position1[0];
    var dy = position2[1] - position1[1];
    return dy/dx;
}