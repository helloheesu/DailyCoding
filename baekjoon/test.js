// inputs = [N, 3, 5, 1, 6, 8, 7, 2, 4]
// outputs = [0, 1, 2, 4, 7, 11, 13, 15]

describe('2957번: 이진 탐색 트리', function() {
	var inputs;
	var outputs;
	var solution;

	beforeEach(function() {
		inputs = [];
		outputs = [];
		solution = new Solution();

		sinon.stub(solution, "getInput", function() {
			var input = inputs.shift();
			return input;
		});
		sinon.stub(solution, "print", function(value) {
			outputs.push(value);
		});
	});

	afterEach(function() {
		solution.getInput.restore();
		solution.print.restore();

		inputs = null;
		outputs = null;
		solution = null;
	});

	// it('루트 1개만 입력', function() {
	// 	// given
	// 	inputs = [3];
	// 	inputs.unshift(inputs.length);

	// 	// when
	// 	Solution.solve();

	// 	// then
	// 	expect(outputs.shift()).to.be.eql(0);
	// });


	// it('왼쪽 자식 하나 추가', function() {
	// 	// given
	// 	inputs = [3, 5];
	// 	inputs.unshift(inputs.length);

	// 	// when
	// 	Solution.solve();

	// 	// then
	// 	expect(outputs.shift()).to.be.eql(0);
	// 	expect(outputs.shift()).to.be.eql(1);
	// });

	// it('깊이가 1인 자식 하나씩 추가', function() {
	// 	// given
	// 	inputs = [3, 5, 1];
	// 	inputs.unshift(inputs.length);

	// 	// when
	// 	Solution.solve();

	// 	// then
	// 	expect(outputs.shift()).to.be.eql(0);
	// 	expect(outputs.shift()).to.be.eql(1);
	// 	expect(outputs.shift()).to.be.eql(2);
	// });

	// it('깊이가 1, 2인 자식 하나씩 추가', function() {
	// 	// given
	// 	inputs = [3, 5, 6];
	// 	inputs.unshift(inputs.length);

	// 	// when
	// 	Solution.solve();

	// 	// then
	// 	expect(outputs.shift()).to.be.eql(0);
	// 	expect(outputs.shift()).to.be.eql(1);
	// 	expect(outputs.shift()).to.be.eql(3);
	// });

	describe("삽입", function() {
		it("루트 1개 삽입", function() {
			// when
			solution.insert(2, 0);
			// then
			expect(solution.tree[2]).to.be.eql({height:0, leftChildKey:undefined, rightChildKey:undefined});
		});

		it("루트 + 오른쪽 자식 1개 삽입", function() {
			// when
			var parentKey = 2;
			var key = 5;
			solution.insert(parentKey);
			solution.insert(key, parentKey);
			// then
			expect(solution.tree[parentKey]).to.be.eql({height:0, leftChildKey:undefined, rightChildKey:key});
		});

		it("루트 + 왼쪽 자식 1개 삽입", function() {
			// when
			var parentKey = 2;
			var key = 1;
			solution.insert(parentKey);
			solution.insert(key, parentKey);
			// then
			expect(solution.tree[parentKey]).to.be.eql({height:0, leftChildKey:key, rightChildKey:undefined});
		});

		it("루트 + 오른쪽 자식 3개 삽입", function() {
			// when
			solution.insert(2);
			solution.insert(5, 2);
			solution.insert(7, 5);
			// then
			expect(solution.tree[2]).to.be.eql({height:0, leftChildKey:undefined, rightChildKey:5});
			expect(solution.tree[5]).to.be.eql({height:1, leftChildKey:undefined, rightChildKey:7});
			expect(solution.tree[7]).to.be.eql({height:2, leftChildKey:undefined, rightChildKey:undefined});
		});
	});

	describe("init", function() {
		it("트리 길이 제대로 받기", function() {
			// given
			inputs = [3, 5, 1];
			inputs.unshift(inputs.length);

			// when
			solution.solve();

			// then
			expect(solution.treeLen).to.be.eql(3);
			expect(solution.tree).to.be.an('array');
		});
	});
});
