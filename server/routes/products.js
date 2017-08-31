var productsManager = require('./../managers/productsManager.js');
var productsManagerValidation = require('./../managers/productsManagerValidation.js');
var enums = require('./../../shared/Enums.js');
var _ = require('underscore');
var guid = require('guid');


module.exports = function(express){	
	var productsRoute = express.Router();

	productsRoute.get('/', function(req, res){
		var results = productsManager.getResults();
		if(results.length > 1)
		{
			res.send(results);
		}
		else
		{
			res.send();
		}
	});

	productsRoute.post('/', function(req, res){
		// validation result
		var validationResults = productsManagerValidation.validateUrls(req.body.text);
		var badUrls = _.where(validationResults, {isUrl: false});
		
		if( badUrls.length > 0){
			res.status(400).send(badUrls);
		}
		else
		{
			var promises = productsManager.scrapProductUrl(validationResults);					
			var count = 0;
			_.each(promises, function(item){				
				item.promise.then(function(data)
				{
					count = count + 1;
					data.id = guid.raw()
					data.productUrl = item.productUrl
					productsManager.addResult(data);
					if(promises.length == count)
					{
						res.status(200).send(productsManager.getResults());
					}
				})
			})			
		}		
	});

	productsRoute.delete('/:id', function(req, res){
		var requestId = req.params.id;
		// check to see if the ID is in the list
		if(productsManagerValidation.isDeletable(requestId)){
			productsManager.deleteResult(requestId);
			res.status(200).send();
		}
		else{
			res.status(404).send(enums.DeleteErrorCode.InvalidUrl)
		}
	})

	return productsRoute;
}