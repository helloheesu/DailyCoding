var fs = require('fs');
var input = parseInt(fs.readFileSync('/dev/stdin').toString());
console.log(Math.ceil(Math.sqrt(input)));
