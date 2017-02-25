// inputs = [N, 3, 5, 1, 6, 8, 7, 2, 4]
// outputs = [0, 1, 2, 4, 7, 11, 13, 15]

describe('2957번: 이진 탐색 트리', function() {
	var inputs;
	var outputs;

	beforeEach(function() {
		inputs = [];
		outputs = [];

		sinon.stub(Solution, "getInput", function() {
			var input = inputs.shift();
			return input;
		});
		sinon.stub(Solution, "print", function(value) {
			outputs.push(value);
		});
	});

	afterEach(function() {
		Solution.reset();
		Solution.getInput.restore();
		Solution.print.restore();
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

	it("루트 1개 삽입", function() {
		// when
		Solution.insert(2, 0);
		// then
		expect(Solution.tree[2]).to.be.eql({height:0, leftChildKey:undefined, rightChildKey:undefined});
	});
});
