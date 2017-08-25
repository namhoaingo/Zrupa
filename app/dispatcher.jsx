var guid = require('guid');
var listeners = {};

module.exports = {
	register: function(callback){
		var id = guid.raw();
		listeners[id] = callback;
		return id;
	},

	dispatch: function(payload){
		console.log('Dispatching ..'+ payload);
		// dispatch to all the store
		// onyl the store which have logic will pick up
		for(var id in listeners){
			listeners[id](payload);
		}
	}

}