$(document).ready(function(){
	$("#tb1").css("display", "none");
	$("#fm1").css("display", "none");
	$("#d2").css("display", "none");
	$('#p1').css("color","black");

	$('#b1').click(function(){
		var a = $("#t1").val();    
		if(a%2==0){
			$("#d2").css("display", "block");
			$("#tb1").css("display", "inline-block");
			$("#fm1").css("display", "none");

		}
		else{
			$("#d2").css("display", "block");
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
		$('#d1').css("background-color","rgba(0, 0, 0, 0)");
		$('#t1').val('');
		$("#tb1").hide();
		$("#fm1").hide();
		$("#d2").hide();
		$('#p1').css("color","black");

	});
	$('#b6').click(function(){
		if(($('#d1').css("background-color"))=="rgb(0, 0, 255)"){
				$('#d1').css("background-color","green");
		}
		else if(($('#d1').css("background-color"))=="rgb(0, 128, 0)"){
				$('#d1').css("background-color","blue");
		}
		else if(($('#d1').css("background-color"))=="rgba(0, 0, 0, 0)"){
				$('#d1').css("background-color","black");
				$('#p1').css("color","yellow");
				


		}	
		//alert($('#d1').css("background-color"));	
		
	});

});
