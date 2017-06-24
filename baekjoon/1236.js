/* 성 지키기
 */

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(/\s/);
var rowNum = parseInt(input[0]);
var colNum = parseInt(input[1]);

var STATUS_EMPTY = '.';
var STATUS_FULL = 'X';

var rowExistanceMap = [], colExistanceMap = [];

for (var rowIndex = 0; rowIndex < rowNum; rowIndex++) {
	var line = input[rowIndex+2];
	for (var colIndex = 0; colIndex < colNum; colIndex++) {
		var status = line[colIndex];
		if (status === STATUS_FULL) {
			rowExistanceMap[rowIndex] = true;
			colExistanceMap[colIndex] = true;
		}
	}
}

var rowEmptyNum = rowNum - rowExistanceMap.reduce(function(pv, cv) {
	return pv + (cv === true);
}, 0);
var colEmptyNum = colNum - colExistanceMap.reduce(function(pv, cv) {
	return pv + (cv === true);
}, 0);

console.log(Math.max(rowEmptyNum, colEmptyNum));
