cordova.define("com.gaoxiaobang.keyboards.MKeyboardsPlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var MKeyboardsPlugin = function(){};

var exec = require('cordova/exec');

MKeyboardsPlugin.prototype.mCreateClass = function(data){

    exec(null,null,"MKeyboardsPlugin","mCreateClass",[data]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.MKeyboardsPlugin){
    window.plugins.MKeyboardsPlugin = new MKeyboardsPlugin();
}

module.exports = new MKeyboardsPlugin();




});
