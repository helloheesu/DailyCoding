var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var len = input[0];

var CODE_A = 65;
var ALPHABET_NUM = 26;

for (var i = 1; i <= len; i++) {
	var resultString = input[i].split('').reduce(function(pvStr, curChar) {
		var code = (curChar.charCodeAt() +1 -CODE_A) % ALPHABET_NUM +CODE_A;
	  return pvStr + String.fromCharCode(code);
	}, '');

	console.log('String #'+i);
	console.log(resultString+'\n');
}
