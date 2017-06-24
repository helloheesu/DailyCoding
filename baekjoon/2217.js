var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n').map(function(num) { return parseInt(num); });

var len = input.shift();
var result = input.sort(function(a, b) {
	return a - b;
}).reduce(function(prvMax, curRope, index) {
	var curVal = curRope * (len - index);
	// console.log(index, prvMax, curRope, curVal);
	return (curVal > prvMax)? curVal: prvMax;
}, 0);
console.log(result);