define(
	[
	 	/* No dependencies */
	 	'knockout'
	],
	function(ko) {
	
		 function ExampleModel() {
			 //...
			 this.urlContext = 'http://jsonplaceholder.typicode.com/posts/';
			 
			 /*
				Example Response
				{
				  "userId": 1,
				  "id": 1,
				  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
				}
			  */

			 this.id = ko.observable(1);
			 this.title = ko.observable();
			 this.body = ko.observable();
			 
			 this.getPost = function() {
				return this.urlContext + this.id();
			 };
			 
			 this.retreivePost = function() {
				 // Override with jQuery.
			 }
			 
			 this.getNextPost = function() {
		    	this.id(parseInt(this.id()) + 1);
		    	this.retreivePost();
		    };
			 
			 
		 }
		 
		 // Define the class methods.
		 
		 ExampleModel.prototype = {};

		 
		 // Return the module constructor.
		 return( ExampleModel );
		
	}
);
