//获取轮播每个元素
var $slider = $('.slider_block');
//获取轮播容器
var $sliderCon = $('.slider_container');
//获取所有的点
var $point = $('.point_block');
var $down_box=$('.down-box' );
//获取屏幕宽度
var wd = $(window).width();
//获取轮播个数
var lg = $slider.length;
//计算容器宽度
var allWd = wd * lg;
//计算元素高度
var hg = wd * 0.85;
//设置容器宽度
$sliderCon.width(allWd);
//设置元素宽高
$slider.width(wd).height(hg);

//表示当前元素
var swipeNow = 0;
var slideTime;
//添加滑动事件
$sliderCon.on('swipeLeft', function(){
	console.log('touch left');
	clearTimeout(slideTime);
	if(swipeNow < lg - 1){
		//计算滑动距离，改变当前元素
		var swipeWd = (++swipeNow) * wd;
		$sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
		//改变点的选中
		$point.removeClass('active').eq(swipeNow).addClass('active');
		autoSwipe();
	}
});
$sliderCon.on('swipeRight', function(){
	console.log('touch right');
	clearTimeout(slideTime);
	if(swipeNow > 0){
		//计算滑动距离，改变当前元素
		var swipeWd = (--swipeNow) * wd;
		$sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
		//改变点的选中
		$point.removeClass('active').eq(swipeNow).addClass('active');
		autoSwipe();
	}
});

function autoSwipe(){
	slideTime = setTimeout(function(){
		if(swipeNow < lg - 1){
			//计算滑动距离，改变当前元素
			var swipeWd = (++swipeNow) * wd;
			$sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
			//改变点的选中
			$point.removeClass('active').eq(swipeNow).addClass('active');
			autoSwipe();
		}
	}, 2000);
}
autoSwipe();

var $queyrBlock = $('.query_block' );
$queyrBlock.on('tap', function(){
	var $self = $(this);
	var index = $self.index();
	$('.slider_box' ).hide();
	$('.header_little' ).hide();
	$('.search_box' ).hide();
	$('.header' ).addClass("active");
	$('.query_box').addClass("active");
	$('.search_title_box' ).show();
	if($self.hasClass('active')){
		$self.removeClass('active');
		$('.down-box').eq(index ).children().hide();
	}else{

		$queyrBlock.removeClass('active');
		$down_box.removeClass('doing');
		$self.addClass('active');
		$down_box.children().hide();
		$down_box.eq(index).children().show();
		$down_box.eq(index ).addClass('doing')
	}
});
$(window).on('swipeUp',function(){
	$('.slider_box' ).hide();
	$('.header_little' ).hide();
	$('.search_box' ).hide();
	$('.header' ).addClass("active");
	$('.query_box').addClass("active");
	$('.search_title_box' ).show();

});
$(window).on('longTap',function(){
	$('.slider_box' ).show();
	$('.header_little' ).show();
	$('.search_box' ).show();
	$('.header' ).removeClass("active");
	$('.query_box').removeClass("active");
	$('.search_title_box' ).hide();
	$down_box.children().hide();
	$queyrBlock.removeClass('active');
	$queyrBlock.on();

});
var $area = $('.area' );
$area.on('tap', function(){
	var $self = $(this);
	var index = $self.index();
	$( '.area' ).removeClass( 'active' );
	$self.addClass( 'active' );
	console.log($('.down_cell'));
	var $new_down_cell=$('.doing' ).children().eq(1);
	$new_down_cell.children().hide();
	$new_down_cell.children().eq(index ).show();

});
$('.query_price').on('tap', function(){
	var $self = $(this);
	if($self.hasClass('active-down')){
		console.log('up');
		$self.removeClass('active-down').addClass('active-up');
	}else if($self.hasClass('active-up')){
		console.log('normal');
		$self.removeClass('active-up');
	}else{
		console.log('down');
		$self.addClass('active-down');
	}
});
var $bbox=$('.block_box');
$bbox.on('tap',function(){
	var $self = $(this);
	$bbox.removeClass('active');
	$self.addClass('active')
});
var $info_title=$('.info-title');
$info_title.on('tap',function(){
	var $self = $(this);
	if($self.hasClass('active')){
		$self.removeClass('active')
	}else{
		$self.addClass('active')
	}
});
