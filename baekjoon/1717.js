(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var meta = splitAndConvert(rawInputs[0]);
    var inputNum = meta[1];

    var inputs = rawInputs.slice(1, 1+inputNum);
	solve(inputs);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(inputs) {
    var parent = [];

    for (var inputIdx = 0, len = inputs.length; inputIdx < len; inputIdx++) {
        var input = splitAndConvert(inputs[inputIdx], 3);

        if (input[0] === 0) { // operator === UNION
            Union(input[1], input[2]);
        } else { // operator === FIND
            // console.log(Find(input[1]), Find(input[2]));
            var isInSameGroup = (Find(input[1]) === Find(input[2]));
            console.log(isInSameGroup? "YES": "NO");
        }
    }

    function Find(x) {
        if (parent[x] === undefined) {
            parent[x] = x;
            return x;
        }
        if (parent[x] === x) {
            return x;
        }
        var foundParent = Find(parent[x]);
        parent[x] = foundParent;
        return foundParent;
    }

    function Union(x, y) {
        x = Find(x);
        y = Find(y);

        if (x !== y) {
            parent[y] = x;
        }
    }
}
