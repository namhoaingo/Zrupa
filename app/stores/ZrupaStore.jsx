var dispatcher = require('./../dispatcher.jsx');
var productApi = require('./../apiHelper/productsAPI.js');
var _ = require("underscore");
var validator = require("validator");

function ZrupaStore(){
	var items = {}; 	
	var validationResults = [];

	var listeners = [];

	function getItems(){
		return items;
	}

	function getValidationsResult(){
		return validationResults;
	}

	function validate(textUrl){	
		var productsUrls = textUrl.text.split(",");
		// clear out for a new validation
		validationResults = [];
		_.each(productsUrls, function(url){
			if(!validator.isURL(url))
			{
				validationResults.push({
					productUrl: url,
					validationResult: "Invalid URL"
				})
			}

			if(_.find(items, function(item){ return item.productUrl == url}))
			{
				validationResults.push({
					productUrl: url,
					validationResult: "Duplicate URL"
				})
			}
		})

		if(validationResults.length > 0)
		{
			triggerListeners();	
		}
		else
		{
			addItem(textUrl);
		}

	}


	function addItem(item){
		// call API to get Data
		// Todo: convert to real thing 		
		productApi.post('/api/products', item).then(function(data){			
			items = data;
			triggerListeners();
		});
	}

	function deleteItem(deleteItem){
		// call API to get Data
		// Todo: convert to real thing 		
		productApi.delete('/api/products', deleteItem.itemId).then(function(data){
			items = _.reject(items, function(item){
				return item.id == deleteItem.itemId;
			})
			triggerListeners();
		});
	}

	function onChange(listener){
		listeners.push(listener);
	}

	function triggerListeners(){
		listeners.forEach(function(listener){
			listener(validationResults, items);
		})

	}

	dispatcher.register(function(event){
		var split = event.type.split(':');
		if(split[0] === "product-url"){
			switch(split[1]){
				case "add":
					validate(event.payload);
					break;
				case "delete":
					deleteItem(event.payload);
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
		onChange: onChange,
		deleteItem: deleteItem,
		getValidationsResult: getValidationsResult,
		items: items
	}
}

module.exports = new ZrupaStore();