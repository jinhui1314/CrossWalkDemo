cordova.define("com.gaoxiaobang.share.MSharePlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */


var SharePlugin = function(){};

var exec = require('cordova/exec');

SharePlugin.prototype.share = function(data){

  exec(null,null,"MSharePlugin","share",[data]);

}

SharePlugin.prototype.login = function(data){

  exec(null,null,"MSharePlugin","login",[data]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.SharePlugin){
    window.plugins.SharePlugin = new SharePlugin();
}

module.exports = new SharePlugin();




});
