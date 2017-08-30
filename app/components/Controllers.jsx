var React = require('react');
var ReactDom = require('react-dom');
var action = require('./../actions/ZrupaAction.jsx');

module.exports = React.createClass({
	deleteItem :function(){
		action.delete({itemId: this.props.itemId});
	},

	render: function(){
		return (
				<div onClick={this.deleteItem}>					
					<i className="fa fa-trash-o" aria-hidden="true"></i>
				</div>
			)
		}	
})

