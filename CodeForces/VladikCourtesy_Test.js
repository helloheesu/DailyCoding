describe("Vladik Courtesy,", function() {
	var formerName = "Vladik";
	var latterName = "Valera";

	describe("checked", function() {
		it("former 0 > former", function() {
			// given
			var inputString = "0 27".split(" ").map(function(x) { return parseInt(x); });;

			// when
			var winner = getWinner(inputString[0], inputString[1]);

			// then
			expect(winner).to.be.eql(formerName);
		});
		it("former 0 > former", function() {
			// given
			var inputString = "0 0".split(" ").map(function(x) { return parseInt(x); });;

			// when
			var winner = getWinner(inputString[0], inputString[1]);

			// then
			expect(winner).to.be.eql(formerName);
		});
		it("former not 0 && latter 0 > latter", function() {
			// given
			var inputString = "27 0".split(" ").map(function(x) { return parseInt(x); });;

			// when
			var winner = getWinner(inputString[0], inputString[1]);

			// then
			expect(winner).to.be.eql(latterName);
		});
		it("Same > latter", function() {
			// given
			var inputString = "1 1".split(" ").map(function(x) { return parseInt(x); });;

			// when
			var winner = getWinner(inputString[0], inputString[1]);

			// then
			expect(winner).to.be.eql(latterName);
		});
		it("Same > latter", function() {
			// given
			var inputString = "27 27".split(" ").map(function(x) { return parseInt(x); });;

			// when
			var winner = getWinner(inputString[0], inputString[1]);

			// then
			expect(winner).to.be.eql(latterName);
		});
		it("7 6 > former", function() {
			// given
			var inputString = "7 6".split(" ").map(function(x) { return parseInt(x); });;

			// when
			var winner = getWinner(inputString[0], inputString[1]);

			// then
			expect(winner).to.be.eql(formerName);
		});
		it("400 421 > former", function() {
			// given
			var inputString = "400 421".split(" ").map(function(x) { return parseInt(x); });;

			// when
			var winner = getWinner(inputString[0], inputString[1]);

			// then
			expect(winner).to.be.eql(formerName);
		});
	});

	describe("border test", function() {
		describe("former right before > former", function() {
			it("latter right before > former", function() {
				// given
				var inputString = "323 341".split(" ").map(function(x) { return parseInt(x); });;

				// when
				var winner = getWinner(inputString[0], inputString[1]);

				// then
				expect(winner).to.be.eql(formerName);
			});
			it("latter right at > former", function() {
				// given
				var inputString = "323 342".split(" ").map(function(x) { return parseInt(x); });;

				// when
				var winner = getWinner(inputString[0], inputString[1]);

				// then
				expect(winner).to.be.eql(formerName);
			});
			it("latter right after > former", function() {
				// given
				var inputString = "323 343".split(" ").map(function(x) { return parseInt(x); });;

				// when
				var winner = getWinner(inputString[0], inputString[1]);

				// then
				expect(winner).to.be.eql(formerName);
			});
		});

		describe("former right at > depends", function() {
			it("latter right before > latter", function() {
				// given
				var inputString = "324 341".split(" ").map(function(x) { return parseInt(x); });;

				// when
				var winner = getWinner(inputString[0], inputString[1]);

				// then
				expect(winner).to.be.eql(latterName);
			});
			it("latter right at > former", function() {
				// given
				var inputString = "324 342".split(" ").map(function(x) { return parseInt(x); });;

				// when
				var winner = getWinner(inputString[0], inputString[1]);

				// then
				expect(winner).to.be.eql(formerName);
			});
			it("latter right after > former", function() {
				// given
				var inputString = "324 343".split(" ").map(function(x) { return parseInt(x); });;

				// when
				var winner = getWinner(inputString[0], inputString[1]);

				// then
				expect(winner).to.be.eql(formerName);
			});
		});

		describe("former right after > depends", function() {
			it("latter right before > latter", function() {
				// given
				var inputString = "325 341".split(" ").map(function(x) { return parseInt(x); });;

				// when
				var winner = getWinner(inputString[0], inputString[1]);

				// then
				expect(winner).to.be.eql(latterName);
			});
			it("latter right at > former", function() {
				// given
				var inputString = "325 342".split(" ").map(function(x) { return parseInt(x); });;

				// when
				var winner = getWinner(inputString[0], inputString[1]);

				// then
				expect(winner).to.be.eql(formerName);
			});
			it("latter right after > former", function() {
				// given
				var inputString = "325 343".split(" ").map(function(x) { return parseInt(x); });;

				// when
				var winner = getWinner(inputString[0], inputString[1]);

				// then
				expect(winner).to.be.eql(formerName);
			});
		});
	});
});
