$(document).ready(function(){

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
});