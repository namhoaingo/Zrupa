var React = require('react');
var ReactDom = require('react-dom');

module.exports = React.createClass({	
	render: function(){
		return (
				<div className="col-md-3">
					{						
						this.props.items.map(function(item, index)
						{
							return (
								<div>
									{item.text}
								</div>
								)
						})
					}
				</div>
			)
	}	
})

