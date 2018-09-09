(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split(/\s+/);
    var inputNum = parseInt(rawInputs[0]);
    var unsorted = rawInputs.slice(1, 1+inputNum).map(function(stringVal) {
        return parseInt(stringVal);
    });
    var sorted = quickSort(unsorted);
    solve(sorted, inputNum);
})();

function solve(sorted, elementNum) {
    var median = sorted[Math.floor(elementNum/2)];
    var range = sorted[elementNum-1] - sorted[0];

    var sum = 0;
    var countMap = {};
    for (var index = 0, len = sorted.length; index < len; index++) {
        var element = sorted[index];
        var count = countMap[element] || 0;

        sum += element;
        countMap[element] = count + 1;
    }
    var average = Math.round(sum/elementNum);

    var largestKeys;
    var largestCount = 0;
    for (var key in countMap) {
        if (countMap.hasOwnProperty(key)) {
            var count = countMap[key];
            key = parseInt(key);
            // console.log('a', key, count);
            if (count > largestCount) {
                largestKeys = [key];
                largestCount = count;
            } else if (count === largestCount) {
                largestKeys.push(key);
            }
        }
    }
    largestKeys = quickSort(largestKeys);    
    var mode = largestKeys[1] || largestKeys[0];

    // console.log(sorted, largestKeys);
    console.log(average+'\n'+median+'\n'+mode+'\n'+range);
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
