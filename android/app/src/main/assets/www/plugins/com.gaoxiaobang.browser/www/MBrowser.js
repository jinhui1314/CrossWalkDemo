cordova.define("com.gaoxiaobang.browser.MBrowserPlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var MBrowserPlugin = function(){};

var exec = require('cordova/exec');

MBrowserPlugin.prototype.browser = function(data,sucess,error){

  exec(sucess,error,"MBrowserPlugin","browser",[data]);

}

MBrowserPlugin.prototype.goback = function(data,sucess,error){

  exec(sucess,error,"MBrowserPlugin","goback",[data]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.MBrowserPlugin){
    window.plugins.MBrowserPlugin = new MBrowserPlugin();
}

module.exports = new MBrowserPlugin();




});
