$(document).ready(function(){

	var input = 0
	var equal = 0;
	var equation = "";
	var decimal = false;
	var max = 1;
	$("#input").html(input);
	$("#equation").html(0);
	$(".number").on("click",  function(){
		if (max < 8){
			if(input == 0){
				input = $(this).attr('id');
			}
			else{
				input += $(this).attr('id');
				max ++;
			}

			$("#input").html(input);
		}

		
	});

	$("#clear_all").on("click", function(){
		input = 0
	 	equal = 0;
	 	equation = "";
	 	decimal = false;
	 	max = 1;
		$("#input").html(input);
		$("#equation").html(0);
	});

	$("#clear_input").on("click", function(){
		 input = 0;
		 max = 1;
		 decimal = false;
		$("#input").html(input);
	});

	$(".zero").on("click", function(){
		if (input != 0 && max < 8){
		input += 0;
		$("#input").html(input);
		max++;
	   }
	});

	$("#decimal").on("click", function(){
		if (decimal == false  && max < 8){
			input += ".";
			$("#input").html(input);
			decimal = true;
		}
	});
	$("#plus").on("click", function(){		
		if (equal == 0){
			equal = input;
		}
		else{
			equal += input;
		}
		equation += (input + " + ");
		$("#input").html("+");
		$("#equation").html(equation);
		input = 0;
	});

	$("#minus").on("click", function(){	
		equation += (input + " - ");
		if (equal == 0){
			equal = input;
		}
		else{
			equal -= input;
		}
		$("#input").html("-");
		$("#equation").html(equation);
		input = 0;		
	});

	$("#multiply").on("click", function(){
		if (equal == 0){
			equal = input;
		}
		else{
			equal *= input;
		}		
		equation += (input + " x ");
		$("#input").html("x");
		$("#equation").html(equation);
		input = 0;
	});

	$("#divide").on("click", function(){	
		if (equal == 0){
			equal = input;
		}
		else{
			equal = equal/input;
		}	
		equation += (input + " / ");
		$("#input").html("/");
		$("#equation").html(equation);
		input = 0;

	});

	$("#equal").on("click", function(){
		
		$("#input").html(equal);
		$("#equation").html(equal);
	});



});