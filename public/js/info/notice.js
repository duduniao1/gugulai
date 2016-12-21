var message=document.getElementById("message");
var notice=document.getElementById("notice");
var needs=document.getElementById("needs");
var back=document.getElementsByClassName('.header::before')
	notice.addEventListener('touchend',function(){
		location.href = 'notice.html'
	});
	needs.addEventListener('touchend',function(){
		location.href = 'needs.html'
	});
	message.addEventListener('touchend',function(){
		location.href = 'message.html'
	});
