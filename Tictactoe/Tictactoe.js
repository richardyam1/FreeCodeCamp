$(document).ready(function(){
	var turn1 = true;
	var gameover = true;
	var score1 = 0;
	var score2 = 0;
	var player1;
	var player2;
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
	
	var captureSquare = new Audio("http://www.qwizx.com/gssfx/usa/hs-ding.wav");

	$("#score1").text(score1);
	$("#score2").text(score2);

	$("#markX").click(function(){
		player1 = "X";
		player2 = "O";
		gameover = false;
		$("#mark1").text("X");
		$("#mark2").text("O");
		$("#turn1").text("Player 1 turn");
		resetBoard();
	});

	$("#markO").click(function(){
		player1 = "O";
		player2 = "X";
		gameover = false;
		$("#mark1").text("O");
		$("#mark2").text("X");
		$("#turn1").text("Player 1 turn");
		resetBoard();
	});

	$(".panel").click(function(){
		if($(this).data("filled") !== true && gameover === false) {
			if(turn1){
				if(player1 === "X"){
					$(this).addClass("x-play");
					$(this).data("mark", "X");
					
				}
				else if(player1 === "O"){
					$(this).addClass("o-play");
					$(this).data("mark", "O");

				}
				$("#turn1").text("");
				$("#turn2").text("Player 2 turn");
				$(this).data("filled", true);
			}
			else{
				if(player2 === "X"){
					$(this).addClass("x-play");
					$(this).data("mark", "X");
				}
				else if(player2 === "O"){
					$(this).addClass("o-play");
					$(this).data("mark", "O");
				}
				$("#turn1").text("Player 1 turn");
				$("#turn2").text("");
				$(this).data("filled", true);

			}
			captureSquare.play();
			checkGame();
			turn1 = !turn1;
			plays++;
		}

	});
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
					score1++;
					$("#score1").text(score1);
					$("#turn1").text("");
					$("#turn2").text("Player 2 turn");

				}
				else{
					score2++;
					$("#score2").text(score2);
					$("#turn1").text("Player 1 turn");
					$("#turn2").text("");
				}
				alert("test");
				resetBoard();

				}
				
			else if(!win){
				if (plays === 8){
					alert("draw");
					resetBoard();
				}
				
			}
			
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