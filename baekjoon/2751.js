(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split(/\s+/);
    var inputNum = parseInt(rawInputs[0]);
    var unsorted = rawInputs.slice(1, 1+inputNum).map(function(stringVal) {
        return parseInt(stringVal);
    });
    var result = quickSort(unsorted).join('\n');
    console.log(result);
})();
function quickSort(arr) {
    if (!arr.length) {
        return arr;
    }
    return _quickSort2(arr.slice(0), 0, arr.length-1);
}
function _quickSort2(array, l, r){
    var pivot = array[Math.floor((l+r)/2)];
    var left = l;
    var right = r;
    
    while(left <= right) {
        
        while(array[left] < pivot ) left++;
        while(array[right] > pivot ) right--;
        
        if(left <= right ){
            var temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++; 
            right--;
        }
    }
    
    if(l < right) _quickSort2(array, l, right);
    if(r > left) _quickSort2(array, left, r);
    
    return array;
}
