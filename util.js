(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var inputNum = parseInt(rawInputs[0]);
    var inputs = splitAndConvert(rawInputs[1], inputNum);
	var result = solve(inputs);
	console.log(result);
})();

// https://code.i-harness.com/ko-kr/q/4c65e5
// https://nodejs.org/api/process.html#process_process_stdin
// https://nodejs.org/api/stream.html#stream_event_data
const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    // CodeForces 는 \r\n 으로 하기 때문에, String 일 때는 이걸로.
    const inputLines = rawInput.split(/\s+/);

    // 이건 Integer 일 때.
    const inputLines = rawInput.split('\n');
    const [n, m] = splitAndConvert(inputLines[0], 2);
    const quantities = splitAndConvert(inputLines[1], m);
    const result = solve(quantities, n, m);
    // console.log(result);
    printArrays(array, n);
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

function solve(prices) {
	// body...
}


function disjointSet(inputs) {
    var parent = [];

    for (var inputIdx = 0, len = inputs.length; inputIdx < len; inputIdx++) {
        var input = splitAndConvert(inputs[inputIdx], 3);

        if (input[0] === 0) { // operator === UNION
            Union(input[1], input[2]);
        } else { // operator === FIND
            // console.log(Find(input[1]), Find(input[2]));
            var isInSameGroup = (Find(input[1]) === Find(input[2]));
            console.log(isInSameGroup? "YES": "NO");
        }
    }

    function Find(x) {
        if (parent[x] === undefined) {
            parent[x] = x;
            return x;
        }
        if (parent[x] === x) {
            return x;
        }
        var foundParent = Find(parent[x]);
        parent[x] = foundParent;
        return foundParent;
    }

    function Union(x, y) {
        x = Find(x);
        y = Find(y);

        if (x !== y) {
            parent[y] = x;
        }
    }
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

function getGCD(a, b) {
    while(b!=0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}


function isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}
