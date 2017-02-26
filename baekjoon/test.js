// inputs = [N, 3, 5, 1, 6, 8, 7, 2, 4]
// outputs = [0, 1, 2, 4, 7, 11, 13, 15]

describe('2957번: 이진 탐색 트리', function() {

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
		var solution;

		beforeEach(function() {
			solution = generateSolution();
		});

		afterEach(function() {
			solution = null;
		});

		it("루트 1개 삽입", function() {
			// when
			solution.insert(2);

			// then
			expect(solution.tree[2].height).to.be.eql(0);
		});

		it("루트 + 오른쪽 자식 1개 삽입", function() {
			// when
			solution.insert(2);
			solution.insert(5, {left:2});

			// then
			expect(solution.tree[2]).to.be.eql({height:0, right:5});
			expect(solution.tree[5]).to.be.eql({height:1, left:2, right:undefined});
		});

		it("루트 + 왼쪽 자식 1개 삽입", function() {
			// when
			solution.insert(2);
			solution.insert(1, {right:2});

			// then
			expect(solution.tree[2]).to.be.eql({height:0, left:1});
			expect(solution.tree[1]).to.be.eql({height:1, left:undefined, right:2});
		});

		it("루트 + 오른쪽 자식 3개 삽입", function() {
			// when
			solution.insert(2);
			solution.insert(5, {left:2});
			solution.insert(7, {left:5});

			// then
			expect(solution.tree[2]).to.be.eql({height:0, right:5});
			expect(solution.tree[5]).to.be.eql({height:1, left:2, right:7});
			expect(solution.tree[7]).to.be.eql({height:2, left:5, right:undefined});
		});
	});

	describe("helpers: 입력, 이웃", function() {
		var inputs;
		var outputs;

		var solution;

		beforeEach(function() {
			inputs = [];
			outputs = [];

			solution = generateSolution({
				getInput: function() {
					var input = inputs.shift();
					return input;
				}, print: function(value) {
					outputs.push(value);
				}
			});
		});

		afterEach(function() {
			inputs = null;
			outputs = null;
			solution = null;
		});

		it("트리 길이 제대로 받기", function() {
			// given
			inputs = [3, 5, 1];
			inputs.unshift(inputs.length);

			// when
			solution.solve();

			// then
			expect(solution.treeLen).to.be.eql(3);
			expect(solution.tree).to.be.an('array');
			expect(solution.tree.length).to.be.eql(3);
		});
	});
});
