describe('Class tests, read a javascript file and include it for testing.', function() {
	
	// Load class that is not a require.js class.
	eval(require('fs').readFileSync('scripts/classes/exampleClass.js', 'utf8'));
	
	it('should be the first test', function() {
	
		var resultId = exampleClass.exampleMethodGetId('/example/post/1');
		
		expect(resultId).toBe('1');
		
	});
	
	
});
