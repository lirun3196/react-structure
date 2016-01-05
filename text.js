/**
 *@author LiRun lirun@zbj.com
 * @time 2016/1/5 0005 17:58
 * @abstract common input, it's can be string | phone
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Text = React.createClass({
   render: function(){
       return (
           <div className="form-group">
               <label>填写需求名称：</label>
               <div className="form-inline">
                   <input  className="w60p" id="title" type="text" placeholder="2-30字" maxlength="30"  name="key" value="{%$key%}" autocomplete="off">
               </div>
           </div>
       );
   }
});

ReactDOM.render(
    document.getElementById('structure')
);