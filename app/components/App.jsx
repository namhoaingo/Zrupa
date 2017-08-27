var React = require('react');
var ReactDom = require('react-dom');
var Header = require('./Header.jsx');
var CompareTable = require('./CompareTable.jsx');
var ValidationResult = require('./ValidationResult.jsx');

module.exports = React.createClass({	
	render: function(){
		return (
				<div className="container-fluid">					
					<Header/>
					<ValidationResult/>
					<CompareTable/>
				</div>
			)
	}	
})

