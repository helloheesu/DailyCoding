const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const [n, k] = splitAndConvert(inputLines[0], 2);
    const difficulties = splitAndConvert(inputLines[1], n);
    const result = solve(difficulties, n, k);
    console.log(result);
});

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(difficulties, n, k) {
    let solved = 0;

    let midIndex = 0;
    for (; midIndex < n; midIndex++, solved++) {
        const difficulty = difficulties[midIndex];
        if (difficulty > k) {
            break;
        }
    }

    for (let index = n-1; index > midIndex; index--, solved++) {
        const difficulty = difficulties[index];
        if (difficulty > k) {
            break;
        }
    }

    return solved;
}
