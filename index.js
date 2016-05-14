$(document).ready(
	function(){
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
	