$(document).ready(
	function(){
		//$('h1').css('background-color','green');
	var button = $("#button-1");
	button.click(function(){
		var value = $("#field-1").val();
		display(value);
		});
	$('#button-2').click(function(){
		var value = $("#field-2").val();
		display(value);
	});

	function display(argument){
		$("#display").append("<li class='thingy'>" + argument + "</li>");
	}
});
	