/**
 * Parse the end of a url and grab the id of an object.
 * Example: http://localhost/org/10302 returns 10302
 */
function parseURLForId(url) {
	return url.substring(url.lastIndexOf("/") + 1, url.length);
}



/**
 * This is just an example class for demo.
 */
var exampleClass = {

		exampleMethodGetId: function(url) {
			return parseURLForId(url);
		}
		
};

