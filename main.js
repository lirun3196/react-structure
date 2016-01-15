/**
 *@author LiRun lirun@zbj.com
 * @time 2016/1/5 0005 17:53
 * @abstract
 */

var React = require('react');
var ReactDOM = require('react-dom');
var Text = require('text');

var Form = React.createClass({
    render: function() {
        return (
            <div className="formBox">
                Hello, world! I am a CommentBox.
                <Text />
            </div>
        );
    }
});
ReactDOM.render(
    <Form />,
    document.getElementById('content')
);