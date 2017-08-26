var React = require('react');
var ReactDom = require('react-dom')
var Header = require('./Header.jsx')
var Button = require('./Button.jsx')
var HeaderStore = require('./../stores/HeaderStore.jsx')
var ProductNameStore = require('./../stores/ProductNameStore.jsx')

module.exports = React.createClass({
	getInitialState: function(){
		var state = HeaderStore.getItems();
		return {items: state};
	},

	componentDidMount: function(){
    	HeaderStore.onChange(function(items){
			this.setState({item:HeaderStore.getItems()});
		}.bind(this))

		ProductNameStore.onChange(function(items){
			this.setState({item:ProductNameStore.getItems()});
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
										return (<Header item={item}/>)
									})								
								}
							</div>
						</div>
						<Button />
					</div>					
				</div>									
			)
	}	
})

			

