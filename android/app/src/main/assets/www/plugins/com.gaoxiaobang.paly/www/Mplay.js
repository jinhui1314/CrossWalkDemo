cordova.define("com.gaoxiaobang.paly.MPlayPlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var PlayPlugin = function(){};

var exec = require('cordova/exec');

PlayPlugin.prototype.play = function(type,classId,chapterId,schoolId,tenantId,token,data,title,uid,success,learnStatus){

  /**
   type 1 本地视频
        0 在线视频
   * */
  exec(success,null,"MPlayPlugin","play",[classId,chapterId,schoolId,tenantId,token,data,type,title,uid,learnStatus]);

}

PlayPlugin.prototype.playWeClass = function(data){

  exec(null,null,"MPlayPlugin","playWeClass",[data]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.PlayPlugin){
    window.plugins.PlayPlugin = new PlayPlugin();
}

module.exports = new PlayPlugin();




});
