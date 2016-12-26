/**
 * Created by Administrator on 2016/12/26 0026.
 */
$('.bt_box').on('tap', function(){
    $('.mask' ).show();
    $('.confirm').on('tap', function(){
        location.href = '../login/login.html'
    });
    $('.title' ).on('tap', function(){
        $('.mask' ).hide();
        $('.cancel_alert' ).hide();
    })
});