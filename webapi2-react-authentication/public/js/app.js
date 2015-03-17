window.React 	= require('react/addons');
var React 		= require('react/addons');
var Bootstrap = require('react-bootstrap');
var Panel			= Bootstrap.Panel;
var Login			= require('./components/login');
var ApiCall		= require('./components/apiCall');

var App = React.createClass({
	render: function() {
		var header = (<h3>Webapi OAuth</h3>);
		return (
			<Panel bsStyle="primary" header={header}>
					<Login />
					<ApiCall />
			</Panel>
		)
	}
});
 
React.render(<App />, document.body);