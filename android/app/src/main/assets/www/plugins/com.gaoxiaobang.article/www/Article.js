cordova.define("com.gaoxiaobang.article.ArticlePlugin", function(require, exports, module) {
/**
 * Created by wl_pc on 17/5/10.
 */


var ArticlePlugin = function(){};

var exec = require('cordova/exec');

ArticlePlugin.prototype.articleDetail = function(data){

    exec(null,null,"ArticlePlugin","articleDetail",[data]);

}


if(!window.plugins){
    window.plugins = {};
}

if(!window.plugins.ArticlePlugin){
    window.plugins.ArticlePlugin = new ArticlePlugin();
}

module.exports = new ArticlePlugin();




});
