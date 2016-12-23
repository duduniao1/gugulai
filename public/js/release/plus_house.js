/**
 * Created by Administrator on 2016/12/23 0023.
 */
function testVal(){
    if($('.input01').val() != '' && $('.input02').val() != ''){
        $('.btn' ).on('tap', function(){
            $('.mask' ).show();
            $('.release_alert' ).show();
        })
    }

}
testVal();