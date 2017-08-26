module.exports = function(express){	
	var productsRoute = express.Router();
	var items = [{
		header: "Area",
		productName: "ProductName",
		manufactor: "Manufactor"
	}]

	productsRoute.get('/', function(req, res){
		res.send(items);
	});

	return productsRoute;
}