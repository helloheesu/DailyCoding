var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(function(num) { return parseInt(num); });
var a=input[0],b=input[1],c=input[2];

var result = a;
for (var i = 0; i < c; i++) {
	result ^= b;
}

console.log(result);