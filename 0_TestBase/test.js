describe('Hello,', function() {
	var fixture;
	var value = [3];

	beforeEach(function() {
		fixture = new Impl(value);
	});

	afterEach(function() {
		fixture = null;
	});

	it('World!', function() {
		// given

		// when

		// then
		expect(fixture instanceof Impl).to.be.true;
		expect(fixture.value).to.be.eql(value);
		expect(fixture.value).to.be.an('array');
	});
});
