// n보다 '크고' 2n보다 작거나 같은 <- 크고 빼먹음
// countPrimes(isPrime, n+1, 2*n) <- n에 parseInt 안해서 n이 1이면 n+1은 11 넘어감

function getIsPrime(untilNum) {
	var isPrime = new Array(untilNum+1);
	isPrime[2] = true;

	// nest
	for (var curPrime = 2; curPrime <= untilNum; curPrime++) {
		if (isPrime[curPrime] === false) {
			continue;
		}

		isPrime[curPrime] = true;
		for (var multiple = curPrime*2; multiple <= untilNum; multiple += curPrime) {
			isPrime[multiple] = false;
		}
	}

	return isPrime;
}

function countPrimes(isPrime, start, end) {
	return isPrime.slice(start, end+1).reduce(function(count, isPrime) {
		return count + (isPrime? 1: 0);
	}, 0);
}

(function() {
	var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	input.pop();

	var isPrime = getIsPrime(123456*2);

	for (var i = 0; i < input.length; i++) {
		var n = parseInt(input[i]);
		console.log(countPrimes(isPrime, n+1, 2*n));
	}
})();
