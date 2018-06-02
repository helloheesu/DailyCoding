(function() {
	var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var result = solve(parseInt(input[0]), splitAndConvert(input[1]), splitAndConvert(input[2]));
	console.log(result);
})();

function splitAndConvert(stringOfNumbers) {
	return stringOfNumbers.split(' ').map(function(num) {
		return parseInt(num);
	});
}

function solve(numOfCity, distances, priceInfos) {
	var lowestPrice = priceInfos[0];
	var transFee = 0;

	for (var i = 0, len = distances.length; i < len; i++) {
		var currentPrice = priceInfos[i];
		if (currentPrice < lowestPrice) {
			lowestPrice = currentPrice;
		}

		transFee = stringSum( transFee, stringMul(distances[i], lowestPrice) );
	}

	return transFee;
}

function stringSum(a, b) { // returns String
	a = String(a).split('').reverse();
	b = String(b).split('').reverse();

	var result = [], len = Math.max(a.length, b.length);
	for (var i = 0, pv = 0; i < len; i++) {
		var digit = parseInt(a[i] || 0) + parseInt(b[i] || 0) + pv;
		result[i] = digit % 10;
		pv = Number(digit >= 10);
	}

	if (pv) {
		result.push(pv);
	}
	return result.reverse().join('');
}

function stringMul(a, b) { // returns String
	a = String(a).split('').reverse();
	b = String(b).split('').reverse();

	var aLen = a.length, bLen = b.length;
	var len = aLen + bLen;
	var result = new Array(len);
	for (var i = 0; i < len; i++) {
		result[i] = 0;
	}

	for (var bIdx = 0, pv = 0; bIdx < bLen; bIdx++) {
		var bDigit = parseInt(b[bIdx] || 1);
		pv = 0;
	    for (var aIdx = 0; aIdx < aLen; aIdx++) {
	        var aDigit = parseInt(a[aIdx] || 1);
	        var mulDigit = result[bIdx+aIdx] + aDigit * bDigit + pv;
	        result[bIdx+aIdx] = mulDigit % 10;
	        pv = parseInt(mulDigit/10);
	    }
	    result[bIdx+aIdx] += pv;
	}

	if (parseInt(result[len-1]) === 0) {
		result.pop();
	}

	return result.reverse().join('');
}
