var React = require('react');
var ReactDom = require('react-dom');

module.exports = React.createClass({	
	render: function(){
		return (
				<div className='col-md-3'>			
					<div>
						{this.props.item.text}
					</div>
				</div>				
			)
	}	
})