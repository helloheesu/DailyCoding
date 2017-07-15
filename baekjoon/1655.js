function BinaryMinHeap(){
	this.heap = [];
}

BinaryMinHeap.prototype = {
	push: function(element) {
		this.heap.push(element);
		this.bubbleUp(this.heap.length - 1);
	},

	bubbleUp: function(n) {
		var element = this.heap[n];

		while (n > 0) {
			var parentN = Math.floor((n + 1) / 2) - 1,
			parent = this.heap[parentN];

			if (element.key >= parent.ley)
				break;

			this.heap[parentN] = element;
			this.heap[n] = parent;
			n = parentN;
		}
	},


	pop: function() {
		var result = this.heap[0];
		var end = this.heap.pop();
		if (this.heap.length > 0) {
			this.heap[0] = end;
			this.sinkDown(0);
		}
		return result;
	},

	sinkDown: function(n) {
		var length = this.heap.length,
		element = this.heap[n];

		while(true) {
			var child2N = (n + 1) * 2, child1N = child2N - 1;
			var swap = null;

			if (child1N < length) {
				var child1 = this.heap[child1N];
				if (child1.key < element.key)
					swap = child1N;
			}

			if (child2N < length) {
				var child2 = this.heap[child2N];
				if (child2.key < (swap == null ? element.key : child1.key))
					swap = child2N;
			}

			if (swap == null) break;

			this.heap[n] = this.heap[swap];
			this.heap[swap] = element;
			n = swap;
		}
	}

	// remove: function(node) {
	// 	var length = this.heap.length;
	// 	for (var i = 0; i < length; i++) {
	// 		if (this.heap[i] != node) continue;
	// 		var end = this.heap.pop();
	// 		if (i == length - 1) break;
	// 		this.heap[i] = end;
	// 		this.bubbleUp(i);
	// 		this.sinkDown(i);
	// 		break;
	// 	}
	// },

	// size: function() {
	// 	return this.heap.length;
	// },
};

function() {
	var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	
	var minheap = new BinaryMinHeap();
	var maxheap = new BinaryMinHeap();
}

