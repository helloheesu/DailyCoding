// function getInput() {
// 	return parseInt(readline());
// }

// function print(value) {
// 	print(value);
// }


function generateSolution(IO) {
	var tree = [];
	var treeLen;

	function solve() {
		initTree();
		var currentKey;
	}

	function initTree() {
		treeLen = IO.getInput();
		tree = new Array(treeLen);
	}

	function getNeighborKeys(key) {
		var leftIndex, rightIndex;
		var neighborKeys = {
			left: undefined,
			right: undefined
		};

		for (leftIndex = rightIndex = key;
			leftIndex >= 1 && rightIndex <= treeLen;
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

		if (!neighborKeys) {
			height = 0;
		} else {
			var leftKey = neighborKeys.left;
			var rightKey = neighborKeys.right;

			height = (leftKey && !tree[leftKey].right && tree[leftKey].height+1) ||
			(rightKey && !tree[rightKey].left && tree[rightKey].height+1);

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
		"getNeighborKeys":getNeighborKeys,
		get tree() {
			return tree;
		},
		get treeLen() {
			return treeLen;
		}
	};
}

	// function getParentHeight(key) {
	// 	var closestLeft;
	// 	var closestRight;
	// 	var shorterGap = (key < treeLen/2)? key: treeLen-key-1;
	// 	var i;

	// 	for (i = 1; i <= shorterGap; i++) {
	// 		closestLeft = tree[key - i];
	// 		closestRight = tree[key + i];
	// 		if (closestLeft || closestRight) {
	// 			break;
	// 		}
	// 	}
	// }


