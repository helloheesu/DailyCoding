/* [PASS] 유학금지
 */

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
console.log(input.replace(/[CAMBRIDGE]/g, ''));