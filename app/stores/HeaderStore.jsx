var dispatcher = require('./../dispatcher.jsx');

function HeaderStore(){
	var items = [{
		text: "Area"
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
		listeners.forEact(function(listener){
			listener(items);
		})
	}

	dispatcher.register(function(event){
		var split = event.type.split(:);
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

module.exports = new HeaderStore();