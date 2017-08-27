var React = require('react');
var ReactDom = require('react-dom')
var ZrupaStore = require('./../stores/ZrupaStore.jsx');
var _ = require("underscore");


module.exports = React.createClass({
	getInitialState: function(){
		return {
			items: null
		}
	},

	componentDidMount: function(){
    	ZrupaStore.onChange(function(items){
    		console.log("onchange");
			this.setState({items:items});
		}.bind(this))
    },

    getColumnWidth: function(index){
    	return index==0 ? 'col-md-2 text-bold': 'col-md-4';
    },

    renderEmpty: function(){
    	return (
    		<div className="container">
    			<div className="text-center">
    			Please Enter Url 
    			</div>
    		</div>
    		)
    },    

    renderReady: function(){
    	return (
				<div className="container">					
					<div className="row">
						<div className="col-md-12">			
									<div className="row">
									{
										this.state.items.map(function(item, index){
											var columnCss = this.getColumnWidth(index);
											if(index == 0)
											{
												return (
												<div className={columnCss} key={item.productUrl}>
													<div> Link </div>
												</div>																				
												)		
											}
											else{
												return (
												<div className={columnCss} key={item.productUrl}>
													<a href={item.productUrl} target="_blank"> Link </a>
												</div>																				
											)	
											}

											
										}.bind(this))	
									}
									</div>

									<div className="row">
									{
										this.state.items.map(function(item, index){
											var columnCss = this.getColumnWidth(index);
											return (
												<div className={columnCss} key={item.productName}>
													<div> {item.productName}</div>
												</div>																				
											)	
										}.bind(this))	
									}
									</div>

									<div className="row">
									{
										this.state.items.map(function(item, index){
											var columnCss = this.getColumnWidth(index);
											return (
												<div className={columnCss} key={item.image}>
													<div> 
													<image src={item.image}/>
													</div>
												</div>																				
											)	
										}.bind(this))	
									}
									</div>

									<div className="row">
									{
										this.state.items.map(function(item, index){
											var columnCss = this.getColumnWidth(index);
											return (
												<div className={columnCss} key={'warranty_term'+item.productName}>
													<div> {item.warranty_term}</div>
												</div>																				
											)	
										}.bind(this))	
									}
									</div>
									<div className="row">
									{
										this.state.items.map(function(item, index){
											var columnCss = this.getColumnWidth(index);
											return (
												<div className={columnCss} key={"warranty_type" + item.productName}>
													<div> {item.warranty_type}</div>
												</div>																				
											)	
										}.bind(this))	
									}
									</div>

									<div className="row">
									{
										this.state.items.map(function(item, index){
											var columnCss = this.getColumnWidth(index);
											return (
												<div className={columnCss} key={"productContent" + item.productName}>													
													{ 
														item.productContent.map(function(productContentData, index){															
																return (
																	<div key={productContentData.content}> 
																		{productContentData.content}
																	</div>
																)
														})														
													}
												</div>																				
											)	
										}.bind(this))	
									}
									</div>

									<div className="row">
									{
										this.state.items.map(function(item, index){
											if(index == 0)
											{
												return (
													<div className="col-md-2" key={"specs" + item.productName}>													
														{ 
															item.specs.map(function(spec, index){
																return (
																	<div key={item.productName + spec.specName} className="text-bold"> 
																		{spec.specName}
																	</div>	
																)	
															})											
														}
													</div>			
												)	
											}
											else
											{
												return (
												<div className="col-md-4" key={"specs" + item.productName}>													
													{ 
														item.specs.map(function(spec, index){
															
																return (
																	<div className="row">
																		<div className="col-md-4 text-underline" key={item.productName + spec.specName}> 
																			{spec.specName}
																		</div>
																		<div className="col-md-8" key={item.productName + spec.specDetail}> 
																			{spec.specDetail}
																		</div>
																	</div>
																)
														})														
													}
												</div>																				
												)	
											}

										})	
									}
									</div>
						</div>						
					</div>
				</div>

			)
    },

	render: function(){
		if(_.isEmpty(this.state.items)){
			return this.renderEmpty()
		}
		else{
			return this.renderReady()
		}

	}	
})

			

