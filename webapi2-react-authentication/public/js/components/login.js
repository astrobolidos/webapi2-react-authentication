var React 		= require('react/addons');
var Bootstrap = require('react-bootstrap');
var Input			= Bootstrap.Input;
var Button		= Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;

var Login = React.createClass({
	getInitialState: function() {
		return { message: '', isLoading: false, buttonText: ' Sign In', buttonStyle: 'default' }
	},
	handleClick: function(e) {
		this.setState({isLoading: true, buttonText: ' Signing'});

		var info = "grant_type=password";
		info += "&username=" + this.refs.username.getValue();
		info +=	"&password=" + this.refs.password.getValue();

		var login = this;
		$.post("Token", info, function(data) {
			login.setState({isLoading: false, buttonText: ' Signed', buttonStyle: 'success'})
  		sessionStorage.token = data.access_token;
		}).fail(function(err){ 
			login.setState({message:err.responseText});
		});
	},
	render: function() {
		var isLoading = this.state.isLoading
		return (
			<div className="row">
				<div className="col-lg-5 col-md-5"> 
					<Input ref="username" type="text" label='UserName' placeholder="Enter your user name." />
				</div>
				<div className="col-lg-5 col-md-5"> 
					<Input ref="password" type="password" label='Password' placeholder="Enter your password."  />
				</div>
				<Button className="fixedButton"
					bsStyle={this.state.buttonStyle}
					disabled={isLoading}
					onClick={!isLoading ? this.handleClick : null}>
						<Glyphicon glyph="off" />
						{this.state.buttonText}
				</Button>
				<div className="row">
					{this.state.message}
				</div>
			</div>	

		)	
	}
});

module.exports = Login;