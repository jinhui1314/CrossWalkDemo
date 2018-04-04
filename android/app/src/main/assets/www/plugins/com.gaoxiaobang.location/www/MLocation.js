cordova.define("com.gaoxiaobang.location.MLocationPlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var LocationPlugin = function(){};

var exec = require('cordova/exec');

LocationPlugin.prototype.mGetLocation = function(){

    exec(null,null,"MLocationPlugin","getLocation",[]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.LocationPlugin){
    window.plugins.LocationPlugin = new LocationPlugin();
}

module.exports = new LocationPlugin();




});
