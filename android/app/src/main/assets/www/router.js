(function($win) {
  $win.gxbapp = $win.gxbapp || angular.module('gxbApp', ['ionic', 'ngCordova', 'gxb.controllers', 'gxb.directives', 'gxb.filters','ionic-native-transitions']);
  $win.gxbapp.config(['$stateProvider','$urlRouterProvider','$httpProvider', '$locationProvider', '$sceProvider', '$ionicConfigProvider','$sceDelegateProvider','$ionicNativeTransitionsProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $sceProvider, $ionicConfigProvider,$sceDelegateProvider,$ionicNativeTransitionsProvider) {

      $ionicConfigProvider.views.swipeBackEnabled(false);

      $ionicNativeTransitionsProvider.setDefaultOptions({
        duration: 400, // in milliseconds (ms), default 400,
        slowdownfactor: 4, // overlap views (higher number is more) or no overlap (1), default 4
        iosdelay: -1, // ms to wait for the iOS webview to update before animation kicks in, default -1
        androiddelay: -1, // same as above but for Android, default -1
        winphonedelay: -1, // same as above but for Windows Phone, default -1,
        fixedPixelsTop: 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
        fixedPixelsBottom: 0, // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
        triggerTransitionEvent: '$ionicView.afterEnter', // internal ionic-native-transitions option
        backInOppositeDirection: false // Takes over default back transition and state back transition to use the opposite direction transition to go back
      });

      $ionicNativeTransitionsProvider.setDefaultTransition({
        type: 'slide',
        direction: 'left'
      });

      $ionicNativeTransitionsProvider.setDefaultBackTransition({
        type: 'slide',
        direction: 'right'
      });



      var viewRoot = "templates/";

       $sceDelegateProvider.resourceUrlWhitelist([
         'self',
         //"http://gxb-video.cdn.bj.xs3cnc.com/**",
         "http://*.gaoxiaobang.com/**",
         "http://gxb-file.s3.bj.xs3cnc.com/**",
         "http://gxb-file.cdn.bj.xs3cnc.com/**",
         "http://s3.bj.xs3cn",
         "https://*.gaoxiaobang.com/**",
         "https://gxb-file.s3.bj.xs3cnc.com/**",
         "https://gxb-file.cdn.bj.xs3cnc.com/**",
         "https://s3.bj.xs3cn"
       ]);

      var registerRouter = function(stateName, config) {
        $stateProvider.state(stateName, config);
      }

      var getTemplateUrl = function(templateUrl) {
        return viewRoot + templateUrl + ".html";
      }

      var getTemplateURL = function(ctrlName) {
        return getTemplateUrl(gxb.controllers.getView(ctrlName))
      }

      var getTemplateUrlAndController = function(ctrlName) {

        return {
          templateUrl: getTemplateUrl(gxb.controllers.getView(ctrlName)),
          controller: ctrlName,
          //加上他所有动画都无效果 不会抖动
        };
      }

      /*
      路由地址按以下规则确定：
      1、登录及基础模块
      学校页列表页：schools
      学校查询页：schools/search
      登录页:signin
      注册页_获取验证码：signup
      注册页_验证验证码：signup/verifycode
      注册页_确定密码：signup/confirmpwd

      课程列表页:courses
      课程单品页：courses/detail

      课程学习页：learn/classId



      */


      registerRouter("school", gxb.utils.objectUtils.extend({
        url: "/school/:type",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.schools.schoolCtrlFullName)));

      ///账号登录路由
      registerRouter("user_login_no", gxb.utils.objectUtils.extend({
        url: "/account/login/:tenantId",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.loginNoCtrlFullName)));

      ///学号登录路由
      registerRouter("account_signin", gxb.utils.objectUtils.extend({
        url: "/account/signin/:tenantId",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.loginCtrlFullName)));

      ///第三方登录绑定账号
      registerRouter("escrow_login", gxb.utils.objectUtils.extend({
        url: "/escrow/login/:keyType",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.escrowLoginCtrlFullName)));

      ///第三方登录绑定账号密码
      registerRouter("escrow_login_password", gxb.utils.objectUtils.extend({
        url: "/escrow/login/password/:mobile",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.escrowLoginPasswordCtrlFullName)));

      //学号找回密码第一步
      registerRouter("user_validate_school", gxb.utils.objectUtils.extend({
        url: "/account/forgot/password/school"
      }, getTemplateUrlAndController(gxb.controllers.users.userValidateSchoolCtrlFullName)));


      //学号找回密码第二步
      registerRouter("user_validate_code", gxb.utils.objectUtils.extend({
        url: "/account/forgot/password/code/:userId",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.userValidateCodeCtrlFullName)));


      //学号找回密码第三步
      registerRouter("user_validate_newPassword", gxb.utils.objectUtils.extend({
        url: "/account/forgot/password/password/:userId/:username",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.userValidateNewPasswordCtrlFullName)));


      ///注册路由
      registerRouter("account_signup", gxb.utils.objectUtils.extend({
        url: "/account/signup/:mobile",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.regCtrlFullName)));

      //用户协议
      registerRouter("account_signup_agreement", gxb.utils.objectUtils.extend({
        url: "/account/signup/agreement/:mobile"
      }, getTemplateUrlAndController(gxb.controllers.users.agreementCtrlFullName)));

      ///验证验证码
      registerRouter("account_signup_verify", gxb.utils.objectUtils.extend({
        url: "/account/signup/verify"
      }, getTemplateUrlAndController(gxb.controllers.users.regNextCtrlFullName)));
      ///设置密码
      registerRouter("account_signup_pwd", gxb.utils.objectUtils.extend({
        url: "/account/signup/password",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.regEndCtrlFullName)));

      ///忘记密码
      registerRouter("account_forgot_password", gxb.utils.objectUtils.extend({
        url: "/account/forgot/password/:mobile"
      }, getTemplateUrlAndController(gxb.controllers.users.forgetCtrlFullName)));
      ///验证验证码
      registerRouter("account_forgot_password_verify", gxb.utils.objectUtils.extend({
        url: "/account/forgot/password/verify"
      }, getTemplateUrlAndController(gxb.controllers.users.receiveCtrlFullName)));
      ///新的密码
      registerRouter("account_forgot_password_new", gxb.utils.objectUtils.extend({
        url: "/account/forgot/password/newpassword",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.newPasswordCtrlFullName)));

      ///绑定手机号
      registerRouter("user_bind_mobile", gxb.utils.objectUtils.extend({
        url: "/user/bind/mobile",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.bindingCtrlFullName)));

      registerRouter("user_bind_mobile_verify", gxb.utils.objectUtils.extend({
        url: "/user/bind/mobile/verify/:mobile",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.users.validateCtrlFullName)));

      ///验证学生身份信息
      registerRouter("user_bind_studentno", gxb.utils.objectUtils.extend({
        url: "/user/bind/studentno/"
      }, getTemplateUrlAndController(gxb.controllers.users.certifiedCtrlFullName)));

      //registerRouter("user_bind_studentno1", gxb.utils.objectUtils.extend({
      //  url: "/user/bind/studentno1",
      //  cache:false
      //}, getTemplateUrlAndController(gxb.controllers.users.verifyCtrlFullName)));

      //课程单品页
      registerRouter("course_item", gxb.utils.objectUtils.extend({
        url: "/courses/:id/:jump",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.courses.courseIntroduceCtrlFullName)));

      //精品课程
      registerRouter("course_excellent", gxb.utils.objectUtils.extend({
        url: "/courses/excellent"
      }, getTemplateUrlAndController(gxb.controllers.courses.courseExcellentCtrlFullName)));

      //选课详情
      registerRouter("course_select", gxb.utils.objectUtils.extend({
        url: "/courses/select"
      }, getTemplateUrlAndController(gxb.controllers.courses.selectCourseCtrlFullName)));


      //搜索课程
      registerRouter("search_course", gxb.utils.objectUtils.extend({
        url: "/courses/search",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.courses.searchCourseCtrlFullName)));

      //院校公告
      registerRouter("course_schoolNotice", gxb.utils.objectUtils.extend({
        url: "/courses/notice/:noticeId",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.courses.schoolNoticeCtrlFullName)));


      //学分课
      registerRouter("course_credit", gxb.utils.objectUtils.extend({
        url: "/courses/credit",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.courses.courseCreditCtrlFullName)));


      //公告详情页面
      registerRouter("announcement_detail",gxb.utils.objectUtils.extend({
        url:"/courses/:classId/:messageId/:messageType/:jump",
        cache:false
      },getTemplateUrlAndController(gxb.controllers.learning.announcementCtrlFullName)));

      //讨论详情
      registerRouter("course_item_topic",gxb.utils.objectUtils.extend({
        url:"/courses/:id/topic/:topicId/:type",
        cache:false
      },getTemplateUrlAndController(gxb.controllers.learning.topicCtrlFullName)));


      //直播详情
      registerRouter("course_item_liveVideoDetail",gxb.utils.objectUtils.extend({
        url:"/courses/:id/video/:webcastId"
      },getTemplateUrlAndController(gxb.controllers.learning.liveVideoDetailCtrlFullName)));

      //回复详情
      registerRouter("course_item_topic_replyDetail",gxb.utils.objectUtils.extend({
        url:"/courses/:id/topic/:topicId/replyDetail/:postId/:type",
        cache:false
      },getTemplateUrlAndController(gxb.controllers.learning.replyDetailCtrlFullName)));

      //评价
      registerRouter("course_item_evaluation",gxb.utils.objectUtils.extend({
        url:"/courses/:id/evaluation/:courseId"
      },getTemplateUrlAndController(gxb.controllers.learning.evaluationCtrlFullName)));


      ///学习视频
      registerRouter("course_video", gxb.utils.objectUtils.extend({
        cache:false,
        url: "/courses/:id/learning/:chapterId/video/:type"
      }, getTemplateUrlAndController(gxb.controllers.learning.videoCtrlFullName)));

      ///学习课件
      registerRouter("course_ware", gxb.utils.objectUtils.extend({
        cache:false,
        url: "/courses/:id/learning/:chapterId/ware"
      }, getTemplateUrlAndController(gxb.controllers.learning.courseWareCtrlFullName)));


      ///学习页面
      registerRouter("course_page", gxb.utils.objectUtils.extend({
        cache:false,
        url: "/courses/:id/learning/:chapterId/page"
      }, getTemplateUrlAndController(gxb.controllers.learning.coursePageCtrlFullName)));

      //成绩分析的得分规则
      registerRouter("learn_rule", gxb.utils.objectUtils.extend({
        cache:false,
        url: "/courses/:id/learning/rule"
      }, getTemplateUrlAndController(gxb.controllers.learning.learnRuleCtrlFullName)));


      //测验
      registerRouter("course_quiz", gxb.utils.objectUtils.extend({
        url: "/courses/:id/learning/quiz/:quizId/:jump",
        cache:false,
      }, getTemplateUrlAndController(gxb.controllers.learning.learnQuizCtrlFullName)));

      //作业
      registerRouter("assignment",gxb.utils.objectUtils.extend({
        url: "/courses/:id/chapter/:chapterId/assignment/:assignmentId",
        cache: false
      }, getTemplateUrlAndController(gxb.controllers.learning.assignmentCtrlFullName))),
      //作业详情
        registerRouter("assignment_detail",gxb.utils.objectUtils.extend({
          url: "/courses/:id/assignmentDetail/:assignmentId/:type",
          cache: false
        }, getTemplateUrlAndController(gxb.controllers.learning.assignmentDetailCtrlFullName))),
      //直播详情
        registerRouter("webcast_detail",gxb.utils.objectUtils.extend({
          url: "/courses/:id/:chapterId/webcast/:webcastId",
          cache: false
        }, getTemplateUrlAndController(gxb.controllers.learning.webcastCtrlFullName))),
      //做题
      registerRouter("course_quiz_topic", gxb.utils.objectUtils.extend({
        url: "/courses/:id/learning/quiz/:quizId/topic/:time"
      }, getTemplateUrlAndController(gxb.controllers.learning.learnTopicCtrlFullName)));

      //答题卡
      registerRouter("course_quiz_topic_answerCard", gxb.utils.objectUtils.extend({
        url: "/courses/:id/learning/quiz/topic/:quizId/answerCard/:score/:submissionId"
      }, getTemplateUrlAndController(gxb.controllers.learning.answerCardCtrlFullName)));

      registerRouter("course_quiz_topic_keys", gxb.utils.objectUtils.extend({
        url: "/courses/:id/learning/quiz/topic/:quizId/keys/:currentIndex/:time"
      }, getTemplateUrlAndController(gxb.controllers.learning.keysCtrlFullName)));

      //解析
      registerRouter("course_quiz_topic_analysis", gxb.utils.objectUtils.extend({
        url: "/courses/:id/learning/quiz/:quizId/analysis/:submissionId/:time"
      }, getTemplateUrlAndController(gxb.controllers.learning.learnAnalysisCtrlFullName)));

      registerRouter("courses", gxb.utils.objectUtils.extend({
        url: "/courses",
        abstract: true,
        cache:true
      }, getTemplateUrlAndController(gxb.controllers.layout.coursesCtrlFullName)));


      //点击继续学习跳转的页面
      registerRouter("courses_detail", gxb.utils.objectUtils.extend({
        cache:false,
        url: '/detail/:id/:types/:firstTime/:canBack'
      }, getTemplateUrlAndController(gxb.controllers.learning.detailCtrlFullName)));



      registerRouter("home", gxb.utils.objectUtils.extend({
        url: "/home",
        abstract: true,
        cache:true
      }, getTemplateUrlAndController(gxb.controllers.layout.tabCtrlFullName)));

      $stateProvider
        .state('home.course', {
          url: '/course',
          cache:false,
          nativeTransitions: null,
          views: {
            'home-course': {
              templateUrl: viewRoot + 'tab_course.html',
              controller: 'gxb.controllers.courses.courseCtrl'
            }
          }
        })
        .state('home.charging', {
          url: '/charging',
          cache:false,
          nativeTransitions: null,
          views: {
            'home-charging': {
              templateUrl: viewRoot + 'tab_charging.html',
              controller: 'gxb.controllers.charging.chargingCtrl'
            }
          }
        })
        .state('home.found', {
          url: '/found',
          cache:false,
          nativeTransitions: null,
          views: {
            'home-found': {
              templateUrl: viewRoot + 'tab_found.html',
              controller: 'gxb.controllers.founds.foundCtrl'
            }
          }
        })
        // .state('home.community', {
        //   url: '/community',
        //   cache:false,
        //   nativeTransitions: null,
        //   views: {
        //     'home-community': {
        //       templateUrl: viewRoot + 'tab_community.html',
        //       controller: 'gxb.controllers.community.communityCtrl'
        //     }
        //   }
        // })
        .state('home.me', {
          url: '/me',
          cache:false,
          nativeTransitions: null,
          views: {
            'home-me': {
              templateUrl: viewRoot + 'tab_me.html',
              controller: 'gxb.controllers.users.meCtrl'
            }
          }
        });


      /*个人设置相关*/
      registerRouter("settings_about", gxb.utils.objectUtils.extend({
        url: "/settings/about",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.profiles.settingAboutCtrlFullName)));
      //消息中心
      registerRouter("settings_message", gxb.utils.objectUtils.extend({
        url: "/settings/message",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.profiles.messageCtrlFullName)));
      //认证学校
      registerRouter("settings_authentication", gxb.utils.objectUtils.extend({
        url: "/settings/authentication",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.profiles.authenticationCtrlFullName)));
      //个人中心
      registerRouter("settings_personal", gxb.utils.objectUtils.extend({
        url: "/settings/personal",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.profiles.personalCtrlFullName)));
    //修改用户名
    registerRouter("modify_name",gxb.utils.objectUtils.extend({
      url:"/settings/personal/name",
      cache:false
    },getTemplateUrlAndController(gxb.controllers.profiles.modifyUserNameCtrlFullName)));
    //更改手机号
    registerRouter("settings_personal_modifyPhone", gxb.utils.objectUtils.extend({
      url: "/settings/personal/modifyPhone",
      cache:false
    }, getTemplateUrlAndController(gxb.controllers.profiles.modifyPhoneCtrlFullName)));
    //更改手机号
    registerRouter("settings_personal_modifyPassword", gxb.utils.objectUtils.extend({
      url: "/settings/personal/modifyPassword",
      cache:false
    }, getTemplateUrlAndController(gxb.controllers.profiles.modifyPasswordCtrlFullName)));
    //更改密码
    registerRouter("settings_personal_modifyNext", gxb.utils.objectUtils.extend({
      url: "/settings/personal/modifyNext/:passwords/:mobile",
      cache:false
    }, getTemplateUrlAndController(gxb.controllers.profiles.modifyNextCtrlFullName)));
    //添加验证
    registerRouter("settings_personal_addValidate", gxb.utils.objectUtils.extend({
      url: "/settings/personal/addValidate/:type"
    }, getTemplateUrlAndController(gxb.controllers.profiles.addValidateCtrlFullName)));

    registerRouter("settings_personal_addValidate_school", gxb.utils.objectUtils.extend({
      url: "/settings/personal/addValidate/:schoolName/:tenantId/:study/:id/:type"
    }, getTemplateUrlAndController(gxb.controllers.profiles.addValidateCtrlFullName)));

    //下载管理
    registerRouter("settings_download", gxb.utils.objectUtils.extend({
      url: "/settings/download",
      cache:false
    }, getTemplateUrlAndController(gxb.controllers.profiles.downloadCtrlFullName)));

    //下载中心
    registerRouter("settings_downloading", gxb.utils.objectUtils.extend({
      url: "/settings/downloading",
      cache:false
    }, getTemplateUrlAndController(gxb.controllers.profiles.downloadingCtrlFullName)));

    //下载中心章的管理
    registerRouter("settings_downloadChapter", gxb.utils.objectUtils.extend({
      url: "/settings/downloadChapter/:id",
      cache:false
    }, getTemplateUrlAndController(gxb.controllers.profiles.downloadChapterCtrlFullName)));

      //我的收藏
      registerRouter("settings_collection", gxb.utils.objectUtils.extend({
        url: "/settings/collection",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.profiles.collectionCtrlFullName)));

      //关于我们
      registerRouter("settings_about_aboutOur", gxb.utils.objectUtils.extend({
        url: "/settings/about/aboutOur"
      }, getTemplateUrlAndController(gxb.controllers.profiles.aboutOurCtrlFullName)));

      //职业测试
      registerRouter("trade_test", gxb.utils.objectUtils.extend({
        cache:false,
        url: "/trade/test"
      }, getTemplateUrlAndController(gxb.controllers.founds.tradeTestCtrlFullName)));

      //职业测试开始做题
      registerRouter("trade_topic", gxb.utils.objectUtils.extend({
        cache:false,
        url: "/trade/topic"
      }, getTemplateUrlAndController(gxb.controllers.founds.tradeTopicCtrlFullName)));

      //职业测试结果
      registerRouter("test_result", gxb.utils.objectUtils.extend({
        cache:false,
        url: "/test/result"
      }, getTemplateUrlAndController(gxb.controllers.founds.testResultCtrlFullName)));

      //引导页面
      registerRouter("start_up",gxb.utils.objectUtils.extend({
        url:"/startUp",
        cache:false
      },getTemplateUrlAndController(gxb.controllers.courses.startUpCtrlFullName)));

      //升级引导页面
      registerRouter("guide",gxb.utils.objectUtils.extend({
        url:"/guide",
        cache:false
      },getTemplateUrlAndController(gxb.controllers.courses.guideCtrlFullName)));


      //帮助中心
      registerRouter("help_center", gxb.utils.objectUtils.extend({
        cache:true,
        url: "/settings/helpCenter"
      }, getTemplateUrlAndController(gxb.controllers.profiles.helpCenterCtrlFullName)));

      //帮助中心加公众号
      registerRouter("help_add", gxb.utils.objectUtils.extend({
        cache:true,
        url: "/settings/helpAdd"
      }, getTemplateUrlAndController(gxb.controllers.profiles.helpAddCtrlFullName)));


      //帮助中心列表点击进入具体的问题
      registerRouter("help_question", gxb.utils.objectUtils.extend({
        cache:true,
        url: "/help/question/:title/:helpCenterId"
      }, getTemplateUrlAndController(gxb.controllers.profiles.helpQuestionCtrlFullName)));

      //帮助中心具体的问题答案
      registerRouter("help_answer", gxb.utils.objectUtils.extend({
        cache:true,
        url: "/help/answer/:bodyId"
      }, getTemplateUrlAndController(gxb.controllers.profiles.helpAnswerCtrlFullName)));

      //帮助中心搜索
      registerRouter("help_search", gxb.utils.objectUtils.extend({
        url: "/help/search",
        cache:true
      }, getTemplateUrlAndController(gxb.controllers.profiles.helpSearchCtrlFullName)));


      //学前必读
      registerRouter("course_preReading", gxb.utils.objectUtils.extend({
        url: "/course/preReading/:id",
        cache:true
      }, getTemplateUrlAndController(gxb.controllers.learning.preReadingCtrlFullName)));

      //iframe
      registerRouter("preview_doc", gxb.utils.objectUtils.extend({
        url: "/course/previewdoc",
        cache:false
      }, getTemplateUrlAndController(gxb.controllers.courses.outerLinkCtrlFullName)));

      if (window.localStorage['installed']==undefined){
       
          $urlRouterProvider.otherwise("/guide");
      
      }else{
        
        $urlRouterProvider.otherwise("/home/course");
      
      }


      // $locationProvider.html5Mode(true).hashPrefix('');

      $ionicConfigProvider.platform.ios.tabs.position('bottom');
      $ionicConfigProvider.platform.android.tabs.style('standard');
      $ionicConfigProvider.platform.android.tabs.position('bottom');

      $ionicConfigProvider.platform.ios.navBar.alignTitle('center');

      $ionicConfigProvider.platform.android.navBar.alignTitle('center');

      $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
      $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

      $ionicConfigProvider.platform.ios.views.transition('ios');
      $ionicConfigProvider.platform.android.views.transition('android');



    }
  ])
})(window);
