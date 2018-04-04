cordova.define("com.gaoxiaobang.download.MDownloadPlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */

    var DownloadPlugin = function(){};

    var exec = require('cordova/exec');


    DownloadPlugin.prototype.start = function(callback,tasks){

        exec(function(str){
                callback.success(str);
            },null,"MDownloadPlugin","start",tasks);

    }


    DownloadPlugin.prototype.pause = function(callback,tasks){

        exec(function(str){
            callback.success(str);
        },null,"MDownloadPlugin","pause",tasks);

    }


    DownloadPlugin.prototype.resume = function(tasks){

        exec(null,null,"MDownloadPlugin","resume",tasks);

    }


    DownloadPlugin.prototype.deleteByClassId = function(callback,tasks){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","deleteByClassId",tasks);

    }


    DownloadPlugin.prototype.deleteByChapterId = function(callback,tasks){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","deleteByChapterId",tasks);


    }


    DownloadPlugin.prototype.getStatusByClassIdAndUnitId = function(callback,tasks){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","getStatusByClassIdAndUnitId",tasks);

    }

    DownloadPlugin.prototype.getDownloadFileSize = function(callback){

        exec(function(str){

                 callback.success(str);
             },null,"MDownloadPlugin","getDownloadFileSize",[]);

    }

    DownloadPlugin.prototype.getTaskNumByClassId = function(callback,tasks){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","getTaskNumByClassId",tasks);

    }

    DownloadPlugin.prototype.getAllTaskNum = function(callback){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","getAllTaskNum",[]);

    }

    DownloadPlugin.prototype.getAllClassesAndFinishedTask = function(callback){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","getAllClassesAndFinishedTask",[]);

    }

    DownloadPlugin.prototype.getTotalDownloadingFileSize = function(callback){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","getTotalDownloadingFileSize",[]);

    }

    DownloadPlugin.prototype.getCurrentDownloadingFileSize = function(callback){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","getCurrentDownloadingFileSize",[]);

    }

    DownloadPlugin.prototype.getAllTaskStatus = function(callback){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","getAllTaskStatus",[]);

    }

    DownloadPlugin.prototype.getAvailableMemorySize = function(callback){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","getAvailableMemorySize",[]);

    }

    DownloadPlugin.prototype.getAllFinishedFileSize = function(callback){

        exec(function(str){
                 callback.success(str);
             },null,"MDownloadPlugin","getAllFinishedFileSize",[]);

    }

    DownloadPlugin.prototype.getTaskDetailByClassId = function(callback,tasks){

        exec(function(str){
                  callback.success(str);
              },null,"MDownloadPlugin","getTaskDetailByClassId",tasks);

    }

    if(!window.plugins){
        window.plugins = {};
    }

    if(!window.plugins.DownloadPlugin){
        window.plugins.DownloadPlugin = new DownloadPlugin();
    }

    module.exports = new DownloadPlugin();

});
