// a[key] = {hasLeft:false, hasRight:false}

var Solution = (function() {
	var maxNodeNum = 0;
	var currentNodeNum = 0;
	var tree = {};
	var result = 0;

	function init() {
		maxNodeNum = 0;
		currentNodeNum = 0;
		tree = {};
		result = 0;
	}

	function getInput() {
		return parseInt(readline());
	}

	function output(value) {
		print(value);
	}

	function solve() {
		maxNodeNum = this.getInput();

		for (; currentNodeNum < maxNodeNum; currentNodeNum++) {
			this.print(result++);
		}
	}

	return {
		"init": init, // for test
		"solve": solve,
		"getInput": getInput,
		"print": output
	};
})();
