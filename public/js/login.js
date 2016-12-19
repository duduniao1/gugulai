var inpt01=document.getElementById("inpt01");
var inpt02=document.getElementById("inpt02");
var login_box_login=document.getElementsByClassName("login_box_login");
window.onload(function(){
	if(inpt01.value!=""){
		login_box_login.style.background="#EA5404";
		console.log("1")
	}
});
