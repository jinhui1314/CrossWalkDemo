cordova.define("com.gaoxiaobang.update.MUpdatePlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var UpdatePlugin = function(){};

var exec = require('cordova/exec');

UpdatePlugin.prototype.init = function(){

  exec(null,null,"MUpdatePlugin","init",[]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.UpdatePlugin){
    window.plugins.UpdatePlugin = new UpdatePlugin();
}

module.exports = new UpdatePlugin();




});
