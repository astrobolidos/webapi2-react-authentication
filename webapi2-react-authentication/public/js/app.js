window.React  = require('react/addons');
var React     = require('react/addons');

var MyApp = React.createClass({
    render: function() {
        return (
            <h1>Welcome!</h1>
        )
    }
}); 


React.render(<MyApp />, document.body);