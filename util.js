(function() {
	var inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var result = solve(parseInt(inputs[0]), splitAndConvert(inputs[1]), splitAndConvert(inputs[2]));
	console.log(result);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}


function solve(numOfCity, distances, priceInfos) {
	// body...
}


function countDecimalPlace(n) {
	var count = 0;
	while(n=Math.floor(n/10)) {
		count++;
	}
	return count;
}

function stringSum(a, b) { // returns String
	a = String(a).split('').reverse();
	b = String(b).split('').reverse();

	var result = [], len = Math.max(a.length, b.length);
	for (var i = 0, pv = 0; i < len; i++) {
		var digit = parseInt(a[i] || 0) + parseInt(b[i] || 0) + pv;
		result[i] = digit % 10;
		pv = Number(digit >= 10);
	}

	if (pv) {
		result.push(pv);
	}
	return result.reverse().join('');
}

function stringMul(a, b) { // returns String
	a = String(a).split('').reverse();
	b = String(b).split('').reverse();

	var aLen = a.length, bLen = b.length;
	var len = aLen + bLen;
	var result = new Array(len);
	for (var i = 0; i < len; i++) {
		result[i] = 0;
	}

	for (var bIdx = 0, pv = 0; bIdx < bLen; bIdx++) {
		var bDigit = parseInt(b[bIdx] || 1);
		pv = 0;
	    for (var aIdx = 0; aIdx < aLen; aIdx++) {
	        var aDigit = parseInt(a[aIdx] || 1);
	        var mulDigit = result[bIdx+aIdx] + aDigit * bDigit + pv;
	        result[bIdx+aIdx] = mulDigit % 10;
	        pv = parseInt(mulDigit/10);
	    }
	    result[bIdx+aIdx] += pv;
	}

	if (parseInt(result[len-1]) === 0) {
		result.pop();
	}

	return result.reverse().join('');
}

// https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
// https://www.geeksforgeeks.org/javascript-array-fill-function/

function generateInitiatedArray(length, initalValue) {
    return Array.apply(null, {"length": length}).map(function() { return initalValue; });
}

function generateRisingArray(len, startNum) {
    startNum = startNum || 0;
    return Array.apply(null, {length: len}).map(function(v, i) {
        return startNum + i;
    });
}

function printArray(arr, bar) {
    if (bar) {
        var result = [];
        for (var idx = 0, len = arr.length; idx < len; idx++) {
            result.push(arr[idx]);
        }
        console.log(result.join(bar));
    } else {
        for (var idx = 0, len = arr.length; idx < len; idx++) {
            console.log(arr[idx]);
        }    
    }
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
