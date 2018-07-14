(function() {
    const rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    
    // start index from 1 to skip numStringOfCases
    let caseIndex = 1;
    const numOfCases = parseInt(rawInputs[0]);
    for (let inputReadCursor = 1, len = rawInputs.length; inputReadCursor < len && caseIndex <= numOfCases; inputReadCursor++) {
        const metaOfCase = rawInputs[inputReadCursor];
        const [N, K, V] = splitAndConvert(metaOfCase, 3); // 3 : N, K, V

        const startIdxOfCampus = inputReadCursor+1;
        const endIdxOfCampus = inputReadCursor+N+1;
        inputReadCursor += N;

        const startIdxOfResult = getStartIndexOfAttraction(N, K, V);
        const endIdxOfResult = (startIdxOfResult+K)%N;

        let result;

        if (startIdxOfResult < endIdxOfResult) {
            result = rawInputs.slice(startIdxOfCampus+startIdxOfResult, startIdxOfCampus+endIdxOfResult);
        } else {
            const resultRear = rawInputs.slice(startIdxOfCampus+startIdxOfResult, endIdxOfCampus);
            const resultFront = rawInputs.slice(startIdxOfCampus, startIdxOfCampus+endIdxOfResult);
            
            result = resultFront.concat(resultRear);
        }

        console.log(`Case #${caseIndex++}: ${result.join(' ')}`);
    }
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function getStartIndexOfAttraction(N, K, V) {
    V = V-1

    if (K === N) {
        return 0;
    }

    const cycleNumber = Math.ceil(N / getGCD(N, K));
    const pureVisitIndex = V % cycleNumber;

    const startIdx = (K * pureVisitIndex) % N;
    return startIdx;
}

function getGCD(bigger, smaller) {
    const a = bigger, b = smaller;
    while(smaller!=0) {
        const tmp = bigger % smaller;
        bigger = smaller;
        smaller = tmp;
    }
    return bigger;
}

