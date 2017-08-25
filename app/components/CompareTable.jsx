var React = require('react');
var ReactDom = require('react-dom')
var Header = require('./Header.jsx')


module.exports = React.createClass({
	getInitialState: function(){
        return {"First Col"};
    },

	render: function(){
		console.log("Here");
		return (
				<div className="container">
					<div>{this.state}</div>
					<Header items={this.state}/>				
				</div>
			)
	}	
})