$(document).ready(function(){
	var on = false;
	var start = false;
	var strict = false;
	var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
	var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
	var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
	var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
	var error = new Audio("http://soundjax.com/reddo/17604%5Eerror.mp3");
	var click = new Audio("http://soundjax.com/reddo/36340%5EClick03.mp3");
	var round = 1;
	var score = 0;
	var cpuCount = 0;
	var playerCount = 0;
	var playerTurn = false;
	var cpuSequence = [];
	var playerSequence = [];
	//store timeout function
	var retry;
	//store interval function
	var sequence;
	$("#green").click(function(){
		if(playerTurn === true){
			playerSequence.push("green");
			checkMatch("green");
		}
	});

	$("#red").click(function(){
		if(playerTurn === true){
			playerSequence.push("red");
			checkMatch("red");
		}
	});

	$("#yellow").click(function(){
		if(playerTurn === true){
			playerSequence.push("yellow");
			checkMatch("yellow");
		}
	});

	$("#blue").click(function(){
		if(playerTurn === true){
			playerSequence.push("blue");
			checkMatch("blue");
		}
	});

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
		sequence = setInterval(function(){
			if(cpuCount < cpuSequence.length){
				lightUp(cpuSequence[cpuCount]);
				cpuCount++;
			}
			else{
				playerTurn = true;
				cpuCount = 0;
				clearInterval(sequence);
			}
		}, 1000);
	}

	function checkMatch(colorMatch){
		if(playerSequence[playerCount] !== cpuSequence[playerCount]){
			error.play();
			$("#roundNumber").html("XX");
			retry = setTimeout(function(){
				$("#roundNumber").html(round);
				if(strict === false){
					playSequence();
				}
				else if(strict === true){
					round = 1;
					score = 0;
					$("#roundNumber").text(round);
					cpuSequence = [];
					cpuPick();
					playSequence();
				}
			}, 1000);
			playerCount = 0;
			playerSequence = [];
			playerTurn = false;	
		}
		else if(playerSequence[playerCount] === cpuSequence[playerCount]){
			lightUp(colorMatch);
			playerCount++;
		}
		
		if(playerCount === cpuSequence.length){
			lightUp(colorMatch);
			playerCount = 0;
			playerSequence = [];
			score++;
			if(score === 20){
				alert("You win!");
				cpuSequence = [];
				round = 1;
				score = 0;
			}
			else{
				round++;
			}
			setTimeout(function(){
				cpuPick();
				playSequence();
			},500);
			playerTurn = false;
			$("#roundNumber").html(round);
		}
	}

	function lightUp(colorLight){
			switch(colorLight){
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
			document.getElementById(colorLight).style.backgroundColor = colorLight;
		},400);
	}

	$("#powerSwitch").click(function(){
		click.play();
		if(on === false){
			$("#switch").animate({marginLeft: "50px"});
			on = true;
			round = 1;
			$("#roundNumber").text(round);
		}
		else if(on === true){
			$("#switch").animate({marginLeft: "5px"});
			document.getElementById("strict").style.backgroundColor = "yellow";
			start = false;
			strict = false;
			on = false;
			playerTurn = false;
			cpuSequence = [];
			playerSequence = [];
			cpuCount = 0;
			playerCount = 0;
			round = 1;
			clearInterval(sequence);
			clearTimeout(retry);
			$("#roundNumber").text("--");
		}
	});

	$("#start").click(function(){
		if(start === false && on === true){
			start = true;
			$("#roundNumber").text(round);
			cpuPick();
			playSequence();
		}
		else if(start === true && on === true){
			cpuSequence = [];
			playerSequence = [];
			round = 1;
			playerCount = 0;
			score = 0;
			$("#roundNumber").text("--");
			setTimeout(function(){
				cpuPick();
				playSequence();
				$("#roundNumber").text(round);
			}, 1000);
			
		}
	});

	$("#start").mousedown(function(){
		if(on === true){
			$(this).css("background", "green");
		}
	});

	$("#start").mouseup(function(){
		$(this).css("background", "red");
	});
	
	$("#strict").click(function(){
		if(strict === false && on === true){
			document.getElementById("strict").style.backgroundColor = "green";
			document.getElementById("strictLight").style.backgroundColor = "red";
			strict = true;
		}
		else if(strict === true && on === true){
			document.getElementById("strict").style.backgroundColor = "yellow";
			document.getElementById("strictLight").style.backgroundColor = "silver";
			strict = false;
		}
	});
});


