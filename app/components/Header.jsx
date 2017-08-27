var React = require('react');
var ReactDom = require('react-dom');
var Search = require('./Search.jsx')

module.exports = React.createClass({	
	render: function(){
		return (
				<div>
					<div className='jumbotron text-center'>
						<h1>ZrupaStore</h1>
					</div>
					<div className="row">
							<div className="col-md-10 col-md-offset-1">
								<Search/>
						</div>	
					</div>
				</div>
			)
	}	
})

