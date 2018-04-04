cordova.define("com.gaoxiaobang.sharedpreferences.Preferences", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var ConfigPlugin = function(){};

var exec = require('cordova/exec');

ConfigPlugin.prototype.mgetString = function(key,callback){

    exec(function(value){

        callback.sucess(value);

    },null,"MPreferencesPlugin","getString",[key]);

}



ConfigPlugin.prototype.mputString = function(key,value){

  exec(null,null,"MPreferencesPlugin","putString",[key,value]);

}

ConfigPlugin.prototype.mgetInteger = function(key,callback){

  exec(function(value){

  	callback.sucess(value);

  },null,"MPreferencesPlugin","getInteger",[key]);

}

ConfigPlugin.prototype.mputInteger = function(key,value){

  exec(null,null,"MPreferencesPlugin","putInteger",[key,value]);

}

ConfigPlugin.prototype.mremove = function(key){

  exec(null,null,"MPreferencesPlugin","remove",[key]);

}



if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.ConfigPlugin){
    window.plugins.ConfigPlugin = new ConfigPlugin();
}

module.exports = new ConfigPlugin();




});
