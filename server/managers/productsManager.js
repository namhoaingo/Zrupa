var scrape = require('scrape-it');
var _ = require('underscore');

module.exports = {
	scrapProductUrl: function(productUrls){
			var inputs = _.where(productUrls, {isUrl: true});
			//var inputs = ['http://www.lazada.sg/apple-iphone-7-plus-128gb-jet-black-8629928.html','http://www.lazada.sg/samsung-galaxy-s8-64gb-midnight-black-18155589.html']
			 var selector = {			 	
				productName: '.prod_header_main .prod_header_title h1',
				image: {
					selector: 'img.itm-img',
					attr: 'src'
				},
				warranty_term: '.prod_brief .prod-warranty .prod-warranty__term',
				warranty_type: '.prod_brief .prod-warranty .prod-warranty__type',
				productContent: 
					{
						lists: '.prod_details > ul > li',
						content: 'span'
					},
				price: '#special_price_box',
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
					scrape(element.url, 
					{ 						
						productName: selector.productName,
					    image: {
					    	selector: selector.image.selector,
					    	attr: selector.image.attr
					    },
					    warranty_type: selector.warranty_type,
					    warranty_term: selector.warranty_term,
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
					    			selector: selector.whatInTheBox.content
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
				);				
			})
			
				return promises;
	}
}