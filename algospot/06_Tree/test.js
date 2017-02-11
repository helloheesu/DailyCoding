/* TODO
 *
**/

describe('describe', function() {
	var spinbox;
	beforeEach(function() {
		spinbox = new Spinbox();
	});
	afterEach(function() {
		spinbox.destroy();
		spinbox = null;
	});

	it('it', function() {
		// given
		// when
		// then
		expect(spinbox.value).be.eql(200);
	});
});
