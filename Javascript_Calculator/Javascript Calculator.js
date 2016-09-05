$(document).ready(function(){

	var input = "";
	var first_number = 0;
	var equation = "";
	var decimal = false;
	var max = 1;
	var math_sign = false;
	var answer = 0;
	function reset(){
		input = 0;
		max = 1;
		math_sign = false;
		decimal = false;
	}
	$("#input").text(0);
	$("#equation").text(0);
	$(".number").on("click",  function(){
		if (max < 8){
			if(input === 0) {
				input = $(this).attr('id');
			}
			else{
				input += $(this).attr('id');
				max ++;
			}
		
			$("#input").text(input);
		}
	});

	$("#clear_all").on("click", function(){
		
	 	first_number = 0;
	 	equation = "";
	 	reset();
		$("#input").text(0);
		$("#equation").text(0);
	});

	$("#clear_input").on("click", function(){
		 reset();
		$("#input").text(0);
	});

	$(".zero").on("click", function(){
		if (input != 0 && max < 8){
		input += 0;
		$("#input").text(input);
		max++;
	   }
	});

	$("#decimal").on("click", function(){
		if (decimal == false  && max < 8){
			input += ".";
			$("#input").text(input);
			decimal = true;
		}
	});
	$("#plus").on("click", function(){		
		if (math_sign === false){
			if (first_number == 0){
				first_number = input;
			}
			else{
				first_number += input;
			}
			equation += (input + " + ");
			$("#input").text("+");
			$("#equation").text(equation);
			reset();
		}
	});

	$("#minus").on("click", function(){	
		if(math_sign === false){
			if (first_number == 0){
				first_number = input;
			}
			else{
				first_number -= input;
			}
			equation += (input + " - ");
			$("#input").text("-");
			$("#equation").text(equation);
			reset();		
		}
	});

	$("#multiply").on("click", function(){
		if(math_sign == false){
			if (first_number == 0){
				first_number = input;
			}
			else{
				first_number *= input;
			}		
			equation += (input + " * ");
			$("#input").text("*");
			$("#equation").text(equation);
			reset();
		}
	});

	$("#divide").on("click", function(){	
		if(math_sign === false){
			if (first_number == 0){
				first_number = input;
			}
			else{
				first_number = first_number/input;
			}	
			equation += (input + " / ");
			$("#input").text("/");
			$("#equation").text(equation);
			reset();
		}

	});

	$("#equal").on("click", function(){
		equation += input;
		//Plus sign drops extra zeros
		answer = +eval(equation).toFixed(2);		
		$("#input").text(answer);
		$("#equation").text(answer);
		equation = answer;
		reset();
		input = "";
		
	});



});