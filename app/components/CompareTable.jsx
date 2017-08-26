var React = require('react');
var ReactDom = require('react-dom')
var Header = require('./Header.jsx')
var Button = require('./Button.jsx')
var ZrupaStore = require('./../stores/ZrupaStore.jsx')


module.exports = React.createClass({
	getInitialState: function(){
		var state = ZrupaStore.getItems();
		return {items: state};
	},
	
	componentDidMount: function(){
    	ZrupaStore.onChange(function(items){
			this.setState({item:ZrupaStore.getItems()});
		}.bind(this))
    },

	render: function(){
		console.log("Here");
		return (
				<div className="container">
					<Header items={this.state.items}/>	
					<Button/>
				</div>

			)
	}	
})

			

