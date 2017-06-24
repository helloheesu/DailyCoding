var fs = require('fs');
// var input = var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var upperCap = Math.pow(2, parseInt(fs.readFileSync('/dev/stdin').toString()));
var sum = (upperCap%2)? ((upperCap-1)/2 * upperCap): (upperCap/2 * (upperCap-1));
console.log(sum.toString(2));