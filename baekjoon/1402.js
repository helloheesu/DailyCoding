/* [PASS] 아무래도이문제는A번난이도인것같다
 * 6 = 2*3 -> 5
 * 5 = 5*-1*-1 -> 3
 * 3 = 3*-1*-1 -> 1
 * 1 = 1*1 -> 2
 * 2 = 2*-1*-1 = ((((0))))
 * -1 = ((((0))))*-1
 * N = ((((0))))*N
 */

var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var testCaseNum = parseInt(input[0]);

for (var testIdx = 1; testIdx <= testCaseNum; testIdx++) {
	console.log('yes');
}