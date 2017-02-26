// inputs = [N, 3, 5, 1, 6, 8, 7, 2, 4]
// outputs = [0, 1, 2, 4, 7, 11, 13, 15]

describe("2957번: 이진 탐색 트리", function() {
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

	describe("삽입", function() {
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
			expect(solution.tree[2]).to.be.eql({height:0, left:undefined, right:5});
			expect(solution.tree[5]).to.be.eql({height:1, left:2, right:undefined});
		});

		it("루트 + 왼쪽 자식 1개 삽입", function() {
			// when
			solution.insert(2);
			solution.insert(1, {right:2});

			// then
			expect(solution.tree[2]).to.be.eql({height:0, left:1, right:undefined});
			expect(solution.tree[1]).to.be.eql({height:1, left:undefined, right:2});
		});

		it("루트 + 오른쪽 자식 2개 삽입", function() {
			// when
			solution.insert(2);
			solution.insert(5, {left:2});
			solution.insert(7, {left:5});

			// then
			expect(solution.tree[2]).to.be.eql({height:0, left:undefined, right:5});
			expect(solution.tree[5]).to.be.eql({height:1, left:2, right:7});
			expect(solution.tree[7]).to.be.eql({height:2, left:5, right:undefined});
		});
	});

	describe("이웃 키 구하기", function() {
		beforeEach(function() {
			inputs = [8, 3, 5, 1, 6, 8, 7, 2, 4];
			solution.initTree();
		});

		it("루트 1개만 입력", function() {
			// then
			expect(solution.getNeighborKeys(3)).to.be.eql({left:undefined, right:undefined});
		});

		it("이미 넣은 키는 같게 나옴", function() {
			// given
			var previous = solution.getNeighborKeys(3);

			// when
			solution.insert(3);

			// then
			expect(solution.getNeighborKeys(3)).to.be.eql(previous);
		});

		it("오른쪽 자식 하나 추가", function() {
			// given
			solution.insert(3);

			// then
			expect(solution.getNeighborKeys(5)).to.be.eql({left:3, right:undefined});
		});

		it("왼쪽 오른쪽 이웃 구하기", function() {
			// given
			solution.insert(6);
			solution.insert(8, {left: 6});
			solution.insert(7, {left: 6, right: 8});
			solution.insert(1, {right: 6});

			// then
			expect(solution.getNeighborKeys(5)).to.be.eql({left:1, right:6});
		});
	});

	describe("예시 문제 풀이", function() {
		it("트리 길이 제대로 받기", function() {
			// given
			inputs = [2, 3, 1];
			inputs.unshift(inputs.length);
			var inputLength = inputs.length;

			// when
			solution.solve();

			// then
			expect(solution.treeLen).to.be.eql(inputLength);
			expect(solution.tree).to.be.an("array");
			expect(solution.tree.length).to.be.eql(inputLength);
		});

		it("높이 구하기", function() {
			// given
			inputs = [3, 5, 1, 6, 8, 7, 2, 4];
			inputs.unshift(inputs.length);

			// when
			solution.solve();

			// then
			expect(solution.tree[3].height).to.be.eql(0);
			expect(solution.tree[5].height).to.be.eql(1);
			expect(solution.tree[1].height).to.be.eql(1);
			expect(solution.tree[6].height).to.be.eql(2);
			expect(solution.tree[8].height).to.be.eql(3);
			expect(solution.tree[7].height).to.be.eql(4);
			expect(solution.tree[2].height).to.be.eql(2);
			expect(solution.tree[4].height).to.be.eql(2);
		});
	});
});
