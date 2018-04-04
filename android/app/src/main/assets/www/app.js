// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

(function ($win) {
    $win.gxbapp = $win.gxbapp || angular.module('gxbApp', ['ionic', 'ngCordova', 'gxb.controllers', 'gxb.directives', 'gxb.filters', 'gxb.plugins','ionic-native-transitions','angularMoment']);

    /**
     window.TENANTID = 租户ID  ；
     window.USERID =用户ID；
     * */
    if (window.localStorage["userObject"]){
        //JSON.parse(window.localStorage["userObject"])
        if(JSON.parse(window.localStorage["userObject"]).tenantId){
            window.TENANTID = JSON.parse(window.localStorage["userObject"]).tenantId;
        }
        if(JSON.parse(window.localStorage["userObject"]).id){
            window.USERID =JSON.parse(window.localStorage["userObject"]).id;
        }
    }

    $win.gxbapp.run(['$ionicPlatform', 'Push','Lives', 'Updates', '$rootScope', '$state', 'Preferences', '$location', '$ionicHistory', '$cordovaToast',
            'gxb.plugins.components.caching.objectCache', '$cordovaDevice', 'gxb.plugins.components.pluginComponents',
            function ($ionicPlatform, Push, Lives, Updates, $rootScope, $state, Preferences, $location, $ionicHistory, $cordovaToast, objectCache, $cordovaDevice, $pluginComponents) {

                $rootScope.extrasObject = {}
                $rootScope.uuid = "";
                $rootScope.jPushRegisterId = "";
                $rootScope.safeApply = function(fn) {
                    var phase = (this.$root&&this.$root.$$phase)?this.$root.$$phase:null;
                    if(phase == '$apply' || phase == '$digest') {
                        if(fn && (typeof(fn) === 'function')) {
                            fn();
                        }
                    }else {
                        this.$apply(fn);
                    }
                };

                $rootScope.isMobile = gxb.settings.env.isMobile;

                $rootScope.isPyTenant = function(tenantId) {
                    var tId = tenantId || window.TENANTID || $pluginComponents.$tenantId.get();
                    if(tId == '1061') {
                        return true;
                    }
                    return false;
                };

                //退出app数据埋点
                var quizApp = function(){
                    var quizObj = $.extend({},$rootScope.mdParams,{type:2});
                    gxb.utils.userLogUtils.sendStatusEvent(quizObj);
                };





                //$rootScope.IconBadgeNumber = 0;




                $ionicPlatform.ready(function () {

                    //手机信息
                    var deviceInfo = ionic.Platform.device();
                    var obj={
                        app_version:$rootScope.version,
                        device_id:null,
                        device_cpu_cores:null,
                        device_memory_size:null,
                        device_phonenumber:null,
                        device_service_provider:null,
                        device_display_size:null,
                        device_display_color:null,
                        device_os_name:deviceInfo.platform,
                        device_os_version:deviceInfo.version

                    };

                    $rootScope.mdParams = obj;

                    window.gobacks = function(){

                        $rootScope.$ionicGoBack();

                    };

                    $ionicPlatform.isFullScreen = true;


                    document.addEventListener("pause", function(){

                        window.plugins.nativepagetransitions.cancelPendingTransition(function(){},function(){})
                    });

                    //判断时候存在userObj,如果存在则调用原生的方法
                    if(window.localStorage.userObject){
                        var userObj = gxb.utils.jsonUtils.toObject(window.localStorage.userObject);
                        if(userObj.id){
                            var statisticObj = {
                                uid:userObj.id,
                                tid:userObj.tenantId
                            };
                            window.plugins&&window.plugins.OnlinePlugin&&window.plugins.OnlinePlugin.onlineStart(statisticObj);
                        }
                    }

                    //数据埋点(页面切换)
                    $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams) {
                        var url = window.location.href;
                        var url_head = url.substring(0,url.indexOf("#")+1);
                        var from_params= fromParams;
                        var from_state = fromState;
                        var to_params = toParams;
                        var to_state = toState;
                        var referrer_url,current_url;

                        var setUrl = function(params,state){
                            var about_url;
                            if(state.url.indexOf(":")!=-1){
                                //替换参数
                                for(var key in params){
                                    var temp_url = state.url.replace(key,params[key]);
                                }
                                var url_tail = temp_url.replace(":",'');
                                about_url =url_head + url_tail;

                            }else{
                                //直接取url
                                if(state.name.indexOf("home")!=-1){
                                    about_url = url_head +"/home" +state.url;
                                }else{
                                    about_url = url_head+state.url;
                                }
                            }
                            return about_url;
                        };

                        referrer_url = setUrl(from_params,from_state);
                        current_url = setUrl(to_params,to_state);


                        //alert(deviceInfo.platform);
                        //alert($rootScope.version);

                        var urlObj={
                            re:encodeURIComponent(referrer_url),
                            u:encodeURIComponent(current_url)
                        };
                        var visitObj = $.extend({},obj,urlObj);
                        //alert(gxb.utils.jsonUtils.toString(visitObj));
                        gxb.utils.userLogUtils.sendVisitClickEvent(visitObj);
                    });

                    //初次启动数据埋点
                    if(window.localStorage.firstOpenApp ==undefined){
                        window.localStorage.firstOpenApp =1;
                        var firstOpenObj =$.extend({},obj,{type:'4'})
                        gxb.utils.userLogUtils.sendStatusEvent(firstOpenObj);
                    }



                    //延迟splash screnn 隐藏时间,不然会有短暂的白屏出现
                    setTimeout(function () {
                        //启动数据埋点
                        var openObj =$.extend({},obj,{type:'1'});
                        gxb.utils.userLogUtils.sendStatusEvent(openObj);

                        if(navigator.splashscreen){

                            navigator.splashscreen.hide();

                        }

                    }, 1000);


                    //ionic.Platform.isFullScreen = true;

                    //初始化
                    //Android 接收通知
                    var notificationCallback = function (data) {

                        var notification = JSON.parse(data)

                        //参数对象
                        var extrasObject = (notification.extras.extras);

                        //参数messageId

                        var obj = eval('(' + extrasObject + ')');

                        var messageId = notification.extras.messageId;

                        $rootScope.extrasObject = obj;
                        $rootScope.messageId = messageId;

                        console.log("==================" + $rootScope.messageId);

                        /*
                         * 标记为已读
                         * */

                        var classId = obj.classId;    //班次ID
                        var messageType = obj.messageType;     //消息类型
                        //var classPopQuizId = 0; //随堂测验ID

                        if(messageType=='ClassEndNotice'){
                            $state.go("courses_detail", {id: classId});
                        }else{
                            //到公告详情页面
                            $state.go("announcement_detail",{classId:classId,messageId:messageId,messageType:messageType,jump:1});
                        }
                        //if ((objectCache.getObject("userObject")).accessToken) {
                        //
                        //    if (obj.type == "Quiz") {  //测验
                        //
                        //        classId = obj.classId;
                        //        quizId = obj.quizId;
                        //        $state.go('course_quiz', {id: classId, quizId: quizId, jump: 1}, {reload: true});
                        //
                        //    } else if (obj.type == "Class") {  //班次
                        //
                        //        classId = obj.classId;
                        //        $state.go("course_item", {reload: true, id: classId, jump: 1}, {reload: true});
                        //
                        //    } else if (obj.type == "Announcement") {  //公告
                        //
                        //        classId = obj.classId;
                        //        announceId = obj.announcementId;   //927
                        //        $state.go('announcement_detail', {
                        //            id: classId,
                        //            announcementId: announceId,
                        //            jump: 1
                        //        }, {reload: true});
                        //    }
                        //
                        //}

                    };


                    Push.init(notificationCallback);
                    Push.getRegistrationID();


                    $rootScope.networkStates = navigator.connection.type


                    document.addEventListener("jpush.setTagsWithAlias", Push.onTagsWithAlias, false);
                    //document.addEventListener("deviceready", onDeviceReady, false);
                    document.addEventListener("jpush.openNotification", Push.onOpenNotification, false);
                    document.addEventListener("jpush.receiveNotification", Push.onReceiveNotification, false);
                    document.addEventListener("jpush.receiveMessage", Push.onReceiveMessage, false);




                    if ($win.cordova && $win.cordova.plugins.Keyboard) {

                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                        cordova.plugins.Keyboard.disableScroll(true);
                    }

                    if (window.StatusBar) {
                        StatusBar.styleDefault();
                    }



                    //ios
                    if (ionic.Platform.isIOS()) {

                        $rootScope.platformType = "IOS";

                        cordova.getAppVersion.getVersionNumber(function (version) {
                            $rootScope.version = version;

                        });

                    } else if (ionic.Platform.isAndroid()) {

                        $rootScope.platformType = "Android";

                        cordova.getAppVersion.getVersionNumber(function (version) {
                            $rootScope.version = version;

                        });

                        Updates.init();

                    } else {

                        $rootScope.platformType = "Browser";
                        //console.log("浏览器");
                    }

                    //objectCache.setObject("a","{'aa':'xxz'}");

                    //手机信息
                    $rootScope.uuids = $cordovaDevice.getUUID();




                    console.log("==================" + $rootScope.uuids);

                });

                var time = 0;
                //双击退出
                $ionicPlatform.registerBackButtonAction(function (e) {
                    //判断处于哪个页面时双击退出

                    console.log($location.path())

                    if ($location.path().indexOf('/home/course') == 0) {

                        if (new Date().getTime() - time < 3000) {

                            quizApp();
                            ionic.Platform.exitApp();

                        } else {

                            $cordovaToast.showShortCenter("再点击一次退出!")

                        }

                        time = new Date().getTime();


                    } else if ($location.path() == '/home/learn') {

                        if (new Date().getTime() - time < 3000) {

                            quizApp();
                            ionic.Platform.exitApp();

                        } else {

                            //$uiComponents.$toast.show("再点击一次退出!");
                            $cordovaToast.showShortCenter("再点击一次退出!")

                        }

                        time = new Date().getTime();

                    } else if ($location.path() == '/home/me') {

                        if (new Date().getTime() - time < 3000) {

                            quizApp();
                            ionic.Platform.exitApp();

                        } else {
                            $cordovaToast.showShortCenter("再点击一次退出!")
                            //$uiComponents.$toast.show("再点击一次退出!");

                        }

                        time = new Date().getTime();

                    } else if ($location.path() == '/home/found') {

                        if (new Date().getTime() - time < 3000) {

                            quizApp();
                            ionic.Platform.exitApp();

                        } else {
                            $cordovaToast.showShortCenter("再点击一次退出!")
                            //$uiComponents.$toast.show("再点击一次退出!");

                        }

                        time = new Date().getTime();

                    }else if($location.path() == '/user/bind/mobile'){

                        if($rootScope.mAccessToken){

                            $cordovaToast.showShortCenter("请您先绑定手机号后,在进行操作")

                        }else{

                            $rootScope.$ionicGoBack();

                        }


                    }else{

                        console.log("goback");
                        //$ionicHistory.goBack();
                        $rootScope.$ionicGoBack();

                    }

                    return false;

                }, 101);

            }])

        .factory('Push', function ($state, $rootScope) {
            var push;

            var onGetRegistradionID = function (data) {

                try {

                    if (data.length == 0) {
                        var t1 = window.setTimeout(push.getRegistrationID, 1000);
                    }

                    //获取JpushRegisterId
                    $rootScope.jPushRegisterId = data;

                    console.log("JPushPlugin:registrationID is " + data);

                } catch (exception) {
                    console.log(exception);
                }

            };


            var getBadge = function (data) {
                try {
                    console.log("=============badge" + data);
                } catch (e) {
                }
            };

            return {

                setBadge: function (badge) {
                    if (push) {
                        console.log('jpush: set badge', badge);
                        window.plugins.jPushPlugin.setBadge(badge);
                    }
                },

                getRegistrationID: function () {
                    window.plugins.jPushPlugin.getRegistrationID(onGetRegistradionID);
                },

                onTagsWithAlias: function (event) {
                    try {
                        //console.log("onTagsWithAlias");
                        var result = "result code:" + event.resultCode + " ";
                        result += "tags:" + event.tags + " ";
                        result += "alias:" + event.alias + " ";
                        //console.log(result);
                    }
                    catch (exception) {
                        console.log(exception)
                    }
                },
                onOpenNotification: function (event) {

                    if (ionic.Platform.isAndroid()) {
                        alertContent = window.plugins.jPushPlugin.openNotification.alert;

                    } else {

                        push.setBadge(0);

                        push.setApplicationIconBadgeNumber(0);

                        alertContent = event.aps.alert;

                        var messageId = event.messageId;


                        var obj =  eval('(' + event.extras + ')');

                        $rootScope.extrasObject = obj;

                        $rootScope.messageId = messageId;

                        var classId = obj.classId;    //班次ID
                        var messageType = obj.messageType;     //消息类型
                        //var classPopQuizId = 0; //随堂测验ID

                        if(messageType=='ClassEndNotice'){
                            $state.go("courses_detail", {id: classId});
                        }else{
                            //到公告详情页面
                            $state.go("announcement_detail",{classId:classId,messageId:messageId,messageType:messageType,jump:1});
                        }
                        //if (obj.type == "Quiz") {  //测验
                        //    classId = obj.classId;
                        //    quizId = obj.quizId;
                        //    $state.go("course_quiz", {id: classId, quizId: quizId, jump: 1}, {reload: true});
                        //}
                        //else if (obj.type == "Class") {  //班次
                        //    classId = obj.classId;
                        //    $state.go("course_item", {reload: true, id: classId, jump: 1});
                        //} else if (obj.type == "Announcement") {  //公告
                        //    classId = obj.classId;
                        //    announceId = obj.announcementId;   //927
                        //    $state.go('announcement_detail', {
                        //        id: classId,
                        //        announcementId: announceId,
                        //        jump: 1
                        //    });
                        //
                        //}

                    }
                },

                onReceiveNotification: function (event) {
                    try {
                        var alertContent;
                        if (ionic.Platform.isAndroid()) {
                            //console.log("android push service onReceiveNotification");
                            alertContent = window.plugins.jPushPlugin.receiveNotification.alert;
                        } else {
                            alertContent = event.aps.alert;
                            var extrasObject = (event.extras);
                            var messageId = event.messageId;
                            var obj = eval('(' + extrasObject + ')');
                            $rootScope.extrasObject = obj;
                            //var iconNumber = push.getApplicationIconBadgeNumber(getBadge);

                            //push.setApplicationIconBadgeNumber(iconNumber);

                        }

                    }
                    catch (exception) {
                        console.log(exception)
                    }
                },

                onReceiveMessage: function (event) {
                    try {

                        var message;
                        if (ionic.Platform.isAndroid()) {
                            message = window.plugins.jPushPlugin.receiveMessage.message;
                        } else {
                            message = event.content;
                        }
                        //var extras = window.plugins.jPushPlugin.extras

                        console.log(message);

                    }
                    catch (exception) {
                        console.log("JPushPlugin:onReceiveMessage-->" + exception);
                    }
                },


                setAlias: function (alias) {
                    if (push) {
                        console.log('jpush: set alias', alias);
                        plugins.jPushPlugin.setAlias(alias);
                    }
                },

                check: function () {
                    if ($win.jpush && push) {
                        plugins.jPushPlugin.receiveNotificationIniOSCallback($win.jpush);
                        $win.jpush = null;
                    }
                },
                init: function (notificationCallback) {

                    try {

                        push = $win.plugins && $win.plugins.jPushPlugin;
                        if (push) {
                            console.log('jpush: init');
                            window.plugins.jPushPlugin.init();

                            window.plugins.jPushPlugin.setAlias("gxb");

                            if (ionic.Platform.isAndroid()) {
                                window.plugins.jPushPlugin.setDebugModeFromIos();
                                window.plugins.jPushPlugin.setApplicationIconBadgeNumber(0);
                            } else {
                                window.plugins.jPushPlugin.setDebugMode(true);
                                window.plugins.jPushPlugin.setApplicationIconBadgeNumber(0);
                            }
                            plugins.jPushPlugin.openNotificationInAndroidCallback = notificationCallback;

                            plugins.jPushPlugin.receiveNotificationIniOSCallback = notificationCallback;

                            window.notificationCallback = notificationCallback;

                        }

                    }
                    catch (exception) {
                        console.log(exception);
                    }

                }
            };
        })

        .factory('Preferences', function () {

            return {

                getString: function (key, callback) {

                    plugins.ConfigPlugin.mgetString(key, callback)

                },

                putString: function (key, value) {
                    if(typeof(plugins) == "undefined") return;
                    plugins.ConfigPlugin.mputString(key, value)

                },
                remove: function (key) {

                    plugins.ConfigPlugin.mremove(key)

                }

            }

        })
        .factory('Article',function(){
            return {
                getDetail: function(obj) {
                    plugins.ArticlePlugin.articleDetail(obj);
                }
            }
        })
        .factory('Project',function(){
            return {
                goProject: function(token, userId) {
                    if(typeof(plugins) == "undefined") return;
                    plugins.ProjectPlugin.goProject(token, userId)
                }
            }
        })
        .factory('Download', function () {

            return {

                start: function (callback,arrays) {  //单个或多个添加下载
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.start(callback,arrays)
                },
                pause: function (callback,arrays) {  //单个或多个暂停下载
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.pause(callback,arrays)

                },
                resume: function (arrays) {  //单个或多个继续下载
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.resume(arrays)

                },
                getDownloadFileSize:function(callBack){
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getDownloadFileSize(callBack)
                },
                deleteByClassId:function(callback,array){   //通过classId删除单个或多个下载课程  返回 0/1
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.deleteByClassId(callback,array);

                },
                deleteByChapterId:function(callback,array){   //通过chapterId删除单个或多个节   返回 0/1
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.deleteByChapterId(callback,array);

                },
                //单课已下载管理
                getTaskDetailByClassId:function(callback,classId){   //通过classId获取当前课程已下载完成的chapter
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getTaskDetailByClassId(callback,classId);

                },
                //下载列表管理
                getTotalDownloadingFileSize:function(callback){     //获取正在下载的文件大小 int
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getTotalDownloadingFileSize(callback);

                },
                getCurrentDownloadingFileSize:function(callback){    //获取当前已下载的文件已下载完成的大小 int
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getCurrentDownloadingFileSize(callback);

                },
                getAllClassesAndFinishedTask:function(callback){    //获取所有下载的课程classId以及下载完成的任务数（返回json字符串）[{classId:123,finishedTasksNum:3},{}]
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getAllClassesAndFinishedTask(callback);

                },
                getAvailableMemorySize:function(callback){          //获取可用存储空间大小    string
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getAvailableMemorySize(callback);

                },
                getAllFinishedFileSize:function(callback){          //获取所有下载完成的文件大小 int  (b)
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getAllFinishedFileSize(callback);

                },
                //正在下载
                getAllTaskStatus:function(callback){                //获取所有任务状态（包括正在下载的，等待的，暂停的，失败的等）
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getAllTaskStatus(callback);

                },
                //我的
                getAllTaskNum:function(callback){                   //所有除了已完成的所有的任务数
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getAllTaskNum(callback);

                },
                //课程详情页
                getStatusByClassIdAndUnitId:function(callback,arr){      //获取某个课下某一章下的所有的下载状态（因为只有一章是展开的所以）
                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getStatusByClassIdAndUnitId(callback,arr);

                },
                getTaskNumByClassId:function(callback,classId){              //通过classId获取所有Unit下的所有下载任务数和已完成下载任务数，通过对比进行状态改变

                    if(typeof(plugins) == "undefined") return;
                    plugins.DownloadPlugin.getTaskNumByClassId(callback,classId);

                }

            }

        })
        .factory('Comment', function () {

            return {

                comment: function (obj) {

                    if (plugins.CommentPlugin == undefined) {

                        return;

                    }

                    plugins.CommentPlugin.comment(obj)

                }

            }
        })
        .factory('Play', function () {

            return {

                play: function (type, classId, chapterId, schoolId, tenantId, token, data, title,uid,success) {

                    plugins.PlayPlugin.play(type, classId, chapterId, schoolId, tenantId, token, data, title,uid,success)

                },

                playWeClass:function(data){

                    plugins.PlayPlugin.playWeClass(data)
                }

            }

        })
        .factory('record', function () {

            return {

                mStartRecord: function (data) {

                    plugins.RecordPlugin.mStartRecord(data)

                },

                mStopRecord:function(success){

                    plugins.RecordPlugin.mStopRecord(success)
                }

            }

        })
        .factory('networkState', function () {

            return {

                state: function () {

                    if (undefined!=navigator.connection){

                        var networkState = navigator.connection.type;

                        var states = {};

                        states[Connection.UNKNOWN] = 'Unknown';
                        states[Connection.ETHERNET] = 'Ethernet';
                        states[Connection.WIFI] = 'WiFi';
                        states[Connection.CELL_2G] = 'CELL_2G';
                        states[Connection.CELL_3G] = 'CELL_3G';
                        states[Connection.CELL_4G] = 'CELL_4G';
                        states[Connection.CELL] = 'CELL';
                        states[Connection.NONE] = 'NONE';

                        return states[networkState];

                    }else{

                        return "";
                    }


                }

            }

        })
        .factory('Updates', function () {

            return {

                init: function () {

                    plugins.UpdatePlugin.init()
                }

            }

        })
        .factory('Lives', function () {

        return {

            live: function (str) {

                window.plugins.LivePlugin.mlive(str)

            }

        }

    })
      .factory('TakePhoto', function () {

          return {

              set: function (str) {
                  if(typeof(plugins) == "undefined") return;
                  window.plugins.HeadImagePlugin.editHeadImage(str);
              }
          }
      })
      .factory('PassValue', function (){
          var myData = "";
          function _getter(){
              return myData;
          }
          function _setter(a){
              myData = a;
          }
          return {
              getter:_getter,
              setter:_setter
          }
      })
      .factory('ClassName', function(){
          var data = "";
          function _getter(){
              return data;
          }
          function _setter(a){
              data = a;
          }
          return {
              getter:_getter,
              setter:_setter
          }
      })




        //.factory('Screen',function(){
        //
        //    return {
        //
        //        setPortrait:function(){
        //
        //            console.log("setPortrait")
        //            cordova.plugins.screenOrientation.setOrientation('portrait');
        //
        //        },
        //        setLandscape:function(){
        //            console.log("setLandscape")
        //            cordova.plugins.screenOrientation.setOrientation('landscape');
        //        },
        //        setUnlocked:function(){
        //            console.log("setUnlocked")
        //            cordova.plugins.screenOrientation.setOrientation('unlocked');
        //
        //        }
        //    }
        //
        //})
    ;


})(window)
