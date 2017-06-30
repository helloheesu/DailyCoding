// n보다 '크고' 2n보다 작거나 같은 <- 크고 빼먹음
// countPrimes(isPrime, n+1, 2*n) <- n에 parseInt 안해서 n이 1이면 n+1은 11 넘어감
// pop 말고 0 으로 검사

function getIsPrime(untilNum) {
	var isPrime = new Array(untilNum+1);

	// nest
	var rooted = Math.floor(Math.sqrt(untilNum));
	for (var curPrime = 2; curPrime <= rooted; curPrime++) {
		if (isPrime[curPrime] === false) {
			continue;
		}

		for (var multiple = curPrime*curPrime; multiple <= untilNum; multiple += curPrime) {
			isPrime[multiple] = false;
		}
	}

	return isPrime;
}

function countPrimes(isPrime, start, end) {
	return isPrime.slice(start, end+1).reduce(function(count, isPrime) {
		return count - (isPrime===false);
	}, end - start + 1);
}

(function() {
	var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

	var isPrime = getIsPrime(123456*2);

	for (var i = 0; i < input.length; i++) {
		var n = parseInt(input[i]);
		if (n === 0) {
			break;
		}
		console.log(countPrimes(isPrime, n+1, 2*n));
	}
})();

// (function() {
// 	var isPrime = getIsPrime(1000000);
// 	// var primes = [];
// 	for (var i = 2; i < isPrime.length; i++) {
// 		if (isPrime[i] !== false) {
// 			// primes.push(i);
// 			console.log(i);
// 		}
// 	}
// 	// console.log(primes);
// })();
