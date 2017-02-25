describe('Hello,', function() {
	var inputs;
	var outputs;
	var getInput;
	var print;

	beforeEach(function() {
		getInput = sinon.stub(Solution, "getInput", function() {
			return inputs.pop();
		});
		print = sinon.stub(Solution, "print", function(value) {
			expect(value).to.be.eql(outputs.pop());
		});
	});

	afterEach(function() {
		inputs = [];
		outputs = [];

		Solution.getInput.restore();
		Solution.print.restore();
	});

	it('World!', function() {
		// given
		inputs = [8, 3];
		outputs = [0];


		// when

		// then
		Solution.solve();
	});
});
