(function() {
    const rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    
    // start index from 1 to skip numStringOfCases
    let caseIndex = 1;
    const numOfCases = parseInt(rawInputs[0]);
    for (let inputReadCursor = 1, len = rawInputs.length; inputReadCursor < len && caseIndex <= numOfCases; inputReadCursor++) {
        const N = parseInt(rawInputs[inputReadCursor]);

        const startIdx = inputReadCursor+1;
        const endIdx = inputReadCursor+N+1;
        inputReadCursor += N;

        validate(rawInputs.slice(startIdx, endIdx));

        console.log(`Case #${caseIndex++}: ${result.join(' ')}`);
    }
})();

function validate(coefficients) {
    
}
