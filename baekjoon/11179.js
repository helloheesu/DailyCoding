var inputNum = parseInt(require('fs').readFileSync('/dev/stdin').toString());
console.log(parseInt(inputNum.toString(2).split('').reverse().join(''), 2));