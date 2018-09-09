const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const n = parseInt(inputLines[0]);
    const elements = splitAndConvert(inputLines[1], n);
    const result = solve(elements, n);
});

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(elements, numOfElements) {
    const isDuplicate = new Array(numOfElements);
    const numberAppeared = [];

    for (let index = numOfElements-1; index >= 0; index--) {
        const element = elements[index];
        if (numberAppeared[element]) {
            isDuplicate[index] = true;
        } else {
            numberAppeared[element] = true;
        }
    }

    let result = '';
    let count = 0;
    for (let index = 0; index < numOfElements; index++) {
        if (isDuplicate[index] !== true) {
            count++;
            result += elements[index]+' ';
        }
    }
    console.log(count);
    console.log(result);
}
