var personal=document.getElementById("me");
var first=document.getElementById("first");
var ordered=document.getElementById("ordered");
var add=document.getElementById("add");
var messages=document.getElementById("messages");
personal.addEventListener('touchend',function(){
    location.href = '../info/personInfo.html'
});
first.addEventListener('touchend',function(){
    location.href = '../index/index.html'
});
add.addEventListener('touchend',function(){
    location.href = '../release/publish.html'
});
messages.addEventListener('touchend',function(){
    location.href = '../info/message.html'
});
ordered.addEventListener('touchend',function(){
    location.href = '../personal/order.html'
})