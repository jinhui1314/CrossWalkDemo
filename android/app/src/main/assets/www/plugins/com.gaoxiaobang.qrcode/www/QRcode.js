cordova.define("com.gaoxiaobang.qrcode.MQRcodePlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */


var QRcodePlugin = function(){};

var exec = require('cordova/exec');

QRcodePlugin.prototype.scan = function(data){

  exec(null,null,"MQRcodePlugin","scan",[data]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.QRcodePlugin){
    window.plugins.QRcodePlugin = new QRcodePlugin();
}

module.exports = new QRcodePlugin();




});
