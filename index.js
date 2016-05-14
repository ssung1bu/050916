$(document).ready(
	function(){
	$('h1').animate( {
	opacity: 0.25,
	width: "70%"
	}, 2000,  

	function(){
		$('h1').fadeOut(2000);
	}
	)

	var button = $("#button-1");
	button.click(function(){
		var value = $("#field-1").val();
		//display(value);
		display("");
	});
	$('#button-2').click(function(){
		var value = $("#field-2").val();
		//display(value);
		display("");
	});
	$('#button-3').click(function(){
		$("#display").empty()
	});
	function display(argument){
		$("#display").append("<li class='thingy'>" + argument + "</li>");
	}

});
	