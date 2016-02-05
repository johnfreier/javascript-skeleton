require(['service/exampleService'], function(ExampleService) {
	
	describe('ExampleService Tests', function() {
		
		it('should create a populated ExampleModel.', function() {
			
			var exampleService = new ExampleService();

			var exampleModel = exampleService.createExampleModel('example title', 'example body');
			
			expect(exampleModel.title()).toBe('example title');
			expect(exampleModel.body()).toBe('example body');
			
		});

	});
	
});
