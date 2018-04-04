cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cn.jpush.phonegap.JPushPlugin/www/JPushPlugin.js",
        "id": "cn.jpush.phonegap.JPushPlugin.JPushPlugin",
        "clobbers": [
            "jPushPlugin"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.comment/www/Mcomment.js",
        "id": "com.gaoxiaobang.comment.MCommentPlugin",
        "clobbers": [
            "cordova.plugins.Comment"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.download/www/MDownload.js",
        "id": "com.gaoxiaobang.download.MDownloadPlugin",
        "clobbers": [
            "cordova.plugins.MDownloadPlugin"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.sharedpreferences/www/MPreferences.js",
        "id": "com.gaoxiaobang.sharedpreferences.Preferences",
        "clobbers": [
            "cordova.plugins.Preferences"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.update/www/Mupdate.js",
        "id": "com.gaoxiaobang.update.MUpdatePlugin",
        "clobbers": [
            "cordova.plugins.MUpdatePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
        "id": "cordova-plugin-app-version.AppVersionPlugin",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "id": "cordova-plugin-dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "id": "cordova-plugin-file.DirectoryEntry",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "id": "cordova-plugin-file.DirectoryReader",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "id": "cordova-plugin-file.Entry",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/File.js",
        "id": "cordova-plugin-file.File",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "id": "cordova-plugin-file.FileEntry",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "id": "cordova-plugin-file.FileError",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "id": "cordova-plugin-file.FileReader",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "id": "cordova-plugin-file.FileSystem",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "id": "cordova-plugin-file.FileUploadOptions",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "id": "cordova-plugin-file.FileUploadResult",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "id": "cordova-plugin-file.FileWriter",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "id": "cordova-plugin-file.Flags",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "id": "cordova-plugin-file.LocalFileSystem",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "id": "cordova-plugin-file.Metadata",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "id": "cordova-plugin-file.ProgressEvent",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "id": "cordova-plugin-file.fileSystems"
    },
    {
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "id": "cordova-plugin-file.requestFileSystem",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "id": "cordova-plugin-file.isChrome",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
        "id": "cordova-plugin-file.androidFileSystem",
        "merges": [
            "FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
        "id": "cordova-plugin-file.fileSystems-roots",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "id": "cordova-plugin-file.fileSystemPaths",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
        "id": "cordova-plugin-file-transfer.FileTransferError",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
        "id": "cordova-plugin-file-transfer.FileTransfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "id": "cordova-plugin-x-toast.tests"
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "file": "plugins/org.pbernasconi.progressindicator/www/progressIndicator.js",
        "id": "org.pbernasconi.progressindicator.ProgressIndicator",
        "clobbers": [
            "ProgressIndicator"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.live/www/MLive.js",
        "id": "com.gaoxiaobang.live.MLivePlugin",
        "clobbers": [
            "cordova.plugins.Live"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.network/www/Mnetwork.js",
        "id": "com.gaoxiaobang.network.MnetworkPlugin",
        "clobbers": [
            "cordova.plugins.Network"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.imagecache/www/Mimage.js",
        "id": "com.gaoxiaobang.imagecache.MimageCachePlugin",
        "clobbers": [
            "cordova.plugins.image"
        ]
    },
    {
        "file": "plugins/com.telerik.plugins.nativepagetransitions/www/NativePageTransitions.js",
        "id": "com.telerik.plugins.nativepagetransitions.NativePageTransitions",
        "clobbers": [
            "window.plugins.nativepagetransitions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.location/www/MLocation.js",
        "id": "com.gaoxiaobang.location.MLocationPlugin",
        "clobbers": [
            "cordova.plugins.MLocation"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.record/www/MRecord.js",
        "id": "com.gaoxiaobang.record.MRecordPlugin",
        "clobbers": [
            "cordova.plugins.MRecord"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.paly/www/Mplay.js",
        "id": "com.gaoxiaobang.paly.MPlayPlugin",
        "clobbers": [
            "cordova.plugins.MPlayPlugin"
        ]
    },
    {
        "file": "plugins/com.gaoxiaobang.keyboards/www/MKeyboards.js",
        "id": "com.gaoxiaobang.keyboards.MKeyboardsPlugin",
        "clobbers": [
            "cordova.plugins.image"
        ]
    },
     {
          "file": "plugins/com.gaoxiaobang.qrcode/www/QRcode.js",
          "id": "com.gaoxiaobang.qrcode.MQRcodePlugin",
          "clobbers": [
              "cordova.plugins.MQRcodePlugin"
          ]
     },
     {
          "file": "plugins/com.gaoxiaobang.share/www/Share.js",
          "id": "com.gaoxiaobang.share.MSharePlugin",
          "clobbers": [
              "cordova.plugins.MSharePlugin"
          ]
     },
     {
          "id": "com.gaoxiaobang.browser.MBrowserPlugin",
          "file": "plugins/com.gaoxiaobang.browser/www/MBrowser.js",
          "pluginId": "com.gaoxiaobang.browser",
          "clobbers": [
              "cordova.plugins.MBrowserPlugin"
          ]
     },
     {
          "file": "plugins/Umeng/www/Umeng.js",
          "id": "Umeng.Umeng",
          "clobbers": [
              "MobclickAgent"
          ]
     },
     {
          "file": "plugins/com.gaoxiaobang.online/www/Online.js",
          "id": "com.gaoxiaobang.online.MOnlinePlugin",
          "clobbers": [
              "cordova.plugins.MOnlinePlugin"
          ]
     },
      {
          "file": "plugins/com.gaoxiaobang.headimage.www/Headimage.js",
          "id": "com.gaoxiaobang.headimage.MHeadImagePlugin",
          "clobbers": [
              "cordova.plugins.MHeadImagePlugin"
          ]
      },
    {
        "file": "plugins/com.gaoxiaobang.article/www/Article.js",
        "id": "com.gaoxiaobang.article.ArticlePlugin",
        "clobbers": [
            "cordova.plugins.ArticlePlugin"
        ]
    },
     {
         "file": "plugins/com.gaoxiaobang.project.www/Project.js",
         "id": "com.gaoxiaobang.project.ProjectPlugin",
         "clobbers": [
             "cordova.plugins.ProjectPlugin"
         ]
     }

];
module.exports.metadata = 
// TOP OF METADATA
{
    "cn.jpush.phonegap.JPushPlugin": "2.1.0",
    "com.gaoxiaobang.comment": "0.0.1",
    "com.gaoxiaobang.download": "0.0.1",
    "com.gaoxiaobang.sharedpreferences": "0.0.1",
    "com.gaoxiaobang.update": "0.0.1",
    "cordova-plugin-app-version": "0.1.8",
    "cordova-plugin-console": "1.0.2",
    "cordova-plugin-device": "1.1.1",
    "cordova-plugin-dialogs": "1.2.0",
    "cordova-plugin-file": "4.1.1",
    "cordova-plugin-file-transfer": "1.5.0",
    "cordova-plugin-inappbrowser": "1.2.1",
    "cordova-plugin-network-information": "1.2.0",
    "cordova-plugin-statusbar": "2.1.1",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-x-toast": "2.4.2",
    "cordova-sqlite-storage": "0.8.4-dev",
    "ionic-plugin-keyboard": "1.0.8",
    "org.pbernasconi.progressindicator": "1.1.0",
    "com.gaoxiaobang.live": "0.0.1",
    "com.gaoxiaobang.network": "0.0.1",
    "com.gaoxiaobang.imagecache": "0.0.1",
    "com.telerik.plugins.nativepagetransitions": "0.6.4",
    "cordova-plugin-splashscreen": "3.2.2",
    "com.gaoxiaobang.location": "0.0.1",
    "com.gaoxiaobang.record": "0.0.1",
    "com.gaoxiaobang.paly": "0.0.1",
    "com.gaoxiaobang.keyboards": "0.0.1",
    "com.gaoxiaobang.qrcode": "0.0.1",
    "com.gaoxiaobang.share": "0.0.1",
    "com.gaoxiaobang.online": "0.0.1",
    "Umeng": "1.0.0",
    "com.gaoxiaobang.headimage": "0.0.1",
    "com.gaoxiaobang.article": "0.0.1",
    "com.gaoxiaobang.project": "0.0.1"
};
// BOTTOM OF METADATA
});