(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var input = splitAndConvert(rawInputs[0], 2);

    var result = topdownSolution(input[0], input[1]);
    console.log(result);
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

function topdownSolution(N, K) {
    var MOD = 1000000000;
    var table = [];
    return solve(N, K);

    function solve(N, K) {
        if (K === 1) return 1;
        if (K === 2) return N+1;
        if (N === 1) return K;

        if (table[N*201 + K]) {
            return table[N*201 + K];
        }

        var result = 0;
        for (var i = 0; i <= N; i++) {
            result = (result + solve(N-i,K-1)) % MOD;
        }
        
        table[N*201 + K] = result;
        return result;
    }
}

function recursiveSolution(N, K) {
    var MOD = 1000000000;

    if (K === 1) return 1;
    if (K === 2) return N+1;
    if (N === 1) return K;

    var result = 0;
    for (var i = 0; i <= N; i++) {
        result = (result + recursiveSolution(N-i,K-1)) % MOD;
    }
    
    return result;
}

// function iterativeSolution(N, K) {
//     var table = []; // [K][N]

//     for (var i = 1; i <= N; i++) {
//         for (var j = 1; j <= K; j++) {
//             if (K === 1) {
//                 result = 1;
//             } else if (K === 2) {
//                 result = N+1;
//             } else {
//             }    
//         }
        
//     }
    
//     for (var j = 1; j <= K; j++) {
//         if (!table[K]) {
//             table[K] = [];
//         }
        
//         var result = 0;
//         if (K === 1) {
//             result = 1;
//         } else if (K === 2) {
//             result = N+1;
//         } else {
//             for (var i = 0; i <= N; i++) {    
//                 if (N === 1) {
//                     result = K;
//                 }

//                 result += solve(N-i,K-1);
//             }
            
//         }
//         table[K][N] = result;
//     }
// }

// /**
//  * 1 : 100 010 001
//  * 2 : 200 020 002 | 110 101 011
//  * 3 : 0123 -> (3,3) 3]solve(N-3,K-1), 2]solve(N-2,K-1), 1]solve(N-1,K-1), 0]solve(N-0,K-1)
//  * -> (3,3) 10

//  */
