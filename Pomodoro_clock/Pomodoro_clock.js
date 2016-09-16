$(document).ready(function(){
  var break_minute = 5;
  var work_minute = 25;
  //Set to 5 for testing purposes
  var seconds = 0;
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
       if(paused === true){
        paused = false;
       }

       else if(paused === false){
        paused = true;
       }
      
        var c = setInterval(function() {
          if(work_minute > 0 && seconds === -1){
            //Set to 5 for testing purposes
            seconds = 5;
            work_minute--;
          }
          if(seconds < 10){
            seconds = '0' + seconds;
          }
          $(".timer").html("Pause Session" + "<br>" + "<br>" + (work_minute )  + ":" + seconds);
          seconds--;
          if(paused === true){
            $(".timer").html("Resume Session" + "<br>" + "<br>" + (work_minute )  + ":" + seconds);

            clearInterval(c);
          }

        }, 1000);
        
       

       

        
    });
    
  });
  
