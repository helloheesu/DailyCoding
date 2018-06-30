var FULL_NUMBER = 6;
var NOT_DECIDED = undefined;
var EXCLUDED = false;
var INCLUDED = true;

(function() {
    var inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    for (var inputIdx = 0, inputNum = inputs.length; inputIdx < inputNum; inputIdx++) {
        var input = splitAndConvert(inputs[inputIdx]);
        var numK = input[0];
        if (numK === 0) {
            return;
        }
        var inclusionMark = generateInitiatedArray(numK, NOT_DECIDED);
        var sourceArr = input.slice(1, 1+numK);
        // recursionSolution1(FULL_NUMBER, sourceArr, inclusionMark, 0);
        recursionSolution2(FULL_NUMBER, sourceArr, [], 0,0,0);
        console.log("");
    }
})();

function splitAndConvert(stringOfNumbers) {
	return stringOfNumbers.split(' ').map(function(num) {
		return parseInt(num);
	});
}

function generateInitiatedArray(length, initalValue) {
    return Array.apply(null, {"length": length}).map(function() { return initalValue; });
}

function printResult(inclusionMark, setS) {
    var toPrint = [];
    for (var idx = 0, len = inclusionMark.length; idx < len; idx++) {
        var including = inclusionMark[idx];
        if (including) {
            toPrint.push(setS[idx]);
        }
    }
    console.log(toPrint.join(' '));
}

// exclusion 부터가 아니라 inclusion 부터 쌓아가야한다.
function recursionSolution1(numToPrint, setS, inclusionMark, includeCount) {
    if (includeCount === numToPrint) {
        printResult(inclusionMark, setS);
        return;
    } else if (inclusionMark[inclusionMark.length-1] !== NOT_DECIDED) {
        return;
    }

    var firstIndex = inclusionMark.indexOf(NOT_DECIDED);
    inclusionMark[firstIndex] = INCLUDED;
    recursionSolution1(numToPrint, setS, inclusionMark, includeCount + 1);
    inclusionMark[firstIndex] = EXCLUDED;
    recursionSolution1(numToPrint, setS, inclusionMark, includeCount);
    inclusionMark[firstIndex] = NOT_DECIDED;
}

function printArray(arr, bar) {
    if (bar) {
        var result = [];
        for (var idx = 0, len = arr.length; idx < len; idx++) {
            result.push(arr[idx]);
        }
        console.log(result.join(bar));
    } else {
        for (var idx = 0, len = arr.length; idx < len; idx++) {
            console.log(arr[idx]);
        }    
    }
}

function recursionSolution2(FINAL_COUNT, SRC_ARR, resultArr, targetIdx, insertIdx, insertCount) {
    if (insertCount === FINAL_COUNT) {
        printArray(resultArr, " ");
        return;
    }

    for (var idx = targetIdx, len = SRC_ARR.length; idx < len; idx++) {
        resultArr[insertIdx] = SRC_ARR[idx];
        recursionSolution2(FINAL_COUNT, SRC_ARR, resultArr, idx+1, insertIdx+1, insertCount+1);
    }
}
