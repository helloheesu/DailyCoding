function RMQ(values) {
	this.n = values.length;
	this.rangeMin = new Array(this.n * 4);
	this.init(values, 0, this.n-1, 1);
}

RMQ.prototype.init = function(values, valuesLeftIndex, valuesRightIndex, rangeMinIndex) {
	console.trace("init", valuesLeftIndex, valuesRightIndex, rangeMinIndex, this.rangeMin);
	if (valuesLeftIndex === valuesRightIndex) {
		this.rangeMin[rangeMinIndex] = values[valuesLeftIndex];
		console.trace("same", valuesLeftIndex, rangeMinIndex, values[valuesLeftIndex], this.rangeMin);
		return this.rangeMin[rangeMinIndex];
	}

	var mid = Math.floor((valuesLeftIndex + valuesRightIndex) / 2);

	var leftMin = this.init(values, valuesLeftIndex, mid, rangeMinIndex * 2);
	console.log("leftMin", valuesLeftIndex, mid);
	var rightMin = this.init(values, mid + 1, valuesRightIndex, rangeMinIndex * 2 + 1);
	console.log("rightMin", valuesRightIndex, mid+1);

	var min = (leftMin < rightMin)? leftMin: rightMin;
	this.rangeMin[rangeMinIndex] = min;
	console.trace("compare", valuesLeftIndex, valuesRightIndex, rangeMinIndex, min, this.rangeMin);
	return this.rangeMin[rangeMinIndex];
};

RMQ.prototype._query = function(left, right, node, nodeLeft, nodeRight) {
	console.trace("_query", left, right, node, nodeLeft, nodeRight);
	if (right < nodeLeft || nodeRight < left) {
		console.log("0", right, nodeLeft, nodeRight, left);
		return Number.MAX_SAFE_INTEGER;
	}

	if (left <= nodeLeft && nodeRight <= right) {
		console.log("include", left, nodeLeft, nodeRight, right);
		return this.rangeMin[node];
	}

	var mid = Math.floor((nodeLeft + nodeRight) / 2);

	var leftMin = this._query(left, right, node*2, nodeLeft, mid);
	console.log("leftMin", node*2, nodeLeft, mid);
	var rightMin = this._query(left, right, node*2+1, mid+1, nodeRight);
	console.log("leftMin", node*2+1, mid+1, nodeRight);

	var min = (leftMin < rightMin)? leftMin: rightMin;
	console.trace("compare", min, left, right, nodeLeft, nodeRight);
	return min;
};

RMQ.prototype.query = function(left, right) {
	return this._query(left, right, 1, 0, this.n - 1);
};
