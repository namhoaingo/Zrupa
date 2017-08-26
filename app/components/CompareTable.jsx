var React = require('react');
var ReactDom = require('react-dom')
var Button = require('./Button.jsx')
var ZrupaStore = require('./../stores/ZrupaStore.jsx')


module.exports = React.createClass({
	getInitialState: function(){
		//var state = ZrupaStore.getItems();

		return {
			items: [
						{
							header: "Area",
							productName: "ProductName",
							manufactor: "Manufactor"
						}
					]
				};
	},
	
	componentDidMount: function(){
    	ZrupaStore.onChange(function(items){
    		console.log("onchange");
			this.setState({items:ZrupaStore.getItems()});
		}.bind(this))
    },

	render: function(){
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

									<div className="row">
									{
										this.state.items.map(function(item, index){
											return (
												<div className="col-md-3">
													<div> {item.image}</div>
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
													<div> {item.warranty_term}</div>
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
													<div> {item.warranty_type}</div>
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
													<div> {item.productContent}</div>
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
													<div> {item.price}</div>
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
													<div> {item.whatInTheBox}</div>
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
													<div> {item.specs}</div>
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

			

