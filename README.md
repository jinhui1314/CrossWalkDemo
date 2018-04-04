# CrossWalkDemo
混合开发crosswalk创建Android工程

工作流程
安装Cordova命令行工具（CLI）

$ npm install -g cordova
检查Cordova的版本是否大于等于5.0.0:

$ cordova -v
5.0.0
创建一个Cordova样例应用，它可以被用来作为创建新项目的模板

$ cordova create hello com.example.hello HelloWorld
进入新创建的项目目录

$ cd hello
所有后续命令必须在该目录下运行（例如，hello）

添加Android作为目标平台

$ cordova platform add android
这样便可以将Cordova Android平台（版本大于等于4.0.0）添加到应用中。

安装Crosswalk的Webview插件

$ cordova plugin add cordova-plugin-crosswalk-webview
这条命令实现了将Crosswalk WebView以Cordova插件形式添加进应用。

　编译

 $ cordova build android
它会自动从Crosswalk项目的下载网站(https://download.01.org/crosswalk/releases/crosswalk/android/)上取到稳定版本的Crosswalk WebView库，并且针对X86和ARM架构分别编译。例如，编译一个HelloWorld项目会生成：

 /path/to/hello/platforms/android/build/outputs/apk/android-x86-debug.apk
 /path/to/hello/platforms/android/build/outputs/apk/android-armv7-debug.apk
至此，Crosswalk WebView库将会被嵌入到你的应用中。这大概会使APK的大小增加18MB

将前端代码使用webStorm工具进行gulp命令行操作后将生成的www文件拷贝到创建好的工程目录的assets目录下即可

