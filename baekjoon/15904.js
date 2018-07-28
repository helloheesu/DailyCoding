(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var input = rawInputs[0];
	var result = solve(input);
	console.log(result? "I love UCPC": "I hate UCPC");
})();

function solve(inputStr) {
    var idxOfU = inputStr.indexOf('U');
    var idxOfC = inputStr.indexOf('C', idxOfU+1);
    var idxOfP = inputStr.indexOf('P', idxOfC+1);
    var idxOfC2 = inputStr.indexOf('C', idxOfP+1);
    return idxOfU !== -1 && idxOfC !== -1 && idxOfP !== -1 && idxOfC2 !== -1;
}