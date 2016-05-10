$(document).ready(
	function(){
		//$('h1').css('background-color','green');
	var button = $("#button-1");
	button.click(function(){
		var value = $("#field-1").val();
		$("#display").append("<li>" + value + "</li>");

		});
	
	});
	