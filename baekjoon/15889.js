(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var inputNum = parseInt(rawInputs[0]);
    var result;
    if (inputNum === 1) {
        result = true;
    } else {
        var positions = splitAndConvert(rawInputs[1], inputNum);
        var ranges = splitAndConvert(rawInputs[2], inputNum-1);
        result = solve(positions, ranges, inputNum);    
    }
	console.log(result? "권병장님, 중대장님이 찾으십니다": "엄마 나 전역 늦어질 것 같아");
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(positions, ranges, numOfPeople, goalIdx) {
    var farteseRange = 0;

    for (var idx = 0; idx < numOfPeople-1; idx++) {
        var position = positions[idx];
        if (farteseRange < position) {
            break;
        }
        farteseRange = Math.max(farteseRange, position+ranges[idx]);
    }
    return farteseRange >= positions[numOfPeople-1];
}

// stack overflow 위험
function slow_solution(positions, ranges, numOfPeople) {
    return _isAvailable(numOfPeople-1);

    function _isAvailable(goalIdx) {
        if (goalIdx === 0) {
            return true;
        }

        for (var idx = goalIdx-1; idx >= 0; idx--) {
            if (positions[idx] + ranges[idx] >= positions[goalIdx]) {
                if (_isAvailable(idx)) {
                    return true;
                } else {
                    availableResults[idx] = false;
                }
            }
        }
        
        return false;
    }
}
