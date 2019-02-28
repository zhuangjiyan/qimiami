function checkform(){
	var emailPatt = /([\w\-]+\@[\w\-]+\.[\w\-]+)/;
	var phonePatt = /^1[34578]\d{9}$/;
	if(!(emailPatt.test($("#email").val()) && phonePatt.test($("#phone").val()) && $("#name").val() != "")){
		console.log($("#phone").val());	
		alert("请正确填写信息");
		return false;
	}else{
		return true;
	}
}

$(function(){
	$(window).scroll(function(){
		if($(".navbar").offset().top > 50){
			$(".fixed-top").addClass("top-nav");
			$(".navbar-brand").css("margin", "0px");
			$("[change]").css({"padding-top":"15px","padding-bottom":"15px"});
		}else{
			$(".fixed-top").removeClass("top-nav");
			$(".navbar-brand").css("margin", "10px 0px");
			$("[change]").css({"padding-top":"25px","padding-bottom":"25px"});
		}
	});
});	
	
$(function(){
	var emailPatt = /([\w\-]+\@[\w\-]+\.[\w\-]+)/;
	var phonePatt = /^1[34578]\d{9}$/;
	$("#email").blur(function(){
		var email = $(this).val();
		if(!emailPatt.test(email)){
			$(".form-group:last").addClass("has-error");
		}else{
			$(".form-group:last").removeClass("has-error");
		}
	});
	
	$("#name").blur(function(){
		var name = $(this).val();
		if(name == ""){
			$(".form-group:first").addClass("has-error");
		}else{
			$(".form-group:first").removeClass("has-error");
		}
	});
	
	$("#phone").blur(function(){
		var phone = $(this).val();
		if(!phonePatt.test(phone)){
			$(".form-group:odd").addClass("has-error");
		}else{
			$(".form-group:odd").removeClass("has-error");
		}
	});
});