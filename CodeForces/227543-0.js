const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const coinNum = parseInt(inputLines[0]);
    const coinValues = splitAndConvert(inputLines[1], coinNum);
    const result = solve(coinValues, coinNum);
    console.log(result);
});

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(coinValues, coinNum) {
    const countMap = [];
    for (let index = 0; index < coinNum; index++) {
        const value = coinValues[index];
        countMap[value] = (countMap[value] ? countMap[value] : 0) + 1;
    }

    let maxCount = 0;
    for (let index = 0; index < countMap.length; index++) {
        const count = countMap[index];
        if (maxCount < count) {
            maxCount = count;
        }
    }

    return maxCount;
}
