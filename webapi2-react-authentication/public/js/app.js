window.React = require('react/addons');

var React = require('react/addons');

var App = React.createClass({
	render: function() {
		return <h1>welcome!</h1>
	}
});

React.render(<App/>,document.body);