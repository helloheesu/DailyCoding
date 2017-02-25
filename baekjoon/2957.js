// a[key] = {hasLeft:false, hasRight:false}

var Solution = (function() {
	var maxNodeNum;
	var tree;
	var rootKey;

	function getInput() {
		return parseInt(readline());
	}
	function print(value) {
		print(value);
	}

	function solve() {
		var currentKey;
		var currentNodeNum = 0;
		var insertCallCount = 0;

		maxNodeNum = this.getInput();
		tree = new Array(maxNodeNum);

		rootKey = this.getInput() - 1;
		tree[rootKey] = {hasLeft: false, hasRight: false};
		insertCallCount += 0;
		currentNodeNum++;
		this.print(insertCallCount);

		// for (; currentNodeNum <= maxNodeNum; currentNodeNum++) {
		// 	currentKey = getInput() - 1;
		// }
	}

	// function getClosestKeys(key) {
	// 	// body...
	// }

	return {
		"solve": solve,
		"getInput": getInput,
		"print": print
	};
})();
