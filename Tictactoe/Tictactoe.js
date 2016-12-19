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
		[3, 5, 7]
	];
	var plays = 0;
	var cpuPick;
	var captureSquare = new Audio("http://www.qwizx.com/gssfx/usa/hs-ding.wav");

	$("#score1").text(score1);
	$("#score2").text(score2);

	$("#vsPlayer").click(function(){
		resetBoard();
		//Done this way instead of just text so all the <div> within player2 don't get replaced
		$("#player2").html("Player 2" + '<div class = "score" id = "score2">' + '</div>' + '<div class = "playerMark" id = "mark2">'  + '</div>' + '<div class = "turnStatus" id = "turn2">' + '</div>');
		score1 = 0;
		score2 = 0;
		$("#mark1").text("");
		$("#turn1").text("");
		$("#turn2").text("");
		$("#score1").text(score1);
		$("#score2").text(score2);
		vsCPU = false;
		gameover = true;
	});

	$("#vsCPU").click(function(){
		resetBoard();
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
	});

	$("#markX").click(function(){
		player1 = "X";
		player2 = "O";
		gameover = false;
		$("#mark1").text(player1);
		$("#mark2").text(player2);
		if(turn1){
			$("#turn1").text("Player 1 turn");
		}
		resetBoard();
	});

	$("#markO").click(function(){
		player1 = "O";
		player2 = "X";
		gameover = false;
		$("#mark1").text(player1);
		$("#mark2").text(player2);
		if(turn1){
			$("#turn1").text("Player 1 turn");
		}
		resetBoard();
	});

	$(".panel").click(function(){
		if($(this).data("filled") !== true && gameover === false) {
			if(turn1){
				$(this).data("mark", player1);

				if(player1 === "X"){
					$(this).addClass("x-play");
				}
				else if(player1 === "O"){
					$(this).addClass("o-play");
				}

				$("#turn1").text("");
				$("#turn2").text("Player 2 turn");
				$(this).data("filled", true);
				$(this).addClass("play1");
				checkGame();
				if(vsCPU === false){
					turn1 = !turn1;
				}
			}
			
			else if (turn1 === false && vsCPU === false){
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
				$(this).addClass("play2");
				checkGame();
				turn1 = !turn1;
			}
			captureSquare.play();
			plays++;
			
			if(vsCPU === true){
				firstCPU();
			}
		}

	});
	


	function CPU(p1,p2,p3){
		if(($(".panel[data-square='"+p1+"']").data("mark") ===$(".panel[data-square='"+p2+"']").data("mark"))
			&& $(".panel[data-square='"+p1+"']").data("filled") === true && $(".panel[data-square='"+p2+"']").data("filled") === true){
				$(".panel[data-square='"+p3+"']").data("mark", computer);
				$(".panel[data-square='"+p3+"']").data("filled",true);
		}
		else if(($(".panel[data-square='"+p1+"']").data("mark") ===$(".panel[data-square='"+p3+"']").data("mark"))
			&& $(".panel[data-square='"+p1+"']").data("filled") === true && $(".panel[data-square='"+p3+"']").data("filled") === true){
				$(".panel[data-square='"+p2+"']").data("mark", computer);
				$(".panel[data-square='"+p2+"']").data("filled",true);

		}
		else if(($(".panel[data-square='"+p2+"']").data("mark") ===$(".panel[data-square='"+p3+"']").data("mark"))
			&& $(".panel[data-square='"+p2+"']").data("filled") === true && $(".panel[data-square='"+p3+"']").data("filled") === true){
				$(".panel[data-square='"+p1+"']").data("mark", computer);
				$(".panel[data-square='"+p1+"']").data("filled",true);
		}
	}

	function firstCPU(){
		setTimeout(function(){
			for(var i = 0; i < 100; i++){
			var firstmove = Math.floor((Math.random() * 9) + 1);
			if(checkEmpty(firstmove)){
				if(player2 === "X"){
					captureSquare.play();
					$(".panel[data-square='"+firstmove+"'").addClass("x-play");
				}
				else if(player2 === "O"){
					captureSquare.play();
					$(".panel[data-square='"+firstmove+"'").addClass("o-play");
				}
				$(".panel[data-square]='"+firstmove+"'").data("filled",true);
				$(".panel[data-square]='"+firstmove+"'").data("mark",computer);
				$(".panel[data-square]='"+firstmove+"'").addClass("play2");

				checkGame();
				vsCPU = !vsCPU;
				turn1 = true;
				break;
			}
		}
		},1500);
		
	}

	function gameOver(p1,p2,p3){
		if(($(".panel[data-square='"+p1+"']").data("mark") ===$(".panel[data-square='"+p2+"']").data("mark") && $(".panel[data-square='"+p1+"']").data("mark") ===$(".panel[data-square='"+p3+"']").data("mark"))
			&& $(".panel[data-square='"+p1+"']").data("filled") === true && $(".panel[data-square='"+p2+"']").data("filled") === true && $(".panel[data-square='"+p3+"']").data("filled") === true)
		{
			return true;

		}
		else{
			
			return false;
		}
		
	}

	function checkGame(){
		for(var i = 0; i < winner.length; i++){
			var win = gameOver(winner[i][0], winner[i][1], winner[i][2]);
			if (win){
				if (turn1){
					alert("Player 1 Wins");
					score1++;
					$("#score1").text(score1);
					$("#turn1").text("");
					$("#turn2").text("Player 2 turn");

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

			}
				
			else if(!win){
				if (plays ===8){
					alert("draw");
					setTimeout(function(){
						resetBoard();
					}, 2000)
				}
				
			}
			
		}

	}

	function checkEmpty(square){
		if($(".panel[data-square='"+square+"']").data("filled") === true){
			return false;
		}
		else{
			return true;
		}

	}

	function resetBoard(){
		$(".panel").removeClass('x-play');
		$(".panel").removeClass('o-play');
		$(".panel").data("filled", "");
		plays = 0;
		
	}
	$("#clearBoard").click(function(){
		resetBoard();
	});
});



