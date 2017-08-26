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
		items.push(item);
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
		if(split[0] === "header"){
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