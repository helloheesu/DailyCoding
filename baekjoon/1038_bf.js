function isDecreasing(num) {
	while(parseInt(num/10)) {
		var rear = num%10;
		num = Math.floor(num/10);
		var front = num%10;
		if (front <= rear) {
			return false;
		}
	}
	return true;
}

function getNthResult(nth) {
	var resultArray = [];
	var length = 0;

	for (var i = 1; length < nth; i++) {
		if (isDecreasing(i)) {
			resultArray.push(i);
			length++;
		}
	}

	return resultArray[nth-1];
}

var fs = require('fs');
var nth = parseInt(fs.readFileSync('/dev/stdin').toString());

console.log(getNthResult(nth));
