describe('2957번: 이진 탐색 트리', function() {
	var inputs;
	var outputs;
	var getInput;
	var print;

	beforeEach(function() {
		getInput = sinon.stub(Solution, "getInput", function() {
			var input = inputs.shift();
			return input;
		});
		print = sinon.stub(Solution, "print", function(value) {
			var output = outputs.shift();
			expect(value).to.be.eql(output);
		});
	});

	afterEach(function() {
		inputs = [];
		outputs = [];

		Solution.getInput.restore();
		Solution.print.restore();
	});

	it('노드가 1개만 들어가면 출력은 0이어야 한다.', function() {
		// given
		inputs = [1, 3];
		outputs = [0];


		// when

		// then
		Solution.solve();
	});
	it('노드가 2개만 들어가면 출력은 01이어야 한다.', function() {
		// given
		inputs = [2, 3, 5];
		outputs = [0, 1];


		// when

		// then
		Solution.solve();
	});
});
