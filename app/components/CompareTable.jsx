var React = require('react');
var ReactDom = require('react-dom')
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
					<div className="row">
						<div className="col-md-9">							
								
									<div className="row">
									{
										this.state.items.map(function(item, index){
											return (
												<div className="col-md-3">
													<div> {item.header}</div>
												</div>																				
											)	
										})
									}	
									</div>		

									<div className="row">
									{
										this.state.items.map(function(item, index){
											return (
												<div className="col-md-3">
													<div> {item.productName}</div>
												</div>																				
											)	
										})	
									}
									</div>							
															
						</div>
						<div className="col-md-3">
								<Button/>
						</div>
					</div>
				</div>

			)
	}	
})

			

