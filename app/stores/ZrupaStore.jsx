var dispatcher = require('./../dispatcher.jsx');

function ZrupaStore(){
	var items = [{
		header: "Area",
		productName: "ProductName",
		manufactor: "Manufactor"
	}]

	var listeners = [];

	function getItems(){
		return items;
	}

	function addItem(item){
		// call API to get Data


		// Todo: convert to real thing 		
		items.push({
			header: "1",
			productName: "ProductName1",
			manufactor: "Manufactor1"
	});
		triggerListeners();
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

	return {
		getItems: getItems,
		onChange: onChange
	}
}

module.exports = new ZrupaStore();