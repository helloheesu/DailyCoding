(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var meta = splitAndConvert(rawInputs[0], 2);
    var inputs = rawInputs.slice(1, 1+meta[1]).map(function(input) {
        return splitAndConvert(input, 2);
    });
	var result = solve2(inputs, meta[0], meta[1]);
	console.log(result);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function solve2(vertexes, nodeNum, vertextNum) {
    var parent = [];
    for (var i = 0; i <= nodeNum; i++) {
        parent[i] = i;
    }

    for (var vertexIdx = 0; vertexIdx < vertextNum; vertexIdx++) {
        var edges = vertexes[vertexIdx];
        Union(edges[0], edges[1]);
    }

    // console.log(parent);
    return parent.filter(function(value, index) {
        // console.log(value, index, (value === index) || (value === undefined));
        return (value === index);
    }).length - 1;

    function Find(x) {
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


function solve(infos, N) {
    var len = infos.length;

    var parent = [];
    for (var i = 0; i < len; i++) {
        var node = infos[i];
        Union(node[0], node[1]);
    }
    
    var roots = [];
    for (j = 1; j <= N; j++) {
        // var root = parent[j];  // -> Find 무조건해줘야함
        var root = Find(j);
        if (roots.indexOf(root) === -1) {
            roots.push(root);
        }
    }
    return roots.length;

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
