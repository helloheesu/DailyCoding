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

	describe("문제 풀이", function() {
		it("트리 길이 제대로 받기", function() {
			// given
			inputs = [3, 5, 1];
			inputs.unshift(inputs.length);

			// when
			solution.solve();

			// then
			expect(solution.treeLen).to.be.eql(3);
			expect(solution.tree).to.be.an("array");
			expect(solution.tree.length).to.be.eql(3);
		});

		it("입력 받기", function() {
			// given
			var insertSpy = sinon.spy(solution, "insert");

			inputs = [3, 5, 1];
			inputs.unshift(inputs.length);

			// when
			solution.solve();

			// then
			expect(insertSpy.callCount).to.be.eql(3);
			expect(insertSpy.args[0][0]).to.be.an(3);
			expect(insertSpy.args[1][0]).to.be.an(5);
			expect(insertSpy.args[2][0]).to.be.an(1);
		});
	});

	xdescribe("이웃 키 구하기", function() {
		it("루트 1개만 입력", function() {
			// then
			expect(solution.getNeighborKeys(6)).to.be.eql({left:undefined, right:undefined});
		});

		it("왼쪽 자식 하나 추가", function() {
			// given
			solution.insert(6);

			// then
			expect(solution.getNeighborKeys(1)).to.be.eql({right:6});
		});

		it("이미 넣은 키도 값을 구할 수는 있음", function() {
			// given
			var previous = solution.getNeighborKeys(6); // 구하기

			// when
			solution.insert(6);

			// then
			expect(solution.getNeighborKeys(6)).to.be.eql(previous);
		});

		it("깊이가 1인 자식 하나씩 추가", function() {
			// given
			inputs = [3, 5, 1];
			inputs.unshift(inputs.length);

			// when
			Solution.solve();

			// then
			expect(outputs.shift()).to.be.eql(0);
			expect(outputs.shift()).to.be.eql(1);
			expect(outputs.shift()).to.be.eql(2);
		});

		it("깊이가 1, 2인 자식 하나씩 추가", function() {
			// given
			inputs = [3, 5, 6];
			inputs.unshift(inputs.length);

			// when
			Solution.solve();

			// then
			expect(outputs.shift()).to.be.eql(0);
			expect(outputs.shift()).to.be.eql(1);
			expect(outputs.shift()).to.be.eql(3);
		});

		it("이웃 키 가져오기", function() {
			// given
			solution.insert(6);
			solution.insert(1, {right:6});
			solution.insert(7, {left:6});

			// when
			expect(solution.getNeighborKeys(5)).to.be.eql({left:6, right:7});
		});
	});
});
