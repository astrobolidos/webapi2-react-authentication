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
		ajaxApiCall(this);
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

var ajaxApiCall = function(component) {
		$.ajax({
			url: "api/values",
			type: 'GET',
			beforeSend: function(xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.token);
			},
			success: function(data) {
				component.setState({message: data});
			},
			error: function(err) {
				component.setState({message:err.responseText});
			}
		});		
}

module.exports = ApiCall;