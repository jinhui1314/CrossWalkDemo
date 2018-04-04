cordova.define("com.gaoxiaobang.online.MOnlinePlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */


var OnlinePlugin = function(){};

var exec = require('cordova/exec');

OnlinePlugin.prototype.onlineStart = function(data){

  exec(null,null,"MOnlinePlugin","onlineStart",[data]);

}
OnlinePlugin.prototype.onlineStop = function(data){

  exec(null,null,"MOnlinePlugin","onlineStop",[data]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.OnlinePlugin){
    window.plugins.OnlinePlugin = new OnlinePlugin();
}

module.exports = new OnlinePlugin();




});
