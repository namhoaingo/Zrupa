var validator = require('validator');
var productManagers = require('./productsManager.js');
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
	},

	isDeletable: function(url){
		if (!url)
		{
			return false;
		}
		return _.where(productManagers.getResults(), {id: url}).length > 0
	}
}