
var React = require('react/addons');

var MyApp = React.createClass({
    render: function() {
        return <h1>Ok</h1>;
    }
}); 


React.render(<MyApp />, document.getElementById('example'));