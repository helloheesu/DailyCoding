function countPow(number, base) {
    var count = 0;
    while(number >= base) {
        count += Math.floor(number / base);
        number /= base;
    }
    return count;
}

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var n = input[0];
var m = input[1];

var consider5 = countPow(n, 5) - countPow(m, 5) - countPow(n-m, 5);
var consider2 = countPow(n, 2) - countPow(m, 2) - countPow(n-m, 2);

console.log(Math.max(consider5, consider2));

