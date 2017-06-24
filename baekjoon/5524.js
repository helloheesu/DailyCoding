var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
for (var i = 1; i < input.length; i++) {
	console.log(input[i].toLowerCase());
}
