(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var meta = splitAndConvert(rawInputs[0]);
    var inputNum = meta[1];

    var inputs = rawInputs.slice(1, 1+inputNum);
    solve(inputs, inputNum, meta[0]);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve(inputs, inputNum, N) {
    var parent = [];

    for (var inputIdx = 0; inputIdx < inputNum; inputIdx++) {
        var input = splitAndConvert(inputs[inputIdx], 3);

        if (input[0] === 0) { // operator === UNION
            Union(input[1], input[2]);
        } else { // operator === FIND
            var isInSameGroup = (Find(input[1]) === Find(input[2]));
            console.log(isInSameGroup? "YES": "NO");
        }
        // console.log(parent);
    }

    /*
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
    */

    function Find(x) {
        if (parent[x] === undefined) {
            parent[x] = x;
            return x;
        }

        var temporalParents = [];
        while(x !== parent[x]) {
            temporalParents.push(x);
            x = parent[x];
        }

        for (var i = 0, len = temporalParents.length; i < len; i++) {
            parent[temporalParents[i]] = x;
        }

        return x;
    }

    function Union(x, y) {
        x = Find(x);
        y = Find(y);

        if (x !== y) {
            parent[y] = x;
        }
    }
}
