var nodeunit = require("nodeunit");

exports['some server test'] = nodeunit.testCase({
	'running it': function(test) {
		test.equal(1, 1);
		test.done();
	},

	'does one part correctly': function(test) {
		test.equal(1, 1);
		test.done();
	}
});
