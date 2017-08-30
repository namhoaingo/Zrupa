var React = require('react');
var ReactDom = require('react-dom')
var ZrupaStore = require('./../stores/ZrupaStore.jsx');
var _ = require("underscore");
var Controllers = require('./Controllers.jsx')


module.exports = React.createClass({
	getInitialState: function(){
		return {
			items: [],
			validationResults: []
		}
	},

	componentDidMount: function(){
    	ZrupaStore.onChange(function(validationResults, items){
    		console.log("onchange");			
			if(validationResults.length == 0){
				this.setState({items:items});	
			}
		}.bind(this))
    },

    renderPleaseEnterUrl: function(){
    	return (
    		<div className="container">
    			<div className="text-center">
    			</div>
    		</div>
    		)
    },    

    renderReady: function(){
    	return (
				<div className='table-responsive'>
				<table >
									<thead>
									<tr>									
									{
										this.state.items.map(function(item, index){
											if(index == 0)
											{
												return (
													<th className="firstColumn">
														<div key={item.id}>
														
														</div>	
													</th>																			
												)		
											}
											else{
												return (
													<th className="contentColumn">
														<div key={item.id}>
															<Controllers itemId={item.id}/>
														</div>
													</th>
												)	
											}											
										}.bind(this))	
									}
									</tr>
									</thead>									
									<tbody>
										<tr>
		                                    {
		                                        this.state.items.map(function(item, index){
		                                            if(index == 0)
		                                            {
		                                                return (
		                                                <td className="firstColumn">
			                                                <div key={item.productUrl}>
			                                                    <div> Link </div>
			                                                </div>
		                                                </td>
		                                                )       
		                                            }
		                                            else{
		                                                return (
		                                                <td className="contentColumn">
			                                                <div key={item.productUrl}>
			                                                    <a href={item.productUrl} target="_blank"> Link </a>
			                                                </div>
		                                                </td>
		                                            )   
		                                            }


		                                        }.bind(this))   
		                                    }
	                                    </tr>

	                                    <tr>
                                    {
                                        this.state.items.map(function(item, index){                                     
                                            if(index==0)
                                                {
                                                    return(
                                                    	<td className="firstColumn">
	                                                        <div key="titleImage">
	                                                            <div>
	                                                                {item.image}
	                                                            </div>
	                                                        </div>
                                                        </td>
                                                        )
                                                }
                                                else
                                                {
                                                    return (
	                                                    <td className="contentColumn">
	                                                        <div  key={'actualImage_'+item.productName}>                                                           
	                                                            <div>                                                             
	                                                                <img src={item.image}/>
	                                                            </div>
	                                                        </div>
                                                        </td>
                                                    )
                                                }                                           
                                        }.bind(this))   
                                    }
                                    </tr>

                                    <tr>
                                    {
                                        this.state.items.map(function(item, index){
                                            return (
                                            	<td className={index==0? 'firstColumn' : 'contentColumn'}>
	                                                <div key={'warranty_term'+item.productName}>
	                                                    <div> {item.warranty_term}</div>
	                                                </div>
                                                </td>
                                            )   
                                        }.bind(this))   
                                    }
                                    </tr>

                                    <tr>
                                    {
                                        this.state.items.map(function(item, index){                                       
                                            return (
                                                <td className={index==0? 'firstColumn' : 'contentColumn'} key={"warranty_type" + item.productName}>
                                                    <div> {item.warranty_type}</div>
                                                </td>                                                                               
                                            )   
                                        }.bind(this))   
                                    }                                    
                                    </tr>

                                     <tr>
                                    {
                                        this.state.items.map(function(item, index){
                                            return (
                                                <td className={index==0? 'firstColumn' : 'contentColumn'} key={"productContent" + item.productName}>                                                   
                                                    {
                                                        item.productContent.map(function(productContentData, index){                                                           
                                                                return (
                                                                    <div key={productContentData.content}>
                                                                        {productContentData.content}
                                                                    </div>
                                                                )
                                                        })                                                       
                                                    }
                                                </td>                                                                               
                                            )   
                                        }.bind(this))   
                                    }
                                    </tr>

                                      <tr>
                                    {
                                        this.state.items.map(function(item, index){
                                            if(index == 0)
                                            {
                                                return (
                                                    <td className="firstColumn" key={"specs" + item.productName}>                                                   
                                                        {
                                                            item.specs.map(function(spec, index){
                                                                return (
                                                                    <div key={item.productName + spec.specName} className="text-bold">
                                                                        {spec.specName}
                                                                    </div>   
                                                                )   
                                                            })                                           
                                                        }
                                                    </td>           
                                                )   
                                            }
                                            else
                                            {
                                                return (
                                                <td className="contentColumn" key={"specs" + item.productName}>                                                   
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
                                                </td>                                                                               
                                                )   
                                            }

                                        })   
                                    }   
                    				</tr>

									</tbody>					
					</table>
				</div>

			)
    },

	render: function(){
		if(_.isEmpty(this.state.items)){
			return this.renderPleaseEnterUrl()
		}		
		else{
			return this.renderReady()
		}

	}	
})

			

