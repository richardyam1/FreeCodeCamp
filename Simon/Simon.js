$(document).ready(function(){
	var on = false;
	var start = false;
	var strict = false;
	var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
	var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
	var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
	var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
	var round = 1;
	
		$("#green").click(function(){
			greenSound.play();
			document.getElementById("green").style.backgroundColor = "#2BFF4D";
			lightUp("green");
		});

		$("#red").click(function(){
			redSound.play();
			document.getElementById("red").style.backgroundColor = "#7F0000";
			lightUp("red");
		});

		$("#yellow").click(function(){
			yellowSound.play();
			document.getElementById("yellow").style.backgroundColor= "#E9E080";
			lightUp("yellow");

		});

		$("#blue").click(function(){
			blueSound.play();
			document.getElementById("blue").style.backgroundColor = "#5D72FF";
			lightUp("blue");
		});


	function lightUp(color){
		setTimeout(function(){
			document.getElementById(color).style.backgroundColor = color;
		},400);
	}

	$("#powerSwitch").click(function(){
		if(on === false){
			document.getElementById("switch").style.marginLeft = "50px";
			on = true;
		}
		else if(on === true){
			document.getElementById("switch").style.marginLeft = "5px";
			document.getElementById("start").style.backgroundColor = "red";
			document.getElementById("strict").style.backgroundColor = "yellow";
			start = false;
			strict = false;
			on = false;
			$("#roundNumber").text("--");
		}
	});

	$("#start").click(function(){
		if(start === false && on === true){
			document.getElementById("start").style.backgroundColor = "green";
			start = true;
			$("#roundNumber").text(round);
		}
		else if(start === true && on === true){
			document.getElementById("start").style.backgroundColor = "red";
			start = false;
		}
	});

	$("#strict").click(function(){
		if(strict === false && on === true){
			document.getElementById("strict").style.backgroundColor = "green";
			strict = true;
		}
		else if(strict === true && on === true){
			document.getElementById("strict").style.backgroundColor = "yellow";
			strict = false;
		}
	});
});