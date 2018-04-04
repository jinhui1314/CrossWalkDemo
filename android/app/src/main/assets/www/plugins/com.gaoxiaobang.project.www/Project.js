cordova.define("com.gaoxiaobang.project.ProjectPlugin", function(require, exports, module) {
/**
 * Created by wl_pc on 17/5/10.
 */


var ProjectPlugin = function(){};

var exec = require('cordova/exec');

ProjectPlugin.prototype.goProject = function(token,userId){

    exec(null,null,"ProjectPlugin","goProject",[token,userId]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.ProjectPlugin){
    window.plugins.ProjectPlugin = new ProjectPlugin();
}

module.exports = new ProjectPlugin();




});
