$(document).ready(function(){
	var turn1 = true;
	$(".panel").click(function(){
		var mark = "#" + document.getElementById(this.id).id;
		if(document.getElementById(this.id).innerHTML === ""){
			if(turn1){
				$(mark).text("X");
			}
			else{
				$(mark).text("O");
			}
			turn1 = !turn1;
		}



	function resetBoard(){
		for(var i = 0; i <= 9 ; i++){		
			var test = document.getElementsByClassName("panel");
			test[i].innerHTML = "";
		}

		
	}
	$(".restart").click(function(){
		resetBoard();
	});
	});
});