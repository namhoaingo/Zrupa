var dispatcher = require('./../dispatcher.jsx');
var productApi = require('./../apiHelper/productsAPI.js');

function ZrupaStore(){
	var items = [];

	
 	
	var listeners = [];

	function getItems(){		
		console.log(items);
		return items;
	}

	function addItem(item){
		// call API to get Data
		// Todo: convert to real thing 		
		productApi.post('/api/products', item).then(function(data){
			console.log("client  post product api");
			triggerListeners();
		});

		// items.push({
		// 	header: "1",
		// 	productName: "ProductName1",
		// 	manufactor: "Manufactor1"
		// });
	}

	function onChange(listener){
		listeners.push(listener);
	}

	function triggerListeners(){
		listeners.forEach(function(listener){
			listener(items);
		})
	}

	dispatcher.register(function(event){
		var split = event.type.split(':');
		if(split[0] === "product-url"){
			switch(split[1]){
				case "add":
					addItem(event.payload);
					break;
			}
		}
	})

	productApi.get('/api/products/').then(function(data){		
			 items = data;			 
        	 triggerListeners();
	});
	return {
		getItems: getItems,
		onChange: onChange
	}
}

module.exports = new ZrupaStore();