var dispatcher = require('./../dispatcher.jsx');

module.exports = {
	add: function(item){
		dispatcher.dispatch({
			payload: item,
			type:"product-url:add"
		})
	},
	delete: function(itemId){
		dispatcher.dispatch({
			payload: itemId,
			type:"product-url:delete"
		})
	}
}