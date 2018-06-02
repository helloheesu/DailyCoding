(function() {
    var NUM_OF_HEIGHTS = 9;

    var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, NUM_OF_HEIGHTS).map(function (num) {
        return parseInt(num);
    });
    var result = solve(input);
    for (var index = 0; index < result.length; index++) {
        console.log(result[index]);
    }

    function solve(heights) {
        var EXPECTED_SUM = 100;
        var sum = heights.reduce(function (acc, height) {
            return acc + height;
        }, 0);
        var difference = sum - EXPECTED_SUM;
        var fakeHeights = determineFakes(heights, difference);
        var realHeights = heights.filter(function (height) {
            return (fakeHeights.indexOf(height) === -1);
            // return !fakeHeights.includes(height);
        });
        return realHeights.sort(function (a, b) {
            return a > b;
        });
    }
    
    function determineFakes(heights, expectedSum) {
        for (var firstIndex = 0; firstIndex < NUM_OF_HEIGHTS; firstIndex++) {
            var firstHeight = heights[firstIndex];
            for (var secondIndex = firstIndex + 1; secondIndex < NUM_OF_HEIGHTS; secondIndex++) {
                var secondHeight = heights[secondIndex];
                if (firstHeight + secondHeight === expectedSum) {
                    return [firstHeight, secondHeight];
                }
            }
        }
    }
})();
