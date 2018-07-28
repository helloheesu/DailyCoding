(function() {
    const rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    
    const numOfCases = parseInt(rawInputs[0]);
    for (let caseIndex = 0; caseIndex < numOfCases; caseIndex++) {
        const inputReadCursor = 4*caseIndex+1;
        const N = parseInt(rawInputs[inputReadCursor]);
        const spaces = rawInputs.slice(inputReadCursor+1, inputReadCursor+4).map(columnStr => columnStr.split(''));
        const result = solve(spaces, 3, N);
        console.log(`Case #${caseIndex+1}: ${result}`);
    }
})();

function solve(spaces, rowNum, colNum) {
    if (colNum % 2 !== 0) {
        return 0;
    }

    const EMPTY = '.', BLOCKED = '#';
    const SPECIAL_POSITIONS = [
        spaces[0][0],
        spaces[1][0],
        spaces[1][colNum-1],
        spaces[2][colNum-1]
    ]
    if (SPECIAL_POSITIONS.includes(BLOCKED) || spaces[1].includes(BLOCKED)) {
        return 0;
    }

    let cases = 1;
    for (let columnIdx = 1; columnIdx < colNum-1; columnIdx += 2) {
        let currentCases = 0;
        if ([spaces[0][columnIdx], spaces[0][columnIdx+1]].includes(BLOCKED) === false) {
            currentCases++;
        }
        if ([spaces[2][columnIdx], spaces[2][columnIdx+1]].includes(BLOCKED) === false) {
            currentCases++;
        }
        cases = (cases * currentCases) % 1000000007;
    }
    
    return cases;
}
