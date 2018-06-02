// /*
var BLACK = "#";
var WHITE = ".";
var VISITED = "-";

(function() {
	var inputLines = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	var lineIdx = 0;
	var caseNum = parseInt(inputLines[lineIdx++]);
	for (var caseIdx = 0; caseIdx < caseNum; caseIdx++) {
		var info = inputLines[lineIdx++].split(' ');
		var rowNum = parseInt(info[0]);
		var colNum = parseInt(info[1]);

		var board = inputLines.slice(lineIdx, lineIdx+rowNum).map(function(row) {
			return row.split('');
		});
		lineIdx += rowNum;
		var result = check(board, 0, 0, rowNum, colNum);
		console.log(result);
	}	
})();

function getNextCell(row, col, rowNum, colNum) {
	if (col+1 === colNum) {
		if (row+1 === rowNum) {
			return null;
		} else {
			return {
				row: row+1,
				col: 0
			};
		}
	} else {
		return {
			row: row,
			col: col+1
		};
	}
}

// L J ㄱ r

function check(board, row, col, rowNum, colNum) {
	var cell1 = board[row][col];

	if (cell1 !== WHITE) {
		var nextCell = getNextCell(row, col, rowNum, colNum);
		if (!nextCell) {
			return 1;
		}

		return check(board, nextCell.row, nextCell.col, rowNum, colNum);
	}

	if (!board[row+1]) {
		return 0;
	}

	var count = 0;
	if (check1(board, row, col, VISITED)) {
		var nextCell = getNextCell(row, col, rowNum, colNum);
		if (!nextCell) {
			return 1;
		}

		count += check(board, nextCell.row, nextCell.col, rowNum, colNum);
		check1(board, row, col, WHITE);
	}
	if (check2(board, row, col, VISITED)) {
		var nextCell = getNextCell(row, col, rowNum, colNum);
		if (!nextCell) {
			return 1;
		}

		count += check(board, nextCell.row, nextCell.col, rowNum, colNum);
		check2(board, row, col, WHITE);
	}
	if (check3(board, row, col, VISITED)) {
		var nextCell = getNextCell(row, col, rowNum, colNum);
		if (!nextCell) {
			return 1;
		}

		count += check(board, nextCell.row, nextCell.col, rowNum, colNum);
		check3(board, row, col, WHITE);
	}
	if (check4(board, row, col, VISITED)) {
		var nextCell = getNextCell(row, col, rowNum, colNum);
		if (!nextCell) {
			return 1;
		}

		count += check(board, nextCell.row, nextCell.col, rowNum, colNum);
		check4(board, row, col, WHITE);
	}

	return count;
}

function check1(board, row, col, setValue) { // L
	var next1 = board[row+1][col];
	var next2 = board[row+1][col+1];

	if (setValue !== WHITE && (next1 !== WHITE || next2 !== WHITE)) {
		return false;
	}

	board[row][col] = setValue;
	board[row+1][col] = setValue;
	board[row+1][col+1] = setValue;

	return true;
}

function check2(board, row, col, setValue) { // J
	var next1 = board[row+1][col];
	var next2 = board[row+1][col-1];

	if (setValue !== WHITE && (next1 !== WHITE || next2 !== WHITE)) {
		return false;
	}

	board[row][col] = setValue;
	board[row+1][col] = setValue;
	board[row+1][col-1] = setValue;

	return true;
}

function check3(board, row, col, setValue) { // ㄱ
	var next1 = board[row][col+1];
	var next2 = board[row+1][col+1];

	if (setValue !== WHITE && (next1 !== WHITE || next2 !== WHITE)) {
		return false;
	}

	board[row][col] = setValue;
	board[row][col+1] = setValue;
	board[row+1][col+1] = setValue;

	return true;
}

function check4(board, row, col, setValue) { // r
	var next1 = board[row][col+1];
	var next2 = board[row+1][col];

	if (setValue !== WHITE && (next1 !== WHITE || next2 !== WHITE)) {
		return false;
	}

	board[row][col] = setValue;
	board[row][col+1] = setValue;
	board[row+1][col] = setValue;

	return true;
}

