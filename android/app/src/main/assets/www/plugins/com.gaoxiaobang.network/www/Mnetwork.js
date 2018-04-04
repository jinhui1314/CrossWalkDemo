cordova.define("com.gaoxiaobang.network.MnetworkPlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var NetworkPlugin = function(){};

var exec = require('cordova/exec');

NetworkPlugin.prototype.network = function(url,method,sucess,error){

    exec(sucess,error,"MnetworkPlugin","network",[url,method]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.NetworkPlugin){
    window.plugins.NetworkPlugin = new NetworkPlugin();
}

module.exports = new NetworkPlugin();




});
