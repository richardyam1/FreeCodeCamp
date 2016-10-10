$(document).ready(function(){
	var turn1 = true;
	var gameover = true;
	var score1 = 0;
	var score2 = 0;
	var player1;
	var player2;
	var captureSquare = new Audio("http://www.qwizx.com/gssfx/usa/hs-ding.wav");

	$("#score1").text(score1);
	$("#score2").text(score2);

	$("#markX").click(function(){
		player1 = "X";
		player2 = "O";
		$("#mark1").text("X");
		$("#mark2").text("O");
		resetBoard();
		gameover = false;
		$("#turn1").text("Player 1 turn");
	});

	$("#markO").click(function(){
		player1 = "O";
		player2 = "X";
		$("#mark1").text("O");
		$("#mark2").text("X");
		resetBoard();
		gameover = false;
		$("#turn1").text("Player 1 turn");
	});

	$(".panel").click(function(){
		var mark = "#" + document.getElementById(this.id).id;
		if(document.getElementById(this.id).innerHTML === ""){
			if(turn1){
				$(mark).text(player1);
				$("#turn1").text("");
				$("#turn2").text("Player 2 turn");
			}
			else{
				$(mark).text(player2);
				$("#turn1").text("Player 1 turn");
				$("#turn2").text("");
			}
			captureSquare.play();
			turn1 = !turn1;
		}

	});
	function resetBoard(){
		for(var i = 0; i <= 9 ; i++){	
			var test = document.getElementsByClassName("panel");
			test[i].innerHTML = "";
		}
		turn1 = true;
		$("#turn1").text("");
		$("#turn2").text("");

	}
	$("#clearBoard").click(function(){
		resetBoard();
	});
});