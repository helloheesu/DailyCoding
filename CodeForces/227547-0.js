const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const n = parseInt(inputLines[0]);
    const isOneArr = splitAndConvert(inputLines[1], n);
    const result = solve(isOneArr, n);
    console.log(result);
});

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num) === 1;
	});
}

function solve(isOneArr, n) {
    const originalCount = isOneArr.filter(isOne => isOne).length;
    let maxCount = 0;

    for (let startIdx = 0; startIdx < n; startIdx++) {
        for (let endIdx = startIdx; endIdx < n; endIdx++) {
            let count = originalCount;
            for (let countIdx = startIdx; countIdx <= endIdx; countIdx++) {
                if (isOneArr[countIdx]) {
                    count--;
                } else {
                    count++;
                }
            }
            // console.log(startIdx, endIdx, count);
            if (count > maxCount) {
                maxCount = count;
            }
        }
    }

    return maxCount;
}

// function solve(isOneArr, n) {
//     const serialZeros = new Array(n);

//     for (let startIdx = 0; startIdx < n; startIdx++) {
//         let count = 0;
//         for (let countIdx = startIdx; countIdx < n; countIdx++) {
//             if (isOneArr[countIdx]) {
//                 break;
//             } else {
//                 count++;
//             }
//         }
//         serialZeros[startIdx] = count;
//     }

//     const maxSerialZeros = serialZeros.reduce((pv, cv) => {
//         return Math.max(pv, cv);
//     }, 0);

// }
