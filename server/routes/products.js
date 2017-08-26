var productManager = require('./../productManager.js');

module.exports = function(express){	
	var productsRoute = express.Router();

	var results = [{
				header: "Area",
				productName: "ProductName",
				image: "Image",
				warranty_term: "Warranty Term",
				warranty_type: "Warranty Type",
				productContent: ["Product Content"],
				price: "Price",
				whatInTheBox: ["What in the Box"],
				specs: ["Specifications"]
			}];
	productsRoute.get('/', function(req, res){
		console.log("product api");
		res.send(results);
	});

	productsRoute.post('/', function(req, res){
		var promises = productManager.scrapProductUrl(req.body);
		
		Promise.all(promises).then(function(data){
			console.log(data);			
			console.log("------------------------------------");
			results = results.concat(data);
			console.log(results);
			res.status(200).send(results);
		})		
	});

	return productsRoute;
}