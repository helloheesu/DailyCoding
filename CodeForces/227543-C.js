const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const [n, m] = splitAndConvert(inputLines[0], 2);
    const quantities = splitAndConvert(inputLines[1], m);
    const result = solve(quantities, n, m);
    console.log(result);
});

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(quantities, numOfStudents, numOfQuantities) {
    const sortedQuantities = quickSort(quantities);
    // console.log(sortedQuantities);
    
    const differencies = [];
    for (let index = 0; index < numOfQuantities-numOfStudents+1; index++) {
        const small = sortedQuantities[index];
        const large = sortedQuantities[index+numOfStudents-1];
        differencies.push(large - small);
    }
    // console.log(differencies, numOfQuantities-numOfStudents+1);

    let smallestDifference = sortedQuantities[numOfQuantities-1];
    for (let index = 0; index < numOfQuantities-numOfStudents+1; index++) {
        const diff = differencies[index];
        if (diff < smallestDifference) {
            smallestDifference = diff;
        }
    }
    
    return smallestDifference;
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
