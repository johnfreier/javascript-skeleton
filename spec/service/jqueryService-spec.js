require(['jquery', 'jsdom', 'service/jqueryService'], function($, jsdom, JQueryService) {
	
	describe('JQueryService Tests', function() {
		
		it('should change the default button name to Ok', function() {
			
			// Create headless DOM model.
			var markup = '<html><body><button id="nextButton">Hello</button></body></html>';
			var myWindow = jsdom.jsdom(markup).parentWindow;
			$ = new $(myWindow);
			
			var jqueryService = new JQueryService($);

			jqueryService.changeButtonId();
			
			expect($("#nextButton").html()).toBe('Ok');
			
		});

		it('Create a new blank headless browser.', function() {
			
			// Create headless DOM model.
			$ = blankPage();
			$('body').append('<button id="nextButton">Hello</button>');
			
			var jqueryService = new JQueryService($);

			jqueryService.changeButtonId();
			
			expect($("#nextButton").html()).toBe('Ok');
			
		});	
	
	});
	
});
