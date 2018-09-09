const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const n = parseInt(inputLines[0]);
    const numbers = splitAndConvert(inputLines[1], n);
    const result = solve(numbers, n);
    console.log(result);
});

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(numbers, n) {
    if (n === 1) return numbers[0];

    const countMap = [];
    quickSort(numbers).forEach((val) => {
        countMap[val] = (countMap[val] || 0) + 1;
    });
    // console.log(countMap);

    const earningValues = [];
    for (let index = 0; index <= n; index++) {
        earningValues[index] = countMap[index] * index || 0;
    }
    // console.log(earningValues);

    const accumulatedValues = [];
    accumulatedValues[0] = earningValues[0];
    accumulatedValues[1] = earningValues[1];
    for (let index = 2; index <= n; index++) {
        const notSelecting = accumulatedValues[index-1];
        const selecting = accumulatedValues[index-2] + earningValues[index];
        accumulatedValues[index] = Math.max(notSelecting, selecting);        
    }
    // console.log(accumulatedValues);

    return accumulatedValues.reduce((pv, cv) => {
        return Math.max(pv, cv);
    }, 0);
}

function quickSort(arr) {
    if (!arr.length) {
        return arr;
    }
    return _quickSort(arr.slice(0), 0, arr.length-1);
}
function _quickSort(arr, left, right){
    var len = arr.length, 
    pivot,
    partitionIndex;
    
    if(left < right){
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
        
        //sort left and right
        _quickSort(arr, left, partitionIndex - 1);
        _quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
    partitionIndex = left;
    
    for(var i = left; i < right; i++){
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}
function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
