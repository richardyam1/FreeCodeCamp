$(document).ready(function(){
	//Task: Make clear button clear last element of equation
	var input = 0;
	var equation = "";
	var decimal = false;
	var max = 1;
	var math_sign = true;
	var answer = 0;
	function reset(){
		input = 0;
		max = 1;
		math_sign = true;
		decimal = false;
	}
	$("#input").text(0);
	$(".number").on("click",  function(){
		if (max < 8){
			if(input === 0) {
				input = $(this).attr('id');
			}
			else{
				input += $(this).attr('id');
				max ++;
			}
			//Starts equation over if number is pressed after equal key
			if(equation === answer && math_sign === false){
				equation = "";
			}
	
			$("#input").text(input);
			$("#equation").text(equation);
			math_sign = false;
		}
	});

	$("#clear_all").on("click", function(){	 	
	 	equation = "";
	 	reset();
		$("#input").text(0);
		$("#equation").text("");
	});

	$("#clear_input").on("click", function(){
		 reset();
		 math_sign = false;
		$("#input").text(0);
		$("equation").text(equation);
	});

	$(".zero").on("click", function(){
		if (max < 8){
		input += 0;
		equation += 0;
		$("#input").text(input);
		$("#equation").text(equation);
		max++;
	   }
	});

	$("#decimal").on("click", function(){
		if (decimal == false  && max < 8){
			input += ".";
			equation += ".";
			$("#input").text(input);
			$("#equation").text(equation);
			decimal = true;
		}
	});
	$("#plus").on("click", function(){		
		if (math_sign === false){
			equation += input;	
			equation = +eval(equation).toFixed(2);		
			equation += ( " + ");
			$("#input").text("+");
			$("#equation").text(equation);
			reset();
		}
	});

	$("#minus").on("click", function(){	
		if(math_sign === false){	
			equation += input;
			equation = +eval(equation).toFixed(2);		
			equation += (" - ");
			$("#input").text("-");
			$("#equation").text(equation);
			reset();		
		}
	});

	$("#multiply").on("click", function(){
		if(math_sign == false){
			equation += input;
			equation = +eval(equation).toFixed(2);		
			equation += (" * ");
			$("#input").text("*");
			$("#equation").text(equation);
			reset();
		}
	});

	$("#divide").on("click", function(){	
		if(math_sign === false){	
			equation += input;
			equation = +eval(equation).toFixed(2);		
			equation += (" / ");
			$("#input").text("/");
			$("#equation").text(equation);
			reset();
		}

	});

	$("#equal").on("click", function(){
		//Plus sign drops extra zeros
		equation += input;
		answer = +eval(equation).toFixed(2);		
		$("#input").text(answer);
		$("#equation").text(answer);
		equation = answer;
		reset();
		input = "";
		math_sign = false;
		
	});



});