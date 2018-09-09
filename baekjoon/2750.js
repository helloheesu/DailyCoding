(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split(/\s+/);
    var inputNum = parseInt(rawInputs[0]);
    var unsorted = rawInputs.slice(1, 1+inputNum).map(function(stringVal) {
        return parseInt(stringVal);
    });
    var sorted = quickSort(unsorted);
    // console.log(unsorted, sorted);
    sorted.forEach(function(val) {
        console.log(val);
    });
})();


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
