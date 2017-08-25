var React = require('react');
var ReactDom = require('react-dom')
var Header = require('./Header.jsx')
var Button = require('./Button.jsx')
var HeaderStore = require('./../stores/HeaderStore.jsx')


module.exports = React.createClass({
	getInitialState: function(){
		var state = HeaderStore.getItems();
		return {items: state};
	},
	
	componentDidMount: function(){
    	HeaderStore.onChange(function(items){
			this.setState({item:HeaderStore.getItems()});
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

			

