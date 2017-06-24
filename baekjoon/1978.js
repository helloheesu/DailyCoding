function isPrime(number, primeArray) {
	var half = Math.floor(number/2);
	var primeIndex = 0;
	for (var curNum = 2; curNum <= half;) {
		if (number % curNum === 0) {
			return false;
		}

		var nextPrime = primeArray && primeArray[primeIndex];
		if (nextPrime && (nextPrime <= half)) {
			primeIndex++;
			curNum = nextPrime;
		} else {
			curNum++;
		}
	}

	return true;
}

function getPrimesBefore(beforeNum) {
	var primes = [];

	for (var curNum = 2; curNum < beforeNum; curNum++) {
		if (isPrime(curNum, primes)) {
			primes.push(curNum);
		}
	}

	return primes;
}

function getNextPrimes(number, primes) {
	primes = primes || getPrimesBefore(number);

	while (!isPrime(number, primes)) {
		number++;
	}

	primes.push(number);
	return primes;
}

function isPanlidrome(str) {
	if (typeof str !== "string") {
		str = String(str);
	}

	var lastIdx = str.length - 1;
	for (var idx = Math.floor(str.length / 2) - 1; idx >= 0; idx--) {
		if (str[idx] !== str[lastIdx - idx]) {
			return false;
		}
	}

	return true;
}


function solve(num) {
	var primes;
	do {
		primes = getNextPrimes(num, primes);

		var curNum = primes[primes.length - 1];
		///////////////////////////////////
		console.log(curNum);
		///////////////////////////////////
		if (isPanlidrome(curNum)) {
			return curNum;
		}

		num = curNum+1;
	} while (true);
}

var inputLines = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var len = parseInt(inputLines[0]);
var inputNums = inputLines[1].split(' ').map(function (num) {
	return parseInt(num);
}).sort(function (a, b) {
	return a - b;
});

// console.log(solve(parseInt(inputLines[0])));
console.log(inputNums);
