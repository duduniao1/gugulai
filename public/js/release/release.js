/**
 * Created by Administrator on 2016/12/19 0019.
 */

var $select_pay=$('.select_pay');
var $select_pay_list=$('.select_pay_list');
var $select_pay_cell=$('.select_pay_cell');
var $house_style=$('.house_style');
var $box_point_cell=$('.box_point_cell');
$('.search-input' ).on('focus', function(){
	$('.close-icon' ).show().on('tap', function(){
		$(this ).hide();
		$('.search-input' ).val( ' ' )
	});
});
$select_pay.on('tap',function(){
	if($select_pay_list.hasClass('active')){
		$select_pay_list.removeClass('active')
	}else{
		$select_pay_list.addClass('active')
	}

});
$select_pay_cell.on('tap',function(){
	var $self = $( this  );
	var text = $self.text();
	$select_pay_cell.removeClass( 'active' );
	$self.addClass( 'active' );
	$select_pay.text(text);
	//$select_pay_list.removeClass('active');
	//console.log(text);
	console.log( $select_pay.value)
});
$house_style.on('tap',function(){
	var $self=$(this).find($box_point_cell);
	var $all=($(this).parent()).find($box_point_cell);
	if($self.hasClass('active')){
		$self.removeClass('active')
	}else{
		$all.removeClass('active');
		$self.addClass('active');
	}
});

$('.release-block').on('tap', function(){
	$('.mask' ).show();
	$('.release_alert' ).show();
	//$('.mask' ).show();
	$('.confirm' ).on('tap', function(){
		location.href = '../release/release_detail.html'
	})
});

$('.icon-back').on('tap', function(){
	$('.mask' ).show();
	$('.cancel_alert' ).show();
	$('.cancel' ).on('tap', function(){
		$('.mask' ).hide();
		$('.cancel_alert' ).hide();
	});
	$('.sure' ).on('tap', function(){
		location.href = '../release/release_detail.html'
	});
	$('.no_true').on('tap',function(){
		location.href = '../release/publish.html'
	})
});


$('.house-cell .radio-block').on('tap', function(){
	$(this).toggleClass('selected');

});
//新增楼盘
$('.add-house').on('tap', function(){
	location.href = '../release/plus_house.html'
});