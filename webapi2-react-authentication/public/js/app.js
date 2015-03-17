window.React 	= require('react/addons');
var React 		= require('react/addons');
var Panel			= require('react-bootstrap').Panel;

var App = React.createClass({
	render: function() {
		var header = (<h3>Webapi OAuth</h3>);
		return (
			<Panel bsStyle="primary" header={header}>
				Panel Content
			</Panel>
		)
	}
});
 
React.render(<App />, document.body);