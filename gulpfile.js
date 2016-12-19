//npm install gulp -g 			先全局安装
// npm install gulp-stylus --save-dev  编译sytlus的插件
// npm install gulp-minify-css --save-dev  压缩css插件

//首先引入gulp模块
var gulp=require('gulp');
//引入gulp-stylus插件
var stylus=require('gulp-stylus');
//引入压缩css的文件
var minifycss=require('gulp-minify-css');
//gulp-uglify
var uglify=require('gulp-uglify');
var browserSync=require('browser-sync' ).create();
var reload=browserSync.reload;

var nodemon=require('gulp-nodemon');
gulp.task('nodemon',function(ab){
	var ft=false;
	return nodemon({
		script:'./app.js'
	} ).on('start',function(){
		if(!ft){
			ab();
			ft = true
		}
	})
});
gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy:{
			target:'http://127.0.0.1:16924'
		},
		files:['*'],
		port:9888,
		open:false

})

});

//创建一个编译stylus的任务
gulp.task("stylus",function(){
	//制定一个目录及所有子目录下的文件
	return gulp.src('./stylus/**/*.styl')
		.pipe(stylus())           //执行 stylus编译
		//输出边以后的文件
		.pipe(gulp.dest('./public/css'))
});

gulp.task('minifycss',['stylus'],function(){
	return gulp.src('./public/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./public/mincss'))
});
gulp.task('uglify',function(){
	return gulp.src('./public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minjs'))
});
gulp.task('watcher',['stylus','uglify','browserSync'],function(){
	gulp.watch('./stylus/**/*.styl',['stylus']);

	gulp.watch('./public/js/**/*.js',['uglify']);

	gulp.watch([
		'./public/css/**/*.css',
		'./public/minjs/**/*.js'
		]).on('change',function(){
		reload();
	});
});
//创建一个defaul任务
gulp.task('default',function(){
	console.log('this is default')
});