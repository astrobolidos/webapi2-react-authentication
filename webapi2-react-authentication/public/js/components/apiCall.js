var React 		= require('react/addons');
var Bootstrap = require('react-bootstrap');
var Input			= Bootstrap.Input;
var Button		= Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;
var Well			= Bootstrap.Well;

var ApiCall = React.createClass({
	getInitialState: function() {
		return { message: 'api not called.' }
	},
	handleClick: function() {
		this.setState({message:"calling..." });

		var apiCall = this;
		$.get("api/values", function(data) {
			apiCall.setState({message: data})
		}).fail(function(err){ 
			apiCall.setState({message:err.responseText});
		});		
	},
	render: function() {
		return (
			<div>
				<h4>Api Calls</h4>
				<Well>
					<Button onClick={this.handleClick}>
							<Glyphicon glyph="play"/>
							&nbsp; api/values
					</Button>
					<hr/>
					{this.state.message}
				</Well>
			</div>
		)
	}
});

module.exports = ApiCall;