(function() {
    var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var numOfHeights = parseInt(input[0]);
    var heights = splitAndConvert(input[1], numOfHeights);
	var result = solve2(heights);
	console.log(result);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(heights) {
    var risingHeightFromEach = heights.map(function(curHeight, curIdx, heights) {
        var len = heights.length;
        var idx = curIdx+1;
        var height = heights[idx];
        var risingHeight = 0;

        while(idx < len && height > heights[idx-1]) {
            risingHeight += (height - heights[idx-1]);
            idx++;
            height = heights[idx];
        }

        return risingHeight;
    });

    return pickHighest(risingHeightFromEach);
}

function pickHighest(arr) {
    return Math.max.apply( Math, arr);
}

function solve2(heights) {
    var intervalStartHeight = Number.MAX_SAFE_INTEGER;
    var intervalEndHeight = Number.MAX_SAFE_INTEGER;
    var highestRisingHeight = 0;

    for (var idx = 0, len = heights.length; idx < len; idx++) {
        var height = heights[idx];
        if (height <= intervalEndHeight) {
            highestRisingHeight = Math.max(highestRisingHeight, intervalEndHeight - intervalStartHeight);
            intervalStartHeight = height;
        }
        intervalEndHeight = height;
    }

    return Math.max(highestRisingHeight, intervalEndHeight - intervalStartHeight);
}
