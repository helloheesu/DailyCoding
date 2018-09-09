const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const n = parseInt(inputLines[0]);
    const result = solve(n);

    for (let brotherIdx = 0; brotherIdx < n; brotherIdx++) {
        console.log(result[brotherIdx]);
    }
});

function solve(numOfBrothers) {
    const candyBoxes = new Array(numOfBrothers);
    candyBoxes.fill('');

    let increasingIdx = 1;
    let decreasingIdx = numOfBrothers*numOfBrothers;

    while (increasingIdx < decreasingIdx) {
        // increasing
        for (let brotherIdx = 0; brotherIdx < numOfBrothers; brotherIdx++) {
            candyBoxes[brotherIdx] += (increasingIdx+brotherIdx)+' ';
        }
        increasingIdx += numOfBrothers;

        // decreasing
        for (let brotherIdx = 0; brotherIdx < numOfBrothers; brotherIdx++) {
            candyBoxes[brotherIdx] += (decreasingIdx-brotherIdx)+' ';
        }
        decreasingIdx -= numOfBrothers;
    }

    return candyBoxes;
}
