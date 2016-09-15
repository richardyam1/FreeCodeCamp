$(document).ready(function(){
  var break_minute = 5;
  var work_minute = 25;
  var paused = true;
  $("#break_minute").text(break_minute);
  $("#work_minute").text(work_minute);
  $(".timer").html("Start Session" + "<br>" + "<br>" + work_minute);

  $("#minus_break").on("click",function(){
    if(break_minute > 1){
      break_minute--;
      $("#break_minute").text(break_minute);
    }
  });
   
   $("#plus_break").on("click", function(){
     if(break_minute < 15){
       break_minute++;
       $("#break_minute").text(break_minute);
     }
   });
    
    $("#minus_work").on("click", function(){
      if(work_minute > 1){
        work_minute--;
        $("#work_minute").text(work_minute);
        $(".timer").html("Start Session" + "<br>" + "<br>" + work_minute);

      }
    });
    
    $("#plus_work").on("click", function(){
      if(work_minute < 40){
        work_minute++;
        $("#work_minute").text(work_minute);
        $(".timer").html("Start Session" + "<br>" + "<br>" + work_minute);

      }
    });

    $(".timer").on("click", function(){
        var seconds = 5;
  
        setInterval(function() {
        if(work_minute > -1 && seconds === -1){
          seconds = 5;
          work_minute--;
        }
        if(seconds < 10){
          seconds = '0' + seconds;
        }
        $(".timer").html("Session" + "<br>" + "<br>" + (work_minute )  + ":" + seconds);
        seconds--;

        }, 1000);
    });
    
  });
  
