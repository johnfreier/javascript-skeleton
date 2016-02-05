define(
	[
	 	'model/exampleModel'
	],
	function(ExampleModel) {
	
		 function ExampleService() {
			 
			/**
			 * Helper to create an ExampleModel.
			 * @param title
			 * @param body
			 * @return EampleModel
			 */
		 	this.createExampleModel = function(title, body) {

		 		var exampleModel = new ExampleModel();

		 		exampleModel.title(title);
		 		exampleModel.body(body);

		 		return exampleModel;

		 	};

		 }
		 
		 // Define the class methods.
		 ExampleService.prototype = {};
		 
		 // Return the module constructor.
		 return( ExampleService );
		
	}
);
