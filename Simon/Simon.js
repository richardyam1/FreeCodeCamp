$(document).ready(function(){
	var on = false;
	var start = false;
	var strict = false;
	var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
	var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
	var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
	var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
	var round = 1;
	var cpuSequence = ["green", "red", "yellow", "blue"];
	var userSequence = [];
	
		$("#green").click(function(){
			lightUp("green");
		});

		$("#red").click(function(){
			lightUp("red");
		});

		$("#yellow").click(function(){
			lightUp("yellow");
		});

		$("#blue").click(function(){
			lightUp("blue");
		});

	function cpuPick(){
		var select = Math.floor((Math.random() * 10) + 1);
		switch(select){
			case 1:
				cpuSequence.push();
				break;
			case 2:
				cpuSequence.push();
				break;
			case 3:
				cpuSequence.push();
				break;
			case 4:
				cpuSequence.push();
				break;

		}

	}
	for(var i = 0; i < cpuSequence.length; i++){
		setTimeout(function(){
			lightUp(cpuSequence[i]);
		}, 500);
	}
	function lightUp(color){
		switch(color){
			case "green":
				greenSound.play();
				document.getElementById("green").style.backgroundColor = "#2BFF4D";
				break;
			case "red":
				redSound.play();
				document.getElementById("red").style.backgroundColor = "#7F0000";
				break;
			case "yellow":
				yellowSound.play();
				document.getElementById("yellow").style.backgroundColor= "#E9E0A6";
				break;
			case "blue":
				blueSound.play();
				document.getElementById("blue").style.backgroundColor = "#5D72FF";
				break;

		}

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