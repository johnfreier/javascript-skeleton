define(
	[
	 	'jquery'
	],
	function($) {
	
		 function JQueryService(jq) {
			 
			 if(jq) $ = jq;

			 this.changeButtonId = function() {
				 $('#nextButton').html('Ok');
			 }
			 
		 }
		 
		 // Define the class methods.
		 JQueryService.prototype = {};
		 
		 // Return the module constructor.
		 return( JQueryService );
		
	}
);
