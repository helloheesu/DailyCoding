(function() {
    var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var meta = splitAndConvert(input[0], 2);
    var numOfNums = meta[0];
    var EXPECTED_SUM = meta[1];
    var nums = splitAndConvert(input[1], numOfNums);

	var result = solve(nums, EXPECTED_SUM);
    console.log(result);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(nums, EXPECTED_SUM) {
    return onoff(nums, EXPECTED_SUM);
}

function onoff(dataArray, EXPECTED_SUM) {
    var switchingStartIndex = 0;
    var validSubSet = 0;

    _onoff(switchingStartIndex);
    return validSubSet;

    function _print() {
        if (dataArray.every(function(elem) {
            return elem === null;
        })) {
            return;
        }

        var sum = dataArray.reduce(function(reduced, elem) {
            if (elem === null) {
                return reduced;
            } else {
                return reduced + elem;
            }
        }, 0);

        if (sum === EXPECTED_SUM) {
            validSubSet += 1;
        }
    }

    function _onoff(switchingStartIndex) {
        if (dataArray.length === switchingStartIndex) {
            _print();
            return;
        }

        var offNum = null;

        function _off(index) {
            offNum = dataArray[index];
            dataArray[index] = null;
        }

        function _on(index) {
            dataArray[index] = offNum;
            offNum = null;
        }
    
        _off(switchingStartIndex);
        _onoff(switchingStartIndex + 1);
        _on(switchingStartIndex);
        _onoff(switchingStartIndex + 1);
    }
}