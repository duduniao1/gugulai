/**
 * Created by Administrator on 2016/12/19 0019.
 */

var $select_pay=$('.select_pay');
var $select_pay_list=$('.select_pay_list');
var $select_pay_cell=$('.select_pay_cell');
var $house_style=$('.house_style');
var $box_point_cell=$('.box_point_cell');
$select_pay.on('tap',function(){
	if($select_pay_list.hasClass('active')){
		$select_pay_list.removeClass('active')
	}else{
		$select_pay_list.addClass('active')
	}

});
$select_pay_cell.on('tap',function(){
	var $self = $( this );
	var text = $self.text();
	$select_pay_cell.removeClass( 'active' );
	$self.addClass( 'active' );
	$select_pay.text(text);
	//$select_pay_list.removeClass('active');
	//console.log(text);
	console.log( $select_pay.value)
});
$house_style.on('tap',function(){
	var $self=$(this);
	if($self.hasClass('active')){
		$self.removeClass('active')
	}else{
		$self.addClass('active')
	}
});