var React = require('react');
var ReactDom = require('react-dom');
var ZrupaStore = require('./../stores/ZrupaStore.jsx');
var enums = require('./../../shared/Enums.js');

module.exports = React.createClass({
	getInitialState: function(){
		return {validationResults: ZrupaStore.getValidationsResult()}
	},

	componentDidMount: function(){
		ZrupaStore.onChange(function(validationResults, items){
				this.setState({validationResults: validationResults})
		}.bind(this));
	},

	getErrorText: function(errorCode){
		switch (errorCode){
			case enums.AddErrorCode.DuplicateUrl:
				return "Duplicate Url";
				break;
			case enums.AddErrorCode.InvalidUrl:
				return "Invalid Url Format";
				break;
		}
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
						this.state.validationResults.map(function(item, index){
							if(item.validationResult == enums.AddErrorCode.InvalidUrl){
								return (
								<div>
									<div className="alert alert-danger">
    									<strong>{this.getErrorText(item.validationResult)}!</strong> please check: {item.productUrl} 
  									</div>						
								</div>
								)						
							}
							else
							{
								return (
								<div>
									<div className="alert alert-warning">
    									<strong>{this.getErrorText(item.validationResult)}!</strong> please check: {item.productUrl} 
  									</div>						
								</div>
								)
							}
						}.bind(this))
					}			
				</div>
				)
		}
	}	
})

