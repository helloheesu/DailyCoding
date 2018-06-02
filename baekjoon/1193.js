(function() {
    var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var result = solve2(parseInt(input[0]));
	console.log(result);
})();

function solve(numX) {
    var lineNumber = 1;
    var triangleNumber = 1;
    while(triangleNumber < numX) {
        lineNumber++;
        triangleNumber += lineNumber;
    }

    var diff = triangleNumber - numX;

    var up = (lineNumber-diff);
    var down = (1+diff);
    var result;
    if (lineNumber % 2 === 0) {
        result = up + "/" + down;
    } else {
        result = down + "/" + up;
    }
    
    return result;
}

function solve2(numX) {
    var lineNumber = 1;
    while(numX > lineNumber) {
        numX -= lineNumber;
        lineNumber++;
    }
    // numX became diff+1

    var up = numX;
    var down = lineNumber - numX + 1;
    var result;
    if (lineNumber % 2 === 0) {
        result = up + "/" + down;
    } else {
        result = down + "/" + up;
    } 

    return result;
}