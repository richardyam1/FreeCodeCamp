$(document).ready(function(){
	var on = false;
	var start = false;
	var strict = false;
	var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
	var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
	var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
	var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
	var captureSquare = new Audio("http://www.qwizx.com/gssfx/usa/hs-ding.wav");

	var round = 1;
	var playerTurn = false;
	var cpuSequence = [];
	var playerSequence = [];
	var cpuCount = 0;
	var playerCount = 0;
	var interval;
		if(playerTurn === true){
			$("#green").click(function(){
				lightUp("green");
				playerSequence.push("green");
				checkMatch();
			});

			$("#red").click(function(){
				lightUp("red");
				playerSequence.push("red");
				checkMatch();
			});

			$("#yellow").click(function(){
				lightUp("yellow");
				playerSequence.push("yellow");
				checkMatch();
			});

			$("#blue").click(function(){
				lightUp("blue");
				playerSequence.push("blue");
				checkMatch();
			});
		}
	


	function cpuPick(){
		var select = Math.floor((Math.random() * 4) + 1);
		switch(select){
			case 1:
				cpuSequence.push("green");
				break;
			case 2:
				cpuSequence.push("red");
				break;
			case 3:
				cpuSequence.push("yellow");
				break;
			case 4:
				cpuSequence.push("blue");
				break;
		}
	}

	function playSequence(){
		interval = setInterval(function(){
			if(cpuCount < cpuSequence.length){
				lightUp(cpuSequence[cpuCount]);
				cpuCount++;
			}
			else{
				clearInterval(interval);
				playerTurn = true;
				cpuCount = 0;
			}
		}, 1000);
	}

	function checkMatch(){
		if(playerSequence[playerCount] !== cpuSequence[playerCount]){
			captureSquare.play();
			$("#roundNumber").html("XX");
			setTimeout(function(){
				$("#roundNumber").html(round);
				playSequence();

			}, 1000);
			playerCount = 0;
			playerSequence = [];
		}
		else if(playerSequence[playerCount] === cpuSequence[playerCount]){
			playerCount++;
		}

		if(playerCount === cpuSequence.length){
				playerCount = 0;
				playerSequence = [];
				cpuPick();
				playSequence();
				round++;
				$("#roundNumber").html(round);
		}
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
			cpuSequence = [];
			playerSequence = [];
			cpuCount = 0;
			playerCount = 0;

			$("#roundNumber").text("--");
		}
	});

	$("#start").click(function(){
		if(start === false && on === true){
			document.getElementById("start").style.backgroundColor = "green";
			start = true;
			$("#roundNumber").text(round);
			cpuPick();
			playSequence();
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