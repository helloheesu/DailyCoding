/* 블랙잭
 * 쉽게 가 볼까? -> 입력 개수 적고 시간 충분, ㅇㅋ
 */

function solve(cardsLen, maxSum, cards) {
	var currentMaxSum = 0;
	for (var firstIdx = 0; firstIdx+2 < cardsLen; firstIdx++) {
		for (var secondIdx = firstIdx + 1; secondIdx+1 < cardsLen; secondIdx++) {
			for (var thirdIdx = secondIdx + 1; thirdIdx < cardsLen; thirdIdx++) {
				var sum = cards[firstIdx] + cards[secondIdx] + cards[thirdIdx];
				if (sum === maxSum) {
					return maxSum;
				}
				if (sum < maxSum && sum > currentMaxSum) {
					currentMaxSum = sum;
				}
			}
		}
	}
	return currentMaxSum;
}

(function () {
	var inputLines = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var meta = inputLines[0].split(' ').map(function(cardNumber) {
		return parseInt(cardNumber);
	});
	var cardsLen = meta[0], maxSum = meta[1];
	var cards = inputLines[1].split(' ').map(function(cardNumber) {
		return parseInt(cardNumber);
	});

	console.log(solve(cardsLen, maxSum, cards));
})();
