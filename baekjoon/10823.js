/* 더하기 2
 */

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

console.log(input.replace(/\s/g, '').split(',').reduce(function(pv, cv) {
	return pv + parseInt(cv);
}, 0));
