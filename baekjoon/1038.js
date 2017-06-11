/* 감소하는 수
 */
var ONE_CIPHER_NUM = 9;
var MAX_DECREASING_NUM = 1022;
var INCREDIBLE_NTH = -1;

function isDecreasing(num) {
	while(parseInt(num/10)) {
		var rear = num%10;
		num = Math.floor(num/10);
		var front = num%10;
		if (front <= rear) {
			return false;
		}
	}
	return true;
}

function getCipher(n) {
	return Math.floor(Math.log10(n));
}

function getNthResult(nth) {
	if (nth > MAX_DECREASING_NUM) { return INCREDIBLE_NTH; }
	
	if (nth <= ONE_CIPHER_NUM) { return nth; }
	nth -= ONE_CIPHER_NUM + 1;

	var resultArray = [];
	var resultLength = 0;
	var cipherIndexMap = [];

	var cipher = 1;
	cipherIndexMap[cipher] = resultLength;
	for (var currentValue = Math.pow(10, cipher); currentValue < Math.pow(10, cipher+1); currentValue++) {
		if (isDecreasing(currentValue)) {
			resultArray.push(currentValue);
			resultLength++;
		}
	}

	for (cipher = cipher + 1; (cipher <10) && (resultLength <= nth); cipher++) {
		var endValue = Math.pow(10, cipher+1);
		var baseValue = cipher * Math.pow(10, cipher);
		var baseIndex = cipherIndexMap[cipher - 1];

		cipherIndexMap[cipher] = resultLength;

		for (var currentValue = baseValue, currentIndex = baseIndex; 
			currentValue < endValue; currentIndex++) {
			currentValue = baseValue + resultArray[currentIndex];
			if (isDecreasing(currentValue)) {
				resultArray.push(currentValue);
				resultLength++;
			} else {
				baseValue += Math.pow(10, cipher);
				currentIndex = baseIndex - 1;
			}
		}
	}

	return resultArray[nth];
}

var fs = require('fs');
var nth = parseInt(fs.readFileSync('/dev/stdin').toString());

console.log(getNthResult(nth));
