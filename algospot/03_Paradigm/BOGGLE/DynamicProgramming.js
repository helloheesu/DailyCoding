const BOARD_SIZE = 5;

function getInputCases(rawInputLines) {
	let lineIdx = 0;
	const caseNum = parseInt(rawInputLines[lineIdx++]);
	const cases = [];
	for (let caseIdx = 0; caseIdx < caseNum; caseIdx++) {
		const board = [];
		for (let boardIdx = 0; boardIdx < BOARD_SIZE; boardIdx++) {
			board.push(
				rawInputLines[lineIdx++].split("")
			);
		}
		
		const wordNum = rawInputLines[lineIdx++];
		const words = [];
		for (let wordIdx = 0; wordIdx < wordNum; wordIdx++) {
			words.push(rawInputLines[lineIdx++]);
		}

		cases.push({ board, words });
	}
	return cases;
}

function printResult(result) {
	for (let i = 0; i < result.length; i++) {
		console.log(`${result[i].word} ${result[i].available? "YES": "NO"}`);
	}
}

function solve({ board, words }) {
	return words.reduce((result, word) => {
		const cacheMap = [
			[ {},{},{},{},{} ],
			[ {},{},{},{},{} ],
			[ {},{},{},{},{} ],
			[ {},{},{},{},{} ],
			[ {},{},{},{},{} ]
		];

		const _available = (word, x, y) => {
			if (x < 0 || x >= BOARD_SIZE ||
				y < 0 || y >= BOARD_SIZE) {
				return false;
			}
			if (board[y][x] !== word[0]) {
				return false;
			}
			if (word.length === 1) {
				return true;
			}

			const cache = cacheMap[y][x];
			if (cache[word] !== undefined) {
				return cache[word];
			}

			const smallPrb = word.slice(1);
			const result = _available(smallPrb, x-1, y-1) ||
				_available(smallPrb, x, y-1) ||
				_available(smallPrb, x+1, y-1) ||
				_available(smallPrb, x-1, y) ||
				_available(smallPrb, x+1, y) ||
				_available(smallPrb, x-1, y+1) ||
				_available(smallPrb, x, y+1) ||
				_available(smallPrb, x+1, y+1);
			cache[word] = result;
			return result;
		}

		const available = board.some((row, y) => 
			row.some( (col, x) => _available(word, x, y) )
		);
		return result.concat({ word, available });
	}, []);
}


(function() {
	const inputLines = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	const cases = getInputCases(inputLines);
	for (let i = 0; i < cases.length; i++) {
		printResult( solve(cases[i]) );
	}
})();