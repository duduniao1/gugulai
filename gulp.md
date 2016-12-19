# gulp用自动化工具增强你的工作流程

* 易于使用

 通过代码优于配置的策略，Guip让简单的任务简单，复杂的任务可管理
   
* 构建快速

   利用Node.js流的为例，你可以快速构建项目并减少频繁的IO操作

* 插件高品质

   Guip严格的插件指，南确保插件如你期望的那样简洁高品质的工作

* 易于学习 
   
   通过最少的API，掌握Guip毫不费力，构建工作尽在掌握：如同一系列流管理。
   
* gulp安装
```
   npm install gulp -g          //全局安装
   npm install gulp --save-dev  //作为项目的开发依赖安装
```  
* 接口说明
```
    gulp提供了4个
```
# gulp 基本操作
    * gulp 基本命令
    ```
        gulp.task       创建一个任务
        gulp.src        获取要处理的文件或目录（特定匹配模式）   
        gulp.dest       处理后的文件输出
        gulp.watch      动态监听文件的更改
    ```
    * gulpfile.js       gulp的配置文件（特定的，必须这个名字）
    * 执行 gulp
    ```
    gulp<taskname>
    ```
    //获取要编译的文件
    	//指定一个文件
    	//gulp.src('./stylus/index.styl')
    	//指定多个文件，
    	//gulp.src('./stylus/index.styl','./stylus/css.styl')
    	//指定一个目录下所有（不包括子文件）
    	//gulp.src('./stylus/*.styl')