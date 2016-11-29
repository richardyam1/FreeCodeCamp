$(document).ready(function(){
	var on = false;
	var start = false;
	var strict = false
	var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
	var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
	var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
	var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

	$("#green").click(function(){
		greenSound.play();
	
	});

	$("#red").click(function(){
		redSound.play();
	});

	$("#yellow").click(function(){
		yellowSound.play();
	});

	$("#blue").click(function(){
		blueSound.play();
	});

	$("#powerSwitch").click(function(){
		if(on === false){
			document.getElementById("switch").style.marginLeft = "50px";
			on = true;
		}
		else if(on === true){
			document.getElementById("switch").style.marginLeft = "5px";
			on = false;
		}
	});

	$("#start").click(function(){
		if(start === false){
			document.getElementById("start").style.backgroundColor = "green";
			start = true;
		}
		else if(start === true){
			document.getElementById("start").style.backgroundColor = "red";
		}
	});
});