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

	function getNeighbors(key) {
		var leftIndex, rightIndex;
		var neighbors = {
			left: undefined,
			right: undefined
		};

		for (leftIndex = rightIndex = key;
			leftIndex >= 1 && rightIndex <= treeLen;
			leftIndex--, rightIndex++) {
			tree[leftIndex]
			tree[rightIndex]
		}
	}

	function insert(key, parentKey) {
		var height = 0;

		if (parentKey) {
			var parentNode = tree[parentKey];
			parentNode[(key>parentKey)?'rightChildKey':'leftChildKey'] = key;
			height = parentNode.height + 1;
		}

		tree[key] = {
			height: height,
			leftChildKey: undefined,
			rightChildKey: undefined
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


