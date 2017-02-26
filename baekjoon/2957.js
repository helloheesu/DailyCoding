var DEBUG = true;

function generateSolution(IO) {
	var tree = [];
	var treeLen;

	function solve() {
		initTree();
		var currentKey;
		var neighborKeys;

		var result = 0;
		if (DEBUG) {
			console.time("start");
		}
		for (var currentNodeNum = 1; currentNodeNum < treeLen; currentNodeNum++) {
			currentKey = IO.getInput();
			console.time("key");
			neighborKeys = getNeighborKeys(currentKey);
			console.timeEnd("key");
			console.time("insert");
			insert(currentKey, neighborKeys);
			console.timeEnd("insert");
			result += tree[currentKey].height;
			IO.print(result);
		}
		if (DEBUG) {
			console.timeEnd("start");
		}
	}

	function initTree() {
		treeLen = IO.getInput() + 1;
		tree = new Array(treeLen);
	}

	function getNeighborKeys(key) {
		var leftIndex, rightIndex;
		var neighborKeys = {
			left: undefined,
			right: undefined
		};

		for (leftIndex = key - 1, rightIndex = key + 1;
			leftIndex >= 1 || rightIndex <= treeLen;
			leftIndex--, rightIndex++) {
			if (tree[leftIndex]) {
				neighborKeys.left = leftIndex;
				neighborKeys.right = tree[leftIndex].right;
				break;
			}
			if (tree[rightIndex]) {
				neighborKeys.right = rightIndex;
				neighborKeys.left = tree[rightIndex].left;
				break;
			}
		}

		return neighborKeys;
	}

	function insert(key, neighborKeys) {
		var height;

		if (!neighborKeys || (!neighborKeys.left && !neighborKeys.right)) {
			height = 0;
		} else {
			var leftKey = neighborKeys.left;
			var rightKey = neighborKeys.right;

			var parentKey;
			if (leftKey && rightKey) {
				parentKey = (tree[leftKey].height > tree[rightKey].height)? leftKey: rightKey;
			} else {
				parentKey = (leftKey)? leftKey: rightKey;
			}
			height = tree[parentKey].height + 1;

			if (leftKey) {
				tree[leftKey].right = key;
			}
			if (rightKey) {
				tree[rightKey].left = key;
			}
		}

		tree[key] = {
			"height": height,
			"left": leftKey,
			"right": rightKey
		};
	}

	function reset() {
		tree.splice(0, tree.length);
		treeLen = 0;
	}

	return {
		"solve":solve,
		// for test
		"insert":insert,
		"reset":reset,
		"initTree":initTree,
		"getNeighborKeys":getNeighborKeys,
		get tree() {
			return tree;
		},
		get treeLen() {
			return treeLen;
		}
	};
}

// generateSolution({
// 	getInput: function() {
// 		return parseInt(readline());
// 	}, print: function(value) {
// 		print(value);
// 	}
// }).solve();
