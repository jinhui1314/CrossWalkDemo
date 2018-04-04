cordova.define("com.gaoxiaobang.record.MRecordPlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var RecordPlugin = function(){};

var exec = require('cordova/exec');

RecordPlugin.prototype.mStartRecord = function(data){

    exec(null,null,"MRecordPlugin","startRecord",[data]);

}

RecordPlugin.prototype.mStopRecord = function(success){

    exec(success,null,"MRecordPlugin","mStopRecord",[]);

}

RecordPlugin.prototype.soundPlaying = function(data){

    exec(null,null,"MRecordPlugin","playSound",[data]);

}

RecordPlugin.prototype.soundPause = function(success){

    exec(success,null,"MRecordPlugin","pauseSound",[]);
}

if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.RecordPlugin){
    window.plugins.RecordPlugin = new RecordPlugin();
}

module.exports = new RecordPlugin();




});
