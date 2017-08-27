var React = require('react');
var ReactDom = require('react-dom');
var ZrupaStore = require('./../stores/ZrupaStore.jsx');

module.exports = React.createClass({
	getInitialState: function(){
		return {validationResults: ZrupaStore.getValidationsResult()}
	},
	componentDidMount: function(){
		ZrupaStore.onChange(function(validationResults, items){
				this.setState({validationResults: validationResults})
		}.bind(this));
	},

	renderEmpty: function(){
		return(
			<div>				
			</div>
			)
	},
	render: function(){
		if(this.state.validationResults.length == 0)
		{
			return this.renderEmpty();
		}
		else
		{
			return (				
				<div>
					{
						this.state.validationResults.map(function(validationResult, index){
						return (
								<div>
									<div>{validationResult.productUrl}</div>
									<div>{validationResult.validationResult}</div>
								</div>
							)
						})
					}
				</div>
				)
		}
	}	
})

