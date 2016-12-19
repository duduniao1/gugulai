# gulp 基本流程
  * 在项目根目录创建gulpfile.js文件
  * 安装gulp
    ```
    npm install gulp -g 先全局安装
    npm install gulp --save-dev     安装到项目依赖
    ```
  * 安装 插件
    ```
    npm install gulp-stylus --save-dev  编译sytlus的插件
    npm install gulp-minify-css --save-dev  压缩css插件
    
    npm install gulp-uglify --save-dev      压缩js的插件                          
    ```
  * 在gulpfile.js编写
  
            //先引入gulp和gulp-stylus（或其他插件）
            var gulp=require('gulp')
            var stylus=require('gulp-stylus')
            var minifycss=require('gulp-minify-css')
             var uglify=require('uglify')
             
            //创建编译 stylus的任务
            gulp.task("stylus",function(){
            //需要编译的文件
            return gulp.src('./stylus/**/*.styl')
                    //执行 stylus编译方法
                    .pipe(stylus())
                    //边以后输出的目录
                    .pipe(gulp.dest('./public/css'))
            });
   * 压缩css文件
       ``` 
            gulp.task('minify',function(){
            return gulp.src('./public/**/*.css')//需要压缩的文件
                    .pipe(minifycss())  
                    .pipe(gulp.dest('./public/mincss')
            })
        ```   
  * 压缩css文件
      ``` 
         gulp.task('uglify',function(){
            return gulp.src('./public/**/*.css')//需要压缩的文件
                    .pipe(minifycss())  
                    .pipe(gulp.dest('./public/mincss')
              })
       ```   
   * 添加前执行任务
   gulp.task('minify',['stylus'],function(){
        ...
        })
        
   * 监听文件变更
        ```
        gulp.task('watcher',function(){
            gulp.watch('./stylus/**/.styl)
        })
        ```
  * 通过
        npm install gulp-nodemon --save-dev
