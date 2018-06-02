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
