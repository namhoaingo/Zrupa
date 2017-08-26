var productManager = require('./../productManager.js');

module.exports = function(express){	
	var productsRoute = express.Router();
	var items = [{
		header: "Area",
		productName: "ProductName",
		manufactor: "Manufactor"
	}]

	productsRoute.get('/', function(req, res){
		console.log("product api");
		res.send(items);
	});

	productsRoute.post('/', function(req, res){
		productManager.scrapProductUrl(req.body);
		res.status(204).send();
	});

	return productsRoute;
}