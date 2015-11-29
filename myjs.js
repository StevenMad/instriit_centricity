
$(document).ready(function() {
	var click=0;
	$("#menu").addClass("top");
	$("#map").addClass("top");
	$("#menu").click(function(){
		if (click == 0){
			$("#map").css("width", "68%");
			$("#menu").css("width","30%");
			click = 1;
		}
		else{
			$("#menu").css("width","4%");
			$("#map").css("width", "95%");
			click = 0;
		}
	});
	$("#map").click(function(){
			
	});
});
