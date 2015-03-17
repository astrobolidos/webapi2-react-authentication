window.React 	= require('react/addons');
var React 		= require('react/addons');
var Bootstrap = require('react-bootstrap');
var Panel			= Bootstrap.Panel;
var Login			= require('./components/login');
var Well 			= Bootstrap.Well;

var App = React.createClass({
	render: function() {
		var header = (<h3>Webapi OAuth</h3>);
		return (
			<Panel bsStyle="primary" header={header}>
					<Login />
					<h4>Api Calls</h4>
					<Well>Look Im in a well!</Well>
			</Panel>
		)
	}
});
 
React.render(<App />, document.body);