var scrape = require('scrape-it');
var _ = require('underscore');
var guid = require('guid');

function ProductManager(){

	var results = [{
				id: guid.raw(),
				productUrl: "ProductLink",
				productName: "ProductName",
				image: "Image",
				warranty_term: "Warranty Term",
				warranty_type: "Warranty Type",
				productContent: [
									{
										content: "Product Content"
									}
								],
				price: "Price",
				currency: "Currency",					
				whatInTheBox: 	[
									{
										content: "What in the Box"
									}
								],
				specs: 	[
							{
								specName: "Specifications",								
							}
						]
			}];

	function getResults(){
		return results;
	}

	function addResult(data){
		results.push(data);
	}

	function deleteResult(url){
		var newResults = _.reject(results, function(item){
				return item.id == url;
			})
		results = newResults;
		return results;
	}

	function scrapProductUrl(productUrls){
			var inputs = _.where(productUrls, {isUrl: true});			
			 var selector = {			 	
				productName: '.prod_header_main .prod_header_title h1',
				image: {
					selector: 'div.productImage',
					attr: 'data-swap-image'
				},
				warranty_term: '.prod_brief .prod-warranty .prod-warranty__term',
				warranty_type: '.prod_brief .prod-warranty .prod-warranty__type',
				productContent: 
					{
						lists: '.prod_details > ul > li',
						content: 'span'
					},
				price: '#special_price_box',
				currency: '#special_currency_box',
				whatInTheBox: 
					{
						lists: 'li.inbox__item', 
						content: 'span'
					},
				specs: 
					{
						lists: '.specification-table tr:not([style*="display: none"])',
						content: 
						{
							selector: 'td',
							specName: 0,
							specDetail: 1
						}
					}
			}
		
			var promises= [];
			_.each(inputs, function(element, index){
				promises.push(
					{ 
						productUrl: element.url,
						promise:	
							scrape(element.url, 
							{ 						
								productName: selector.productName,
							    image: {
							    	selector: selector.image.selector,
							    	attr: selector.image.attr
							    },
							    warranty_type: selector.warranty_type,
							    warranty_term: selector.warranty_term,
							    price: selector.price,
							    currency: selector.currency,
							    productContent: {
							    	listItem: selector.productContent.lists,
							    	data:{
							    		content: {
							    			selector: selector.productContent.content
							    		}
							    	}
							    },
							    productPrice: selector.price,
							    whatInTheBox: {
							    	listItem: selector.whatInTheBox.lists,
							    	data:{
							    		content: {
							    			selector: selector.whatInTheBox.currency
							    		}
							    	}
							    },
							    specs: {
							    	listItem: selector.specs.lists,
							    	data: {
							    		specName: {
							    			selector: 'td',
							    			eq: selector.specs.content.specName,
							    		},
							    		specDetail:
							    		{ 
							    			selector: 'td',
							    			eq: selector.specs.content.specDetail
							    		}
							    	}
							    }
							})	
					}
				);				
			})
			
		return promises;
	}

	return {
		scrapProductUrl: scrapProductUrl,
		getResults: getResults,
		addResult: addResult,
		deleteResult: deleteResult
	}
}

module.exports = new ProductManager();