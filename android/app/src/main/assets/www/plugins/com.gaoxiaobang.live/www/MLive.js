cordova.define("com.gaoxiaobang.live.MLivePlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var LivePlugin = function(){};

var exec = require('cordova/exec');

LivePlugin.prototype.mlive = function(str){

    exec(null,null,"MLivePlugin","live",[str]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.LivePlugin){
    window.plugins.LivePlugin = new LivePlugin();
}

module.exports = new LivePlugin();




});
