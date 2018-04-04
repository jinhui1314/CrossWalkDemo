cordova.define("com.gaoxiaobang.headimage.MHeadImagePlugin", function(require, exports, module) {

var HeadImagePlugin = function(){};

var exec = require('cordova/exec');

HeadImagePlugin.prototype.editHeadImage = function(data){

  exec(null,null,"MHeadImagePlugin","editHeadImage",[data]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.HeadImagePlugin){
    window.plugins.HeadImagePlugin = new HeadImagePlugin();
}

module.exports = new HeadImagePlugin();




});
