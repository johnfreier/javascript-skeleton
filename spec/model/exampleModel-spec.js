require(['scripts/model/exampleModel.js'], function(ExampleModel) {
	
	describe('Example Model Tests should work with Knockout requirements.', function() {
		
		it('should default to post 1', function() {
			
			var model = new ExampleModel();
			
			expect(model.id()).toBe(1);
			expect(model.getPost()).toBe('http://jsonplaceholder.typicode.com/posts/1');
			
		});
		
		it('should increment the id by 1', function() {
			
			var model = new ExampleModel();
			
			spyOn(model, 'retreivePost');
			
			expect(model.id()).toBe(1);
			
			model.getNextPost();
			
			expect(model.id()).toBe(2);
			expect(model.retreivePost).toHaveBeenCalled();
			
		});
		
	
	});
	
});

