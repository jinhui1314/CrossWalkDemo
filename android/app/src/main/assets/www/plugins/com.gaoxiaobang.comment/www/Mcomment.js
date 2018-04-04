cordova.define("com.gaoxiaobang.comment.MCommentPlugin", function(require, exports, module) {
/**
 * Created by Ryan on 16/2/24.
 */
var CommentPlugin = function(){};

var exec = require('cordova/exec');

CommentPlugin.prototype.comment = function(str){

    exec(null,null,"MCommentPlugin","comment",[str]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.CommentPlugin){
    window.plugins.CommentPlugin = new CommentPlugin();
}

module.exports = new CommentPlugin();




});
