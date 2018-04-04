cordova.define("com.gaoxiaobang.imagecache.MimageCachePlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var ImageCachePlugin = function(){};

var exec = require('cordova/exec');

ImageCachePlugin.prototype.cache = function(url,index,sucess){

    exec(sucess,null,"MimageCachePlugin","cache",[url,index]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.ImageCachePlugin){
    window.plugins.ImageCachePlugin = new ImageCachePlugin();
}

module.exports = new ImageCachePlugin();




});
