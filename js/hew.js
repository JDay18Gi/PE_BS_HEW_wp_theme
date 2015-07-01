

$(document).ready(function() {
	$(".navbar .nav-pills li a").on("mouseover", function(){
		$("i", this).css("color", "#fbdb4a");
	});
	$(".navbar .nav-pills li a").on("mouseleave", function(){
		$("i", this).css("color", "#323232");
	});
});

