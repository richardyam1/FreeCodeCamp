$(document).ready(function(){

	var input = "";
	var math = 0;
	var equation = "";
	var decimal = false;
	$("#input").html(0);
	$("#equation").html(0);

	$("#clear_all").on("click", function(){
		 input = "";
	     equation = "";
		$("#input").html(0);
	    $("#equation").html(0);
	});

	$("#clear_one").on("click", function(){
		 input = "";
		$("#input").html(0);
	});

	$("#nine").on("click", function(){		
		input += 9;
		$("#input").html(input);
	});

	$("#eight").on("click", function(){
		input += 8;
		$("#input").html(input);
	});

	$("#seven").on("click", function(){
		input += 7;
		$("#input").html(input);
	});

	$("#six").on("click", function(){
		input += 6;
		$("#input").html(input);
	});

	$("#five").on("click", function(){
		input += 5;
		$("#input").html(input);
	});

	$("#four").on("click", function(){
		input += 4;
		$("#input").html(input);
	});

	$("#three").on("click", function(){
		input += 3;
		$("#input").html(input);
	});

	$("#two").on("click", function(){
		input += 2;
		$("#input").html(input);
	});

	$("#one").on("click", function(){
		input += 1;
		$("#input").html(input);
	});

	$("#zero").on("click", function(){
		input += 0;
		$("#input").html(input);
	});

	$("#decimal").on("click", function(){
		if (decimal == false){
			input += ".";
			$("#input").html(input);
			decimal = true;
		}
	});

	$("#plus").on("click", function(){
		math = parseInt(input);
		input = "";
		$("#input").html("+");
		
	});

	$("#minus").on("click", function(){
		input = "";
		$("#input").html("-");
		
	});

	$("#multiply").on("click", function(){
		input = "";
		$("#input").html("x");

	});

	$("#divide").on("click", function(){
		input = "";
		$("#input").html("÷");

	});

	$("#equal").on("click", function(){
		input = "";
		$("#input").html(math.toString());
	});



});