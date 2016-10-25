$(document).ready(function(){
	$("#tb1").css("display", "none");
	$("#fm1").css("display", "none");
	$('#b1').click(function(){
		var a = $("#t1").val();    
		if(a%2==0){
			$("#tb1").css("display", "inline-block");
			$("#fm1").css("display", "none");
		}
		else{
			$("#fm1").css("display", "inline-block");
			$("#tb1").css("display", "none");	
		}
	});

	$('#b2').click(function(){
		$("#fm1").css("display", "inline-block");
		$("#tb1").css("display", "none");
		
	});

	$('#b3').click(function(){
		$('#d1').css("background-color","blue");
	});

	$('#b4').click(function(){
		$('#d1').css("background-color","green");
	});

	$('#b5').click(function(){
		$('#d1').css("background-color","white");
		$('#t1').val('');
		$("#tb1").hide();
		$("#fm1").hide();
	});
	$('#b6').click(function(){
		alert($('#d1').css("background-color"));
	});

});
