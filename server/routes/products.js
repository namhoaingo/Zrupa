var productsManager = require('./../managers/productsManager.js');
var productsManagerValidation = require('./../managers/productsManagerValidation.js');
var _ = require('underscore');

module.exports = function(express){	
	var productsRoute = express.Router();

	var results = [{
				productUrl: "ProductLink",
				productName: "ProductName",
				image: "Image",
				warranty_term: "Warranty Term",
				warranty_type: "Warranty Type",
				productContent: [
									{
										content: "Product Content"
									}
								],
				price: "Price",
				whatInTheBox: 	[
									{
										content: "What in the Box"
									}
								],
				specs: 	[
							{
								specName: "Specifications",								
							}
						]
			}];
	productsRoute.get('/', function(req, res){
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
			console.log("badUrls")
			console.log(badUrls)
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
					data.productUrl = item.productUrl
					results.push(data);
					console.log(results);
					if(promises.length == count)
					{
						res.status(200).send(results);
					}
				})
			})			
		}		
	});

	return productsRoute;
}