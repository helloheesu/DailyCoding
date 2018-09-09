const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const [rowNum, colNum] = splitAndConvert(inputLines[0], 2);
    const matrixOfGoodness = [];
    for (let rowIdex = 0; rowIdex < rowNum; rowIdex++) {
        const rawRow = inputLines[rowIdex+1];
        matrixOfGoodness.push(splitAndConvert(rawRow, colNum));
    }

    const result = solve(matrixOfGoodness, rowNum, colNum);
    console.log(result);
});

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(matrixOfGoodness, rowNum, colNum) {
    const GOOD_CELL = 1;
    // edges
    if (matrixOfGoodness[0].includes(GOOD_CELL) || matrixOfGoodness[rowNum-1].includes(GOOD_CELL)) {
        return 2;
    }
    if (matrixOfGoodness.slice(1,rowNum-1).some((row) => {
        return (row[0] === GOOD_CELL || row[colNum-1] === GOOD_CELL);
    })) {
        return 2;
    }

    return 4;
}
