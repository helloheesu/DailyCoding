const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const [n, k] = splitAndConvert(inputLines[0], 2);
    solveNprint(n, k);
});

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function printArrays(array, length) {
    length = length || array.length;
    for (let index = 0; index < length; index++) {
        console.log(array[index]);
    }
}

function solveNprint(n, k) {
    const quotient = Math.floor(k/n);
    const combination = new Array(n);
    combination.fill(quotient);
    combination[n-1] += (k - quotient*n);

    for (let index = 0; index < n; index++) {
        const result = combination.slice(index).concat(combination.slice(0, index));
        console.log(result.join(' '));
    }
}
