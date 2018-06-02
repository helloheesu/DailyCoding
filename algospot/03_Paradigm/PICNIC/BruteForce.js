(function() {
	function getInputCases(rawInputLines) {
		let lineIdx = 0;
		const caseNum = parseInt(rawInputLines[lineIdx++]);
		const cases = [];
		for (let caseIdx = 0; caseIdx < caseNum; caseIdx++) {
			const [studentNum, pairNum] = rawInputLines[lineIdx++]
				.match(/\d+/g).map((stringNum) => parseInt(stringNum));
			const friendList = rawInputLines[lineIdx++]
				.match(/\d+/g).map((stringNum) => parseInt(stringNum));

			cases.push({ studentNum, friendList });
		}
		return cases;
	}

	function printResult(result) {
		console.log(result);
	}

	const swap = (arr, i, j) => {
		const tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	};

	const permutation = (inputArr) => {
		const result = [];
		const perm = (input, i) => {
			if (i === input.length) {
				result.push(input.slice());
				return;
			}

			for (let j = i; j < input.length; j++) {
				swap(input, i, j);
				perm(input, i + 1);
				swap(input, i, j);
			}
		};
		perm(inputArr.slice(), 0);
		return result;
	};

	const generateNumberArray = N =>
		Array.apply(null, {length: N}).map((_, idx) => idx);

	function solve({ studentNum, friendList }) {
		const _isAvailable = pairMap => pairMap.every((pair, me, pairMap) => {
			if (pair === me) {
				return false;
			}
			for (let myIdx = 0, len = friendList.length; myIdx < len; myIdx++) {
				myIdx = friendList.indexOf(me, myIdx);
				if (myIdx === -1) {
					break;
				}
				const pairIdx = (myIdx%2 === 0)? myIdx+1: myIdx-1;
				if (friendList[pairIdx] === pair) {
					return pairMap[pair] === me;
				}
			}
			return false;
		});

		const permuted = permutation(generateNumberArray(studentNum));
		return permuted.filter(_isAvailable).length;
	}

	// const inputLines = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	// const cases = getInputCases(inputLines);
	// for (let i = 0; i < cases.length; i++) {
	// 	printResult( solve(cases[i]) );
	// }

    const input = `50 
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
10 17
0 1 0 4 0 5 3 5 10 0 1 2 6 9 7 8 1 6 6 10 6 8 7 2 2 3 2 10 2 6 9 4 8 5
2 1 
0 1 
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
10 17
0 1 0 4 0 5 3 5 10 0 1 2 6 9 7 8 1 6 6 10 6 8 7 2 2 3 2 10 2 6 9 4 8 5
2 1 
0 1 
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
10 17
0 1 0 4 0 5 3 5 10 0 1 2 6 9 7 8 1 6 6 10 6 8 7 2 2 3 2 10 2 6 9 4 8 5
2 1 
0 1 
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
10 17
0 1 0 4 0 5 3 5 10 0 1 2 6 9 7 8 1 6 6 10 6 8 7 2 2 3 2 10 2 6 9 4 8 5
2 1 
0 1 
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
10 17
0 1 0 4 0 5 3 5 10 0 1 2 6 9 7 8 1 6 6 10 6 8 7 2 2 3 2 10 2 6 9 4 8 5
2 1 
0 1 
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
10 17
0 1 0 4 0 5 3 5 10 0 1 2 6 9 7 8 1 6 6 10 6 8 7 2 2 3 2 10 2 6 9 4 8 5
2 1 
0 1 
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
10 17
0 1 0 4 0 5 3 5 10 0 1 2 6 9 7 8 1 6 6 10 6 8 7 2 2 3 2 10 2 6 9 4 8 5
2 1 
0 1 
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
10 17
0 1 0 4 0 5 3 5 10 0 1 2 6 9 7 8 1 6 6 10 6 8 7 2 2 3 2 10 2 6 9 4 8 5
2 1 
0 1 
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5`;
	const inputLines = input.toString().split('\n');
	const cases = getInputCases(inputLines);
	for (let i = 0; i < cases.length; i++) {
		printResult( solve(cases[i]) );
	}
})();