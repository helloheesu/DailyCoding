(function() {
    var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(function(num) {
        return parseInt(num);
    });
    var caseNum = input[0];
    var cases = input.slice(1);

    for (var caseIndex = 0; caseIndex < caseNum; caseIndex++) {
        var decNum = cases[caseIndex];
        var result = getOnesLocation(decNum);
        
        console.log(result.join(" "));
    }
})();


function getOnesLocation(decNum) {
    var binNumStr = decNum.toString(2);
    var len = binNumStr.length;
    var result = [];

    for (var index = 0; index < binNumStr.length; index++) {
        var location = len - 1 - index;
        if (binNumStr[location] == "1") {
            result.push(index);
        }
    }

    return result;
}