cordova.define("com.gaoxiaobang.keyborad.MKeyboardPlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var KeyboardPlugin = function(){};

var exec = require('cordova/exec');

KeyboardPlugin.prototype.mCreateClass = function(data){

    exec(null,null,"MKeyboardPlugin","createClass",[data]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.MKeyboardPlugin){
    window.plugins.MKeyboardPlugin = new KeyboardPlugin();
}

module.exports = new MKeyboardPlugin();




});
