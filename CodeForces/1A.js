const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const [n, m, a] = splitAndConvert(inputLines[0], 3);
    const result = solve(n, m, a);
    console.log(result);
});

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(n, m, a) {
    return Math.ceil(n/a) * Math.ceil(m/a);
}
