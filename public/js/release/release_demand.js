/**
 * Created by Administrator on 2016/12/26 0026.
 */
$('.icon-back' ).on('tap', function(){
    $('.mask' ).show();
    $('.cancel_alert' ).show();
    $('.cancel' ).on('tap', function(){
        $('.mask' ).hide();
        $('.cancel_alert' ).hide();
    });
    $('.sure' ).on('tap', function(){
        history.back();
    })
});
$('.header-publish' ).on('tap', function(){
    $('.mask' ).css('background','#A7A7AA').show();
    $('.release_alert' ).show();
    $('#confirm').on('tap',function(){
        location.href = '../release/publish.html'
    })

})