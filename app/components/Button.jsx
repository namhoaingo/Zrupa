var React = require('react');
var ReactDom = require('react-dom');
var action = require('./../actions/HeaderAction.jsx');


module.exports = React.createClass({	
	getInitialState:function(){
        return {input:""};
    },
	handleInput: function(e){
		this.setState({input: e.target.value})
	},

	addItem: function(e){
		e.preventDefault();
		action.add({text: this.state.input});
		this.setState({input:''})
	},

	render: function(){
		return (
				<div className ='col-md-3'>
					<form onSubmit={this.addItem}>
					<input value={this.state.input} onChange={this.handleInput}/>
					<button> Add Item </button>
			</form>
				</div>
			)
	}	
})

