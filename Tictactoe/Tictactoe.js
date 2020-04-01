$(document).ready(function(){
	var turn1 = true;
	var gameover = true;
	var score1 = 0;
	var score2 = 0;
	var player1;
	var player2;
	var computer;
	var vsCPU = false;
	var winner = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7],
	];
	var plays = 0;
	//Timeout function for CPU's turn
	var cpuPick;
	var captureSquare1 = new Audio("audio/square1.wav");
	var captureSquare2 = new Audio("audio/square2.wav");

	$("#score1").text(score1);
	$("#score2").text(score2);

	$("#vsPlayer").click(function(){
		resetBoard();
		//Replaces html elements on right side
		$("#player2").html("Player 2" + '<div class = "score" id = "score2">' + '</div>' + '<div class = "playerMark" id = "mark2">'  + '</div>' + '<div class = "turnStatus" id = "turn2">' + '</div>');
		score1 = 0;
		score2 = 0;
		$("#mark1").text("");
		$("#turn1").text("");
		$("#turn2").text("");
		$("#score1").text(score1);
		$("#score2").text(score2);
		vsCPU = false;
		turn1 = true;
		gameover = true;
		//Stops CPU when game resets in middle of it's turn
		clearTimeout(cpuPick);
	});

	$("#vsCPU").click(function(){
		resetBoard();
		//Replaces html elements on right side
		$("#player2").html("CPU" + '<div class = "score" id = "score2">' + '</div>' + '<div class = "playerMark" id = "mark2">' + '</div>' + '<div class = "turnStatus" id = "turn2">' + '</div>');
		score1 = 0;
		score2 = 0;
		$("#mark1").text("");
		$("#turn1").text("");
		$("#turn2").text("");
		$("#score1").text(score1);
		$("#score2").text(score2);
		vsCPU = true;
		turn1 = true;
		gameover = true;
		//Stops CPU when game resets in middle of it's turn
		clearTimeout(cpuPick);
	});

	$("#reset").click(function(){
		resetBoard();
		$("#mark1").text("");
		$("#mark2").text("");
		$("#turn1").text("");
		$("#turn2").text("");
	});

	function resetBoard(){
		$(".panel").removeClass('x-play');
		$(".panel").removeClass('o-play');
		$(".panel").removeClass('win');
		$(".panel").data("filled", "");
		$(".panel").data("mark", "");
		clearTimeout(cpuPick);
		plays = 0;
		gameover = false;
	}

	$("#markX").click(function(){
		resetBoard();
		player1 = "X";
		player2 = "O";
		gameover = false;
		$("#mark1").text(player1);
		$("#mark2").text(player2);
		if(turn1){
			$("#turn1").text("Player 1 turn");
		}
		else if (!turn1 && vsCPU === false){
			$("#turn2").text("Player 2 turn");
		}
		else if (!turn1 && vsCPU === true){
			$("#turn2").text("CPU turn");
			optimalCPU();
		}
	});

	$("#markO").click(function(){
		resetBoard();
		player1 = "O";
		player2 = "X";
		gameover = false;
		$("#mark1").text(player1);
		$("#mark2").text(player2);
		if(turn1){
			$("#turn1").text("Player 1 turn");
		}
		else if (!turn1 && vsCPU === false){
			$("#turn2").text("Player 2 turn");
		}
		else if (!turn1 && vsCPU === true){
			$("#turn2").text("CPU turn");
			optimalCPU();
		}
	});



	$(".panel").click(function(){
		if($(this).data("filled") !== true && gameover === false) {
			if(turn1){
				captureSquare1.play();

				$(this).data("mark", player1);

				if(player1 === "X"){
					$(this).addClass("x-play");
				}
				else if(player1 === "O"){
					$(this).addClass("o-play");
				}

				$("#turn1").text("");
				if(vsCPU === false){
					$("#turn2").text("Player 2 turn");
				}
				else{
					$("#turn2").text("CPU turn");

				}
				$(this).data("filled", true);
				plays++;
				checkWin();
				turn1 = !turn1;
				
			}
			
			else if (turn1 === false && vsCPU === false){
				captureSquare2.play();

				$(this).data("mark", player2);

				if(player2 === "X"){
					$(this).addClass("x-play");
				}
				else if(player2 === "O"){
					$(this).addClass("o-play");
				}

				$("#turn1").text("Player 1 turn");
				$("#turn2").text("");
				$(this).data("filled", true);
				plays++;
				checkWin();
				turn1 = !turn1;
			}

			if(vsCPU === true && gameover === false){
				optimalCPU();
			}
		}

	});

	function optimalCPU(){
		cpuPick = setTimeout(function(){
			for(i = 0; i < winner.length; i++){
				var p1 = winner[i][0];
				var p2 = winner[i][1];
				var p3 = winner[i][2];
				//Cause CPU to block player or go for the win.
				if(($(".panel[data-square='"+p1+"']").data("mark") ===$(".panel[data-square='"+p2+"']").data("mark"))
					&& $(".panel[data-square='"+p1+"']").data("filled") === true && $(".panel[data-square='"+p2+"']").data("filled") === true
					&& $(".panel[data-square='"+p3+"']").data("filled") === ""){
						captureSquare2.play();
						if(player2 === "X"){
							
							$(".panel[data-square='"+p3+"'").addClass("x-play");
						}
						else if(player2 === "O"){		
							$(".panel[data-square='"+p3+"'").addClass("o-play");
						}
						$(".panel[data-square='"+p3+"']").data("mark", computer);
						$(".panel[data-square='"+p3+"']").data("filled",true);
						plays++;
						checkWin();
						turn1 = !turn1;
						break;
				}
				else if(($(".panel[data-square='"+p1+"']").data("mark") ===$(".panel[data-square='"+p3+"']").data("mark"))
					&& $(".panel[data-square='"+p1+"']").data("filled") === true && $(".panel[data-square='"+p3+"']").data("filled") === true
					&& $(".panel[data-square='"+p2+"']").data("filled") === ""){
						captureSquare2.play();

						if(player2 === "X"){
							$(".panel[data-square='"+p2+"'").addClass("x-play");
						}
						else if(player2 === "O"){
						
							$(".panel[data-square='"+p2+"'").addClass("o-play");
						}
						$(".panel[data-square='"+p2+"']").data("mark", computer);
						$(".panel[data-square='"+p2+"']").data("filled",true);
						plays++;
						checkWin();
						turn1 = !turn1;
						break;

				}
				else if(($(".panel[data-square='"+p2+"']").data("mark") ===$(".panel[data-square='"+p3+"']").data("mark"))
					&& $(".panel[data-square='"+p2+"']").data("filled") === true && $(".panel[data-square='"+p3+"']").data("filled") === true
					&& $(".panel[data-square='"+p1+"']").data("filled") === ""){
							captureSquare2.play();

						if(player2 === "X"){
							
							$(".panel[data-square='"+p1+"'").addClass("x-play");
						}
						else if(player2 === "O"){
							
							$(".panel[data-square='"+p1+"'").addClass("o-play");
						}
						$(".panel[data-square='"+p1+"']").data("mark", computer);
						$(".panel[data-square='"+p1+"']").data("filled",true);
						plays++;
						checkWin();
						turn1 = !turn1;
						break;
				}
				//Pick a random empty squared if no optimal move is available
				else if(i === 7){
					randomCPU();
				}
			}
		}, 1500);

		
	}

	function randomCPU(){	
			for(var i = 0; i < 100; i++){
				var firstmove = Math.floor((Math.random() * 9) + 1);
				if(checkEmpty(firstmove)){
					captureSquare2.play();

					if(player2 === "X"){
						
						$(".panel[data-square='"+firstmove+"'").addClass("x-play");
					}
					else if(player2 === "O"){
					
						$(".panel[data-square='"+firstmove+"'").addClass("o-play");
					}
					$(".panel[data-square='"+firstmove+"'").data("filled",true);
					$(".panel[data-square='"+firstmove+"'").data("mark",computer);
					$("#turn1").text("Player 1 turn");
					$("#turn2").text("");
					plays++;
					checkWin();
					turn1 = !turn1;
					break;
				}
			}
		
		
	}
	//Checks to see if the square is empty
	function checkEmpty(square){
		if($(".panel[data-square='"+square+"']").data("filled") === true){
			return false;
		}
		else{
			return true;
		}

	}


	function checkWin(){
		//Loops through every winning combination
		for(var i = 0; i < winner.length; i++){
			//Checks if the winning condition is achieved.  
			var win = gameOver(winner[i][0], winner[i][1], winner[i][2]);
			if (win){
				if (turn1){
					alert("Player 1 Wins");
					score1++;
					$("#score1").text(score1);
					$("#turn1").text("");
					$("#turn2").text("Player 2 turn");
					gameover = true;
				}
				else {
					if(turn1 === false && vsCPU === false){
						alert("Player 2 Wins");
					}
					else if (vsCPU === true){
						alert("CPU wins");
					}
					score2++;
					$("#score2").text(score2);
					$("#turn1").text("Player 1 turn");
					$("#turn2").text("");
				}

				setTimeout(function(){
					resetBoard();
				},2000);

				setTimeout(function(){
					if(vsCPU === true && turn1 === false){
						optimalCPU();
					}	
				},2000);
				break;
			}
			//Makes sure that draw message does not play if the winning move is done on the last move
			else if(!win && plays === 9 && i === (winner.length - 1)){
				alert("Draw");
				setTimeout(function(){
					resetBoard();
				}, 2000);
				//Make the CPU go after board reset if it has the first turn
				setTimeout(function(){
					if(vsCPU === true && turn1 === false){
						optimalCPU();
					}	
				},2000);
			}
			
			
			
			
		}

	}

	function gameOver(p1,p2,p3){
		if(($(".panel[data-square='"+p1+"']").data("mark") ===$(".panel[data-square='"+p2+"']").data("mark") && $(".panel[data-square='"+p1+"']").data("mark") ===$(".panel[data-square='"+p3+"']").data("mark"))
			&& $(".panel[data-square='"+p1+"']").data("filled") === true && $(".panel[data-square='"+p2+"']").data("filled") === true && $(".panel[data-square='"+p3+"']").data("filled") === true)
		{	
			//Lights up the winning squares
			$(".panel[data-square='"+p1+"']").addClass("win");
			$(".panel[data-square='"+p2+"']").addClass("win");
			$(".panel[data-square='"+p3+"']").addClass("win");

			return true;
		}
		else{
			
			return false;
		}
		
	}


	
});



