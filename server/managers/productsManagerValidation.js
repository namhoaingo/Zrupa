var validator = require('validator');
var _ = require('underscore');

module.exports = {
	validateUrls: function(inputString){
		// Split the string for different url
		var validationResults = [];
		var urls = inputString.toString().split(",");

		_.each(urls, function(item, index){
			validationResults.push({
				url: item,
				isUrl: validator.isURL(item)
			})
		})

		return validationResults; 
	}
}