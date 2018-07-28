(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var caseNum = parseInt(rawInputs[0]);
    for (var caseIdx = 1; caseIdx <= caseNum; caseIdx++) {
        var input = parseInt(rawInputs[caseIdx]);
        var result = iterativeSolution(input);
        console.log(result);
    }
})();

function iterativeSolution(N) {
    var table = [undefined, 1,1,1,2,2];

    for (var i = 6; i <= N; i++) {
        table[i] = table[i-1] + table[i-5];
    }

    return table[N];
}

function recursiveSolution(N) {
    if (N === 1) return 1;
    if (N === 2) return 1;
    if (N === 3) return 1;
    if (N === 4) return 2;
    if (N === 5) return 2;

    return recursiveSolution(N-1)+recursiveSolution(N-5);
}

function topdownSolution(N) {
    var table = [undefined, 1,1,1,2,2];
    return solve(N);

    function solve(N) {
        if (table[N]) {
            return table[N];
        }
        var result = solve(N-1)+solve(N-5);
        table[N] = result;
        return result;
    }
}
