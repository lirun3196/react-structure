/**
 *@author LiRun lirun@zbj.com
 * @time 2016/1/5 0005 17:58
 * @abstract common input, it's value can be string | phone
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Text = React.createClass({
    getInitialState: function() {
        return {
            className: 'w60p',
            titleValue: '',
            placeHolder: '2-30字',
            maxLength: 30,
            name: 'key',
            dataType: 'string'
        };
    },
    // verify : string
    // verify : phone
    // verify : empty
    // errorTip : showError
    handleErrorTip: function(value){

    },
    handleTextChange: function(e) {
        this.setState({titleValue: e.target.value});
    },
   render: function(){
       return (
           <div className="form-group">
               <label>填写需求名称：</label>
               <div className="form-inline">
                   <input
                       id="title"
                       type="text"
                       className={this.state.className}
                       value={this.state.titleValue}
                       placeholder={this.state.placeHolder}
                       maxLength={this.state.maxLength}
                       name={this.state.name}
                       onChange={this.handleTextChange}
                       data-type={this.state.dataType}
                       autoComplete="off"
                   />
               </div>
           </div>
       );
   }
});

ReactDOM.render(
    <Text />,
    document.getElementById('structure')
);