
///////// quick sort /////////
function quickSort(arr, left, right){
	var len = arr.length, pivot, partitionIndex;

	if(left >= right) {
		return arr;
	}

	pivot = right;
	partitionIndex = partition(arr, pivot, left, right);

	quickSort(arr, left, partitionIndex - 1);
	quickSort(arr, partitionIndex + 1, right);

	return arr;
}

function partition(arr, pivot, left, right){
	var pivotValue = arr[pivot], partitionIndex = left;

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



///////// merge sort /////////

function mergeSort(arr){
	var len = arr.length;
	if(len <2)
		return arr;
	var mid = Math.floor(len/2),
	left = arr.slice(0,mid),
	right = arr.slice(mid);
	return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
	var result = [],
	lLen = left.length,
	rLen = right.length,
	l = 0,
	r = 0;
	while(l < lLen && r < rLen){
		if(left[l] < right[r]){
			result.push(left[l++]);
		}
		else{
			result.push(right[r++]);
		}
	}
	return result.concat(left.slice(l)).concat(right.slice(r));
}




////////////////// solution //////////////////

(function () {
	var inputLines = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var len = parseInt(inputLines.shift());
	var inputNums = inputLines.map(function (num) {
		return parseInt(num);
	});

	mergeSort(inputNums).forEach(function (num) {
		console.log(num);
	});


	// quickSort(inputNums, 0, len - 1).forEach(function (num) {
	// 	console.log(num);
	// });
})();
